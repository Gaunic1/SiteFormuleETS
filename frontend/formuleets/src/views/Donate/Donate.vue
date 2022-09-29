<template>
  <!-- USELESS (TO DONT GO ON HEADER) -->
  <div class="h-14 w-full"></div>

  <!-- CONTAINER -->
  <div
    class="lg:h-screen h-auto w-full flex justify-center items-center relative overflow-hidden"
  >
    <!-- BACKGROUND IMAGE -->
    <img
      src="/static/donate/fond.png"
      alt="Fond"
      class="absolute h-full lg:w-full left-0 top-0"
      data-prl-x
      data-prl-speed-x="0.15"
    />

    <!-- OVERLAY -->
    <div class="absolute top-0 left-0 h-full w-full bg-overlay"></div>

    <!-- CONTENT -->
    <section
      class="p-5 dark:bg-dark-mode dark:text-white bg-white m-5 flex flex-col z-10 w-full lg:flex-row lg:w-2/3 overflow-x-hidden"
      data-aos="zoom-in"
    >
      <!-- LEFT -->
      <article class="lg:w-1/2 w-full p-5" data-aos="zoom-in">
        <a :href="links.link1" target="_blank" rel="noopener noreferrer">
          <button
            class="w-full h-16 dark:bg-white bg-dark-mode text-white dark:text-black uppercase font-bold"
          >
            {{ $t("message.donate.particular.button") }}
          </button>
        </a>
        <h3 class="uppercase mb-5 mt-5 font-bold text-lg">
          {{ $t("message.donate.particular.title") }}
        </h3>
        <p>{{ $t("message.donate.particular.text") }}</p>
        <p class="mt-5 italic">{{ $t("message.donate.particular.italic") }}</p>
      </article>

      <!-- RIGHT -->
      <article class="lg:w-1/2 w-full p-5" data-aos="zoom-in">
        <a :href="links.link2" target="_blank" rel="noopener noreferrer">
          <button
            class="w-full h-16 dark:bg-white bg-dark-mode text-white dark:text-black uppercase font-bold"
          >
            {{ $t("message.donate.sponsorship.button") }}
          </button>
        </a>
        <h3 class="uppercase mb-5 mt-5 font-bold text-lg">
          {{ $t("message.donate.sponsorship.title") }}
        </h3>
        <p>{{ $t("message.donate.sponsorship.text") }}</p>
        <p class="italic mt-5 mb-5">
          {{ $t("message.donate.sponsorship.italic") }}
        </p>
        <a
          :href="links.link3"
          class="uppercase font-bold underline"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t("message.donate.sponsorship.link") }}</a
        >
      </article>
    </section>
  </div>
</template>

<script>
import link from "./link";
import "parallaxy-img/dist/parallaxy";

export default {
  name: "Donate",
  data() {
    return {
      links: link,
    };
  },
};
</script>
