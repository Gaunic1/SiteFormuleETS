<template>
    <div class="dark:bg-dark-mode w-full h-auto text-center mb-0 overflow-hidden">
        <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
        <div class="h-24"></div>

        <h1 data-aos="zoom-in" class="dark:text-white font-bold text-4xl uppercase italic mb-20">L'équipe</h1>

        <template v-for="categorie of team" :key="categorie.name">
            <hr data-aos="zoom-in" class="border border-red-500 bg-red-500 m-5">

            <div class="mt-5 text-left">
                <h2 data-aos="fade-right" class="dark:text-white text-3xl ml-5">{{ categorie.name }}</h2>

                <div data-aos="fade-up">
                    <div class="inline-block m-5 rounded overflow-hidden calc-size shadow" v-for="member of categorie.members" :key="member.fullName" 
                    v-tilt="{glare: true, 'max-glare': 0.4}">

                        <div class="bg-cover bg-center h-2/3 w-full lazy-skeleton" :lazy-background="member.img"></div>
                        <div class="h-1/3 w-full text-center dark:text-white flex flex-col justify-around p-3">
                            <h3 class="text-yellow-500 text-xl uppercase font-bold">{{ member.fullName }}</h3>
                            <p class="text-lg" v-if="member.role && member.role.trim() != ''">{{ member.role }}</p>
                            <p class="text-lg break-words">{{ member.mail }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
import team from "./team"

export default {
    name: "Team",
    data(){
        return {
            team: team
        }
    }
}
</script>
<style scoped>
.calc-size{
    width: calc(100% - (2 * 1.225rem));
    height: calc(100vh - 10rem);
}

@media (min-width: 768px){
    .calc-size{ 
        width: 20rem; 
        height: 30rem;
    }
}
</style>