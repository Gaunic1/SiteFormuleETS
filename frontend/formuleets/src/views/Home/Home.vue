<template>
  <div>
    <!-- PRESENTATION -->
    <div class="bg-first w-full flex flex-wrap overflow-x-hidden">
      <div class="bg-triangle absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-700 to-dark-mode z-10"></div>

      <div class="flex-initial h-screen w-full lg:w-1/3 flex flex-col justify-center p-5 z-20" data-aos="fade-right">
        <h1 class="dark:text-white font-normal tracking-wider text-5xl italic text-center lg:text-8xl lg:text-left">{{ text.titre }}<span class="text-red-600 font-bold">{{ text.ETS }}</span></h1>
        <p class="mt-10 dark:text-white text-center lg:text-left">{{ text.text }}</p>
      </div>
      <div class="flex-initial h-screen w-2/3 justify-center items-center hidden lg:flex z-0">
        <img id="formule" lazy-src="/static/home/formule.png" lazy-animation="slide-right" alt="Formule" class="z-0">
      </div>

      <!-- PART2 -->
      <div class="flex-initial w-full z-10 bg-first overflow-x-hidden bg-white dark:bg-dark-mode">

        <!-- QUI SOMME NOUS ? -->
        <div class="flex flex-col lg:flex-row flex-wrap w-full">
          <div data-aos="fade-right" class="flex-initial p-5 w-full lg:w-2/3">
            <h1 class="text-black dark:text-white text-4xl font-bold italic">Qui somme nous ?</h1>
            <p class="mt-3 text-black dark:text-white text-justify">
              Formule ETS est une équipe de Formule SAE composée d'étudiants en ingénierie de l'École de technologie supérieure de Montréal. Les compétitions de la Collegiate Design Series regroupe plus de 600 équipes universitaires à travers le monde. Elles s’affrontent en présentant un plan d'affaires à des juges, en décrivant leur philosophie de conception de leur véhicule, en créant la liste des coûts du projet et bien sûr en se mesurant aux meilleures équipes de la Formule SAE lors de courses palpitantes. 
              <br><br>
              Pour la première fois en plus de 30 ans, l’équipe Formule ETS conçoit et fabrique sa première itération de voiture électrique. Par le passé, nous nous sommes démarqués de la compétition en ayant à plusieurs reprises le véhicule le plus léger en compétition, en démontrant une finition du véhicule exemplaire et en ayant à de nombreuses reprises atteint les marches du podium lors des nombreuses compétitions auxquels l’équipe participe. 
            </p>
          </div>

          <div class="flex-initial p-5 w-full lg:w-1/3 h-full flex items-center justify-center" data-aos="fade-left">
            <img src="/static/home/team.jpg" alt="Teams" class="h-full border-8 border-red-600 rounded">
          </div>
        </div>

        <hr class="border-red-600 mr-3 ml-3 mt-5 mb-5" data-aos="zoom-in">

        <!-- LE PROJET ? -->
        <div class="flex flex-wrap w-full lg:flex-row">
          <div class="flex-initial p-5 w-full lg:w-1/3 h-full flex items-center justify-center" data-aos="fade-right">
            <img lazy-src="/static/home/formuleETS.jpg" lazy-animation="opacity" alt="Teams" class="h-full border-8 border-red-600 rounded">
          </div>

          <div data-aos="fade-left" class="flex-initial p-5 w-full lg:w-2/3">
            <h1 class="text-black dark:text-white text-4xl font-bold italic">Le projet ?</h1>
            <p class="mt-3 text-black dark:text-white text-justify">
              Formule ETS est une équipe d'étudiants en ingénierie de l'École de technologie supérieure à Montréal. L'équipe conçoit et fabrique des voitures de course dans le but de participer à des compétitions de Formula SAE depuis maintenant un peu plus de 30 ans avec toujours le même objectif : "GAGNER"
              <br><br>
              Les véhicules qui sortent de l'atelier de la Formule ETS reflètent notre philosophie de conception. Ainsi, nous poursuivons incessamment la conception du véhicule le plus léger, année après année. Cette année, nous avons décidé de relever un nouveau défi, soit de construire notre première formule électrique.
              <br><br>
              Notre première voiture électrique pèse environ 195 kg et est propulsée par quatre moteurs AMK situés à chaque roue. MANIC est chaussée de pneu Hoosier de 16 pouces montés sur des roues en aluminium et des étriers de frein conçu spécialement pour chacune de celle-ci.    
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Home",
    data(){
      return {
        text: {
          titre: "Formule",
          ETS: "ETS",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
        },
      }
    },
    created(){
      document.addEventListener('scroll', this.scrollFormule);
    },
    beforeUnmount(){
      document.removeEventListener("scroll", this.scrollFormule);
    },
    methods: {
      scrollFormule(){
        const scroll = window.scrollY ? window.scrollY : document.body.scrollTop;
        if(scroll < window.innerHeight){
          const formule = document.querySelector('#formule');
          if(formule) formule.style = `transition: none!important; transform: translate(${-scroll}px, ${scroll}px)`;
          else document.removeEventListener("scroll", this.scrollFormule);
        }
      }
    }
}
</script>

<style scoped>
.bg-triangle{
  clip-path: polygon(0 0, 60% 100%, 0 100%);
}
</style>