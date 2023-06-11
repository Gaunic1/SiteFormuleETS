<template>
  <div
    class="w-full min-h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white"
    lazy-background="/static/photos/fond.svg"
  >
    <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
    <div class="w-full h-24"></div>

    <!-- SIDE MENU -->
    <div class="w-full text-center relative mb-10">
      <h1
        data-aos="zoom-in"
        class="dark:text-white font-bold text-4xl uppercase italic mb-20"
      >
        {{ $t("message.albums.title") }}
      </h1>
    </div>

    <!-- LOADER -->
    <div v-if="!loaded" class="w-full flex justify-center">
      <i
        class="mt-10 fa-solid fa-spinner text-red-500 text-7xl animate-spin"
      ></i>
    </div>

    <!-- YEARS -->
    <div
      class="w-full overflow-hidden"
      v-else
      v-for="year of years"
      :key="year"
    >
      <h2
        lazy-animation="zoomin"
        class="dark:text-white m-5 text-3xl font-bold"
      >
        {{ $t("message.albums.year") + " " + year }}
      </h2>

      <hr
        lazy-animation="zoomin"
        class="border border-red-500 bg-red-500 m-5"
      />

      <!-- ALBUMS -->
      <div class="flex flex-wrap h-full relative gap-10 justify-center p-5">
        <!-- CONTENT -->
        <template v-for="item of store.getByYear(year)" :key="item.name">
          <router-link :to="'/photos/' + item.id">
            <div
              class="calc-w rounded-md dark:bg-dark-mode bg-white border dark:border-gray-100 cursor-pointer mb-5 h-60 overflow-hidden relative"
              lazy-animation="zoomin"
              :key="item.thumbnail"
            >
              <!-- TEXT -->
              <div
                class="flex p-5 justify-center items-center absolute top-0 left-0 w-full h-full bg-overlay z-10 text-center group"
              >
                <h2
                  class="text-2xl text-white uppercase font-bold transition-all group-hover:tracking-wider"
                >
                  {{ item.name }}
                </h2>
              </div>

              <!-- IMAGE -->
              <div
                class="bg-cover bg-center w-full h-full lazy-skeleton"
                :lazy-background="item.thumbnail"
              ></div>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useAlbumsStore } from "../../store/AlbumsStore";

export default {
  name: "PhotosPage",

  data() {
    const store = useAlbumsStore();

    return {
      loaded: false,
      store: store,
      years: [],
    };
  },

  async mounted() {
    await this.store.getAlbum(this.store.drive);
    this.loaded = true;
    this.years = this.store.db?.years?.map((e) => e.title);
  },
};
</script>

<style scoped>
.calc-w {
  width: 24rem;
}

@media only screen and (max-width: 500px) and (orientation: portrait) {
  .calc-w {
    width: calc(100vw - 5rem);
  }
}
</style>
