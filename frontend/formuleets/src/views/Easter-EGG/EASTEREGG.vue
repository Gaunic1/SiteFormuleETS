<template>
  <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
  <div class="h-12"></div>

  <!-- ON PHONE -->
  <div v-if="isMobile"
  class="calc-height w-full flex justify-center items-center flex-wrap bg-cover bg-fixed bg-center" 
  lazy-background="/static/easter-egg/fond.svg">
    <h3 class="dark:text-white text-3xl p-5 text-center">
      {{ $t("message.eastereggs.phone") }}
    </h3>
  </div>

  <!-- MENU -->
  <div class="calc-height w-full flex justify-center items-center flex-wrap bg-cover bg-fixed bg-center" 
  v-if="!game && !isMobile" 
  lazy-background="/static/easter-egg/fond.svg"> 
    <template v-for="item of games" :key="item.name">
      <button data-aos="zoom-in" 
      @click="game = item.url" 
      class="dark:bg-white dark:text-black bg-dark-mode text-white p-5 m-5 w-56 uppercase">
        {{ item.name }}
      </button>
    </template>
  </div>

  <!-- GAME -->
  <div class="calc-height w-full" v-if="game && !isMobile">
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
import phoneMixin from "../../mixins/phone-mixin"

export default {
    name: "EASTEREGG",
    mixins: [phoneMixin],
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