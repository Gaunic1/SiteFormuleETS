<template>
    <div
        class="w-full h-auto text-center mb-0 overflow-hidden bg-cover bg-center bg-fixed dark:bg-dark-mode bg-white"
        lazy-background="/static/team/contour2.svg"
    >
        <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
        <div class="h-24"></div>

        <!-- TEAM DISPLAY -->
        <section class="flex-1 relative">
            <div class="absolute top-12 left-5 flex dark:text-white justify-center 
            items-center p-3 text-2xl cursor-pointer z-10" @click="modal = true">
                <p class="mr-3">{{ $t('message.team.teams') }}</p>
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>

            <h1
                data-aos="zoom-in"
                class="dark:text-white font-bold text-4xl uppercase italic mb-20"
            >{{ $t('message.team.title') }} - {{ team.title }}</h1>

            <template v-for="categorie of team.members" :key="categorie.name">
                <hr data-aos="zoom-in" class="border border-red-500 bg-red-500 m-5" />

                <div class="mt-5 text-left m-3">
                    <h2
                        data-aos="fade-left"
                        class="dark:text-white text-3xl ml-5"
                    >{{ $t(categorie.name) }}</h2>

                    <article data-aos="fade-up" class="flex flex-wrap">
                        <div
                            class="m-5 rounded overflow-hidden calc-size shadow bg-white dark:bg-dark-mode"
                            v-for="member of categorie.members"
                            :key="member.fullName"
                        >
                            <!-- IMAGE -->
                            <div
                                class="bg-cover h-2/3 w-full lazy-skeleton card cursor-pointer"
                                :lazy-background="member.img"
                            >
                                <!-- OVERLAY -->
                                <a v-if="member.linkedin" :href="member.linkedin">
                                    <div
                                        class="flex justify-center items-center text-white h-full w-full bg-overlay cursor-pointer"
                                    >
                                        <i class="fa-brands fa-linkedin text-5xl"></i>
                                    </div>
                                </a>
                            </div>

                            <!-- TEXT -->
                            <div
                                class="h-1/3 w-full text-center dark:text-white flex flex-col justify-around p-3"
                            >
                                <h3
                                    class="text-yellow-500 text-xl uppercase font-bold"
                                >{{ member.fullName }}</h3>
                                <p
                                    class="text-lg"
                                    v-if="member.role && member.role.trim() != ''"
                                >{{ $t(member.role) }}</p>
                                <p class="text-lg break-words translate-z-25">{{ member.mail }}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </template>
        </section>

        <Aside :opened="modal" @close="modal = false" 
        :beforeItem="$t('message.team.year') + ' - ' " :itemsMenu="teams" @clicked="changeDefault"
        :title="$t('message.team.teams')"></Aside>
    </div>
</template>
<script>
import team2022 from "./teams/team-2022"
import team2021 from "./teams/team-2021";
import Aside from "../../components/Asidebar/Aside.vue";

export default {
    name: "Team",
    data() {
        return {
            teams: [team2022, team2021],
            default: 0,

            modal: false
        };
    },
    computed: {
        team() {
            return this.teams[this.default];
        }
    },
    mounted() {
        this.teams = this.teams.sort((a, b) => b.title - a.title);
    },
    methods: {
        changeDefault(index = 0) {
            this.default = index;
        }
    },
    components: { Aside }
}
</script>
<style scoped>
.calc-size {
    width: calc(100% - (2 * 1.225rem));
    height: calc(100vh - 10rem);
}

.calc-size > div{
    background-position: center;
}

.card > a > div {
    transition: 0.3s ease;
    opacity: 0;
}

.card:hover > a > div {
    opacity: 1;
}

@media (min-width: 640px) {
    .calc-size {
        width: 20rem;
        height: 30rem;
    }

    .calc-size > div{
        background-position: top;
    }
}
</style>