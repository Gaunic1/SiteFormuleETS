<template>
  <section
    class="flex justify-center flex-col flex-wrap w-full min-h-screen relative overflow-hidden"
    :class="position == 'right' ? 'items-end' : ''"
  >
    <!-- IMAGE PARALLAX -->
    <div
      class="flex justify-center items-center overflow-hidden h-full nesthub:absolute nesthub:h-full"
    >
      <img
        v-if="!isMobile"
        :src="item.image"
        class="w-full"
        alt="Image"
        data-prl-y
        data-prl-scale="1.2"
        data-prl-speed-y="0.65"
        data-prl-overflow-y
      />
      <img
        v-if="isMobile"
        :src="item.mobileImage ? item.mobileImage : item.image"
        class="w-full"
        alt="Image"
        data-prl-y
        data-prl-scale="1.4"
        data-prl-speed-y="0.3"
        data-prl-axes="80"
      />
    </div>

    <!-- TEXT CONTENT -->
    <article
      class="h-full nesthub:min-h-screen nesthub:w-2/5 text-justify p-10 dark:bg-dark-mode bg-white border-black dark:border-white flex justify-center flex-col top-0 z-10"
      :class="
        (position == 'right') != 0 ? 'nesthub:border-l' : 'nesthub:border-r'
      "
    >
      <h1
        class="text-red-600 text-4xl my-3 font-bold italic tracking-wider text-shadow z-10 uppercase text-center"
        data-aos="zoom-in"
        :class="
          (position == 'right') != 0
            ? 'nesthub:text-right'
            : 'nesthub:text-left'
        "
      >
        {{ $t(item.text + ".title") }}
      </h1>

      <p
        class="mt-10 mb-10 text-justify text-black dark:text-white text-lg"
        v-html="$t(item.text + '.text')"
        :data-aos="position == 'right' ? 'fade-right' : 'fade-left'"
      ></p>
    </article>
  </section>
</template>
<script lang="ts">
export default {
  name: "ParallaxHome",
  props: {
    isMobile: {
      type: Boolean,
    },
    item: {
      required: true,
    },
    position: {
      required: true,
      type: String,
    },
  },
};
</script>
