<template>
  <section lazy-animation="slide-left" class="fixed left-5 bottom-5 w-60 z-50">
    <div
      v-if="show"
      class="w-full h-14 flex border border-black dark:border-white dark:bg-dark-mode bg-white dark:text-white text-black"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-1 items-center p-3 underline"
        href="https://app.smartsheet.com/b/form/2f945b0d0f024d43a660cc10aec1317a"
      >
        {{ $t("message.notifications.join") }}
      </a>
      <div class="flex items-center justify-center p-3">
        <i class="fa-solid fa-xmark cursor-pointer" @click="show = false"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      show: true,
    };
  },
};
</script>
