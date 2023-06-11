<template>
  <section lazy-animation="slide-left" class="fixed left-5 bottom-5 w-60 z-50">
    <div
      v-if="show"
      class="rounded-full w-full h-11 flex border border-black dark:border-white dark:bg-dark-mode bg-white dark:text-white text-black"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center px-5 gap-2"
        href="https://app.smartsheet.com/b/form/2f945b0d0f024d43a660cc10aec1317a"
      >
        <i class="fa-solid fa-link text-xs"></i>
        <p>{{ $t("message.notifications.join") }}</p>
      </a>
      <div class="flex items-center justify-center px-4">
        <i class="fa-solid fa-xmark cursor-pointer" @click="show = false"></i>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "NotificationsComponent",
  data() {
    return {
      show: true,
    };
  },
};
</script>
