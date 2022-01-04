<template>
    <!-- USELESS (TO DONT GO ON HEADER) -->
    <div class="h-14 w-full"></div>

    <!-- BACKGROUND IMAGE -->
    <div class="lg:h-screen h-auto w-full bg-center bg-cover flex justify-center items-center relative" 
    lazy-background="/static/donate/fond.jpg" lazy-animation="opacity">

    <!-- OVERLAY -->
    <div class="absolute top-0 left-0 h-full w-full bg-overlay"></div>

    <!-- CONTENT -->
    <div class="p-5 dark:bg-dark-mode dark:text-white bg-white m-5 flex 
    flex-col z-10 w-full lg:flex-row lg:w-2/3 overflow-x-hidden" data-aos="zoom-in">

        <!-- LEFT -->
        <div class="lg:w-1/2 w-full p-5" data-aos="zoom-in">
            <a :href="links.link1">
                <button class="w-full h-16 dark:bg-white bg-dark-mode text-white dark:text-black uppercase font-bold">
                    {{ $t("message.donate.particular.button") }}
                </button>
            </a>
            <h3 class="uppercase mb-5 mt-5 font-bold text-lg">{{ $t("message.donate.particular.title") }}</h3>
            <p>{{ $t("message.donate.particular.text") }}</p>
            <p class="mt-5 italic">{{ $t("message.donate.particular.italic") }}</p>
        </div>

        <!-- RIGHT -->
        <div class="lg:w-1/2 w-full p-5" data-aos="zoom-in">
            <a :href="links.link2">
                <button class="w-full h-16 dark:bg-white bg-dark-mode text-white dark:text-black uppercase font-bold">
                    {{ $t("message.donate.sponsorship.button") }}
                </button>
            </a>
            <h3 class="uppercase mb-5 mt-5 font-bold text-lg">{{ $t("message.donate.sponsorship.title") }}</h3>
            <p>{{ $t("message.donate.sponsorship.text") }}</p>
            <p class="italic mt-5 mb-5">{{ $t("message.donate.sponsorship.italic") }}</p>
            <a :href="links.link3" class="uppercase font-bold underline">{{ $t("message.donate.sponsorship.link") }}</a>
        </div>
    </div>

  </div>
</template>

<script>
import link from "./link"

export default {
    name: "Donate",
    data(){
        return {
            links: link
        }
    }
}
</script>

<style>

</style>