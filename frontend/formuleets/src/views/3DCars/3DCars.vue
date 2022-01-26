<template>
  <div class="h-screen flex justify-center dark:bg-dark-mode bg-white">
      <div id="render" class="flex justify-center items-center h-screen">
        <div v-if="!finish" id="loading" class="z-10 flex flex-col p-5 items-center justify-center absolute dark:bg-dark-mode bg-white dark:text-white">
          <h3 v-if="!error" class="text-lg uppercase">{{ $t(title) }}</h3>
          <span v-if="!error">{{ pourcentage }} %</span>

          <h3 v-if="error" class="text-lg uppercase text-red-500">Error</h3>
          <span v-if="error" class="text-red-500">{{ error }}</span>
        </div>
      </div>
  </div>
</template>

<script>
//THREE JS
import * as THREE from 'three/build/three.module.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

//local
import model3d from "./model.js"

export default {
    name: "3DCars",
    data(){
      return {
        scene: null,
        camera: null,
        pourcentage: 0,
        finish: false,
        title: "message.3dmodel.textureLoading",
        error: false
      }
    },
    mounted(){
      const sceneExist = document.querySelector('#scene');

      if(sceneExist) sceneExist.remove();

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize( document.body.clientWidth , window.innerHeight );

      renderer.setPixelRatio(window.devicePixelRatio);

      const controls = new OrbitControls( camera, renderer.domElement );

      // Create a directional light
      const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, model3d.ambientLight);
      const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);

      // remember to add the light to the scene
      scene.add(ambientLight, mainLight)

      // instantiate a loader
      const loader = new OBJLoader();

      // load a resource
      var model;
      const materialsLoader = new MTLLoader();

      // called when loading has errors
      const vueElement = this;

      const errorHandler = (error) => {
        vueElement.error = error;
      }

      materialsLoader.load(model3d.texture, function (materialsCreator) {

          loader.setMaterials(materialsCreator);

          loader.load(model3d.src, function (obj) {
              camera.position.set(model3d.position.x,model3d.position.y,model3d.position.z);

              model = obj;

              obj.rotation.z = model3d.rotation.z;
              obj.rotation.x = model3d.rotation.x;
              obj.rotation.y = model3d.rotation.y;

              scene.add( obj );

              controls.update();

          }, (xhr) => {
            vueElement.title = "message.3dmodel.modelLoading";
            if( xhr.lengthComputable ) vueElement.pourcentage = Math.round((xhr.loaded / xhr.total) * 100 );
            if((vueElement.pourcentage >= 100) && !vueElement.error) vueElement.finish = true;
          }, errorHandler);

      }, (xhr) => {
        vueElement.title = "message.3dmodel.textureLoading";
        if( xhr.lengthComputable ) vueElement.pourcentage = Math.round((xhr.loaded / xhr.total) * 100 );
      }, errorHandler);

      camera.lookAt(0, 0, 0);

      const animate = function() {
        requestAnimationFrame(animate);
    
        if (model && model3d.animate) {
          model.rotation.z += 0.0005;
        }
    
        renderer.render(scene, camera);
      };
    
      animate();

      renderer.domElement.id = "scene";

      document.querySelector('#render').appendChild( renderer.domElement );

      this.scene = renderer;
      this.camera = camera;

      window.addEventListener('resize', this.resizeCanvas);
    },
    unmounted(){
      window.removeEventListener('resize', this.resizeCanvas);
    },
    methods: {
      resizeCanvas(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.scene.setSize( document.body.clientWidth , window.innerHeight );
      }
    }
}
</script>

<style>

</style>