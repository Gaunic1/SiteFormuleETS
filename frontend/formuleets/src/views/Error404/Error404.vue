<template>
  <div class="flex flex-col justify-center items-center text-center w-full
   h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white" 
  lazy-background="/static/404/contour2.svg">
      <!-- TITLE -->
      <h2 data-aos="fade-down" class="text-3xl dark:text-white uppercase mb-7 font-thin">{{ $t('message.404.title') }}</h2>

      <!-- IMAGE -->
      <div class="w-80 sm:w-96 h-36 bg-cover bg-center" 
      lazy-background="/static/404/404.gif" 
      lazy-animation="zoomin"></div>
  </div>
</template>

<script>
export default {
    name: "Error404",
}
</script>