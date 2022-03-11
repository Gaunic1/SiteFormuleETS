<template>
  <div class="w-full min-h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white"
  lazy-background="/static/photos/fond.svg">
      <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
     <div class="w-full h-16"></div>

     <div class="flex flex-wrap h-full relative gap-10 justify-center">
        <!-- LOADER -->
        <i v-if="!loaded" class="mt-10 fa-solid fa-spinner text-red-500 text-7xl animate-spin"></i>

        <!-- CONTENT -->
        <template v-for="item of db.albums.sort((a,b) => a.name - b.name)" :key="item.name">

            <router-link :to="'/photos/' + item.id">
                <div class="dark:text-white
                calc-w border dark:bg-dark-mode bg-white dark:border-white cursor-pointer"
                data-aos="zoom-in">
                    <div class="flex p-2 items-center relative w-full">
                        <i class="fas fa-image"></i>
                        <h2 class="absolute right-2">{{ item.name }}</h2>
                    </div>
                    <div class="bg-cover bg-center w-full h-60 lazy-skeleton" 
                    :lazy-background="getImage(item.name)">
                    </div>
                </div>
            </router-link>

        </template>
     </div>

  </div>
</template>

<script>
import googleDriveMixin from "./google-drive-mixin";

export default {
    name: "Photos",
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

    methods: {
        getImage(item){
            const img = this.db.images.find(e => e.name.includes(item));
            return img ? img.url : "/static/photos/404.jpg";
        }
    }
}
</script>

<style scoped>
.calc-w{
     width: 24rem;
}

@media only screen and (max-width: 728px) {
  .calc-w{
    width: calc(100vw - 5rem);
  }
}
</style>