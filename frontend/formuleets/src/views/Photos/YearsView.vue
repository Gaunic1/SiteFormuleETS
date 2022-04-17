<template>
  <div class="w-full min-h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white"
  lazy-background="/static/photos/fond.svg">
      <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
     <div class="w-full h-16"></div>

     <div class="flex flex-wrap h-full relative gap-10 justify-center p-5 items-center">
        <!-- LOADER -->
        <i v-if="!loaded" class="mt-10 fa-solid fa-spinner text-red-500 text-7xl animate-spin"></i>

        <!-- CONTENT -->
        <template v-for="item of db.years" :key="item">

            <router-link :to="'/media/photos/' + item">
                <div class="dark:text-white
                dark:bg-dark-mode bg-white border dark:border-gray-100 cursor-pointer mb-5 w-40 h-20 flex justify-center
                items-center"
                lazy-animation="zoomin">
                    <h2 class="font-bold">{{ item }}</h2>
                </div>
            </router-link>

        </template>
     </div>

  </div>
</template>

<script>
import googleDriveMixin from "./google-drive-mixin";

export default {
    name: "Years",
    mixins: [googleDriveMixin],
    data(){
        return {
            loaded: false
        }
    },

    async mounted(){
        await this.getDb(this.drive);
        this.loaded = true;
    },
}
</script>