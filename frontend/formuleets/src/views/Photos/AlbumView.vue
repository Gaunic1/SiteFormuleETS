<template>
  <div class="w-full min-h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white"
  lazy-background="/static/photos/fond.svg">

    <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
    <div class="w-full h-24"></div>

    <!-- SIDE MENU -->
    <div class="w-full text-center relative mb-10">
        <div class="absolute top-12 left-5 flex dark:text-white justify-center animate-pulse
            items-center p-3 text-2xl cursor-pointer z-10" @click="modal = true">
                <p class="mr-3">{{ $t('message.albums.title') }}</p>
                <i class="fa-solid fa-circle-arrow-right"></i>
        </div>

        <h1
            data-aos="zoom-in"
            class="dark:text-white font-bold text-4xl uppercase italic mb-20"
        >{{ $t('message.team.title') }} - {{ year || store.db.years[0]?.title }}</h1>

        <hr data-aos="zoom-in" class="border border-red-500 bg-red-500 m-5" />
    </div>

    <!-- ALBUMS -->
    <div class="flex flex-wrap h-full relative gap-10 justify-center">
        <!-- LOADER -->
        <i v-if="!loaded" class="mt-10 fa-solid fa-spinner text-red-500 text-7xl animate-spin"></i>

        <!-- CONTENT -->
        <template v-for="item of db" :key="item.name">

            <router-link :to="'/photos/' + item.id">
                <div class="dark:text-white
                calc-w rounded-md dark:bg-dark-mode bg-white border dark:border-gray-100 cursor-pointer mb-5"
                lazy-animation="zoomin" :key="item.thumbnail">
                    <div class="flex p-2 items-center relative w-full">
                        <i class="fas fa-image"></i>
                        <h2 class="absolute right-2">{{ item.name }}</h2>
                    </div>
                    <div class="bg-cover bg-center w-full h-52 lazy-skeleton"
                    :lazy-background="item.thumbnail">
                    </div>
                </div>
            </router-link>

        </template>
     </div>

  </div>

  <Aside :opened="modal" @close="modal = false" 
        :beforeItem="$t('message.albums.year') + ' - ' " 
        :itemsMenu="store.db.years" @clicked="changeDefault"
        :title="$t('message.albums.title')"></Aside>
</template>

<script>
import { useAlbumsStore } from "../../store/AlbumsStore";
import Aside from "../../components/Asidebar/Aside.vue";

export default {
    name: "Photos",
    props: ["year"],
    components: {Aside},

    data(){
        const store = useAlbumsStore();

        return {
            loaded: false,
            store: store,
            db: store.db,
            modal: false
        }
    },

    watch: {
        year(){
            this.changeAlbums();
        }
    },

    async mounted(){
        await this.store.getAlbum(this.store.drive);
        this.loaded = true;
        this.changeAlbums();
    },

    methods: {
        changeAlbums(){
            this.db = this.store.getByYear(this.year);
        },

        changeDefault(year){
            this.$router.push({
                name: "AlbumsYear",
                params: {
                    year: year
                }
            })
        }
    }
}
</script>

<style scoped>
.calc-w{
     width: 24rem;
}

@media only screen and (max-width: 500px) and (orientation: portrait){
  .calc-w{
    width: calc(100vw - 5rem);
  }
}
</style>