<template>
  <div class="flex flex-col justify-center items-center text-center w-full h-screen dark:bg-gray-800">
      <div class="w-80 sm:w-96 h-36 bg-cover bg-center" :style="`background-image: url('${image}')`"></div>
  </div>
</template>

<script>
export default {
    name: "Error404",
    data(){
        return {
            title: "Page not found",
            image: require('../../assets/404.gif')
        }
    }
}
</script>

<style>

</style>