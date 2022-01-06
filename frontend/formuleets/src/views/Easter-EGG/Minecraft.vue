<template>
  <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
  <div class="h-12"></div>

  <div class="calc-height w-full">
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
        src="https://classic.minecraft.net/"
        ></iframe>
  </div>
</template>

<script>
export default {
    name: "Minecraft"
}
</script>

<style scroped>
.calc-height{
  height: calc(100vh - 3rem);
}

</style>