<template>
  <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
  <div class="h-12"></div>

  <div class="calc-height w-full flex justify-center items-center flex-wrap bg-cover bg-fixed bg-center" 
  v-if="!game" 
  lazy-background="/static/easter-egg/fond.svg"> 
    <template v-for="item of games" :key="item.name">
      <button data-aos="zoom-in" 
      @click="game = item.url" 
      class="dark:bg-white dark:text-black bg-dark-mode text-white p-5 m-5 w-56 uppercase">
        {{ item.name }}
      </button>
    </template>
  </div>

  <div class="calc-height w-full" v-if="game">
      <button @click="game = null"
      class="bg-white text-black dark:bg-dark-mode dark:text-white p-2 m-5 uppercase absolute top-12 left-1 z-10 
      border border-black dark:border-white">
        {{ $t('message.other.back') }}
      </button>

      <iframe
        id="game-iframe"
        width="100%"
        height="100%"
        allowfullscreen="true"
        allow="autoplay; fullscreen; camera"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        name="gameFrame"
        scrolling="no"
        sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin"
        :src="game"
        ></iframe>
  </div>
</template>

<script>
import games from "./games"

export default {
    name: "EASTEREGG",
    data(){
      return {
        games: games,
        game: null
      }
    }
}
</script>

<style scroped>
.calc-height{
  height: calc(100vh - 3rem);
}

</style>