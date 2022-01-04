<template>
    <!-- USELESS (TO DONT GO ON HEADER) -->
    <div class="h-14 w-full"></div>

    <!-- BACKGROUND IMAGE -->
    <div class="h-screen w-full bg-center bg-cover flex justify-center items-center relative" 
    lazy-background="/static/contact/fond.jpg" lazy-animation="opacity">
        <!-- OVERLAY -->
        <div class="absolute top-0 left-0 h-full w-full bg-overlay"></div>

        <!-- CONTENT -->
        <div class="z-10 m-5 w-full md:w-2/3 flex flex-col justify-center items-center dark:bg-dark-mode 
        bg-white dark:text-white p-5 overflow-x-hidden">
            <h2 data-aos="fade-right" class="text-4xl font-thin">{{ $t('message.contact.contact') }}</h2>
            
            <hr class="dark:bg-white bg-black border dark:border-white boder-black w-full m-5" data-aos="zoom-in">

            <div data-aos="fade-left" class="w-full mb-5 flex flex-col font-serif float-left text-center">
                <span>École de Technologie Supérieure</span>
                <span>1219, rue William</span>
                <span>Montréal, (QC), Canada, H3C 1R1</span>

                <!-- SEPARATOR -->
                <span class="mb-5"></span>

                <span>(1) 514-396-8800 Poste: 7741</span>
                <span>Bureau: D-2016</span>
                <span>formule@ens.etsmtl.ca</span>
            </div>

            <iframe lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.807019822777!2d-73.56523783447855!3d45.4938307291013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b0324b5d48d%3A0x4e9357b01ffef3ef!2s%C3%89cole%20de%20Technologie%20Sup%C3%A9rieure!5e0!3m2!1sfr!2sca!4v1641324495378!5m2!1sfr!2sca" 
            lazy-animation="opacity"
            class="w-full h-72" style="border:0;" allowfullscreen=""></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style>

</style>