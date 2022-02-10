<template>
  <div class="w-full flex flex-col justify-center overflow-x-hidden dark:bg-dark-mode bg-white">
      <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
      <div class="h-24"></div>

      <!-- BECOME PARTENER -->
      <section class="flex justify-center items-center">
        <a :href="sponsors.button.link">
          <button class="pb-5 pt-5 pl-10 pr-10 mb-5 uppercase dark:bg-white bg-dark-mode dark:text-black text-white font-bold">
            {{ $t(sponsors.button.title) }}
          </button>
        </a>
      </section>

      <!-- SPONSORS -->
      <template v-for="categorie of categories" :key="categorie.name">

        <h1 lazy-animation="zoomin" lazy-reset class="dark:text-white font-bold text-4xl uppercase italic mb-20 mt-10 text-center">
          {{ $t(categorie.title) }}
        </h1>

        <hr lazy-animation="zoomin" lazy-reset class="border border-red-500 bg-red-500 m-5">

        <section class="w-full flex items-center justify-center flex-wrap p-5 bg-white">
          <template v-for="sponsor of sponsors[categorie.name]" :key="sponsor.src">
            <a :href="sponsor.src || '#'">
              <img class="m-5 w-64 inline-block opacity-0" 
              lazy-size-height="10rem" 
              :lazy-src="sponsor.imageSrc" 
              lazy-animation="opacity" 
              alt="Sponsor">
            </a>
          </template>
        </section>

      </template>

  </div>
</template>

<script>
import sponsors from "./sponsors"

export default {
    name: "Sponsors",
    data(){
      return {
        sponsors: sponsors,
        categories: [
          {
            title: "message.sponsors.diamond",
            name: "diamond"
          },  
          {
            title: "message.sponsors.gold",
            name: "gold"
          },
          {
            title: "message.sponsors.silver",
            name: "silver"
          },
          {
            title: "message.sponsors.bronze",
            name: "bronze"
          }
        ]
      }
    }
}
</script>