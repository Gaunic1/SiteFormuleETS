<template>
  <section class="text-center">
    <h2 class="text-red-600 text-4xl my-8 font-bold italic tracking-wider text-shadow 
    z-10 uppercase"
    data-aos="fade-up">
      {{ $t('message.date.mainTitle') }}
    </h2>
  </section>

  <section class="h-screen w-full dark:bg-dark-mode bg-white
  flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat relative py-5" 
  lazy-background="/static/home/fond2.svg">
    <!-- BAR -->
    <div class="bg-red-600 w-2 h-full rounded-md absolute" data-aos="zoom-in"></div>

    <!-- CONTENT -->
    <div v-for="(item, index) of dateList" 
    :key="item"
    data-aos="zoom-in"
    class="w-full z-10 dark:text-white flex">

        <div class="w-1/2 flex items-center px-8 my-10" :class="index%2 == 0 ? 'justify-end' : 'ml-auto'">
            <Countdown :date="item.date" :hour="item.hour" :title="item.title"></Countdown>
            <div class="rounded-full bg-red-800 w-8 h-8 ml-10 absolute right-1/2 transform translate-x-1/2"></div>
        </div>

    </div>

  </section>
</template>

<script>
import Countdown from "../Countdown/Countdown.vue";
import dateList from "./date";

export default {
    name: "Date",
    components: { Countdown },
    data(){
      return {
        dateList: dateList
      }
    }
}
</script>