<template>
  <div
    class="fixed bottom-5 right-5 cursor-pointer w-12 h-12 border z-40 rounded-full flex justify-center items-center bg-white border-dark-mode dark:text-white dark:bg-dark-mode dark:border-white"
    data-aos="fade-up"
    @click="goToTop"
  >
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script lang="ts">
export default {
  name: "GoToTop",
  methods: {
    goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
