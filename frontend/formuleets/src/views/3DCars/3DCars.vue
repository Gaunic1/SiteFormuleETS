<template>
  <div class="h-screen dark:bg-dark-mode flex justify-center">
      <div class="h-2/3">
            <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
            <div class="h-0"></div>

            <div id="render"></div>
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
        camera: null
      }
    },
    mounted(){
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( document.body.clientWidth , window.innerHeight );
      renderer.setClearColor("#888888");

      renderer.setPixelRatio(window.devicePixelRatio);

      const controls = new OrbitControls( camera, renderer.domElement );

      // Create a directional light
      const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x202020, model3d.ambientLight);
      const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
      // move the light back and up a bit

      // remember to add the light to the scene
      scene.add(ambientLight, mainLight)

      // instantiate a loader
      const loader = new OBJLoader();

      // load a resource
      var model;
      const materialsLoader = new MTLLoader();
      materialsLoader.load(model3d.texture, function (materialsCreator) {

          loader.setMaterials(materialsCreator);

          loader.load(model3d.src, function (obj) {
              camera.position.set(model3d.position.x,model3d.position.y,model3d.position.z);

              model = obj;

              // obj.position.z = model3d.position.z;
              // obj.position.x = model3d.position.x;
              // obj.position.y = model3d.position.y;

              obj.rotation.z = model3d.rotation.z;
              obj.rotation.x = model3d.rotation.x;
              obj.rotation.y = model3d.rotation.y;

              scene.add( obj );

              controls.update();

          });

      });

      camera.lookAt(0, 0, 0);

      const animate = function() {
        requestAnimationFrame(animate);
    
        if (model) {
          model.rotation.z += 0.0005;
        }
    
        renderer.render(scene, camera);
      };
    
      animate();

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