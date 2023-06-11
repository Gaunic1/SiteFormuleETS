<template>
  <div
    class="w-full min-h-screen text-center mb-0 overflow-hidden bg-cover bg-center bg-fixed bg-no-repeat dark:bg-dark-mode bg-white"
    lazy-background="/static/team/contour2.svg"
  >
    <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
    <div class="h-24"></div>

    <!-- TEAM DISPLAY -->
    <section class="flex-1 relative">
      <div
        class="absolute top-12 left-5 flex dark:text-white justify-center animate-pulse items-center p-3 text-2xl z-10"
        @click="modal = true"
      >
        <p class="mr-3">{{ $t("message.team.teams") }}</p>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>

      <h1
        data-aos="zoom-in"
        class="dark:text-white font-bold text-4xl uppercase italic mb-20"
      >
        {{ $t("message.team.title") }} - {{ team.title }}
      </h1>

      <template v-for="categorie of team.members" :key="categorie.name">
        <hr data-aos="zoom-in" class="border border-red-500 bg-red-500 m-5" />

        <div class="mt-5 text-left m-3">
          <h2 data-aos="fade-left" class="dark:text-white text-3xl ml-5">
            {{ $t(categorie.name) }}
          </h2>

          <article data-aos="fade-up" class="flex flex-wrap">
            <div
              class="m-5 rounded overflow-hidden calc-w-h sm:w-20rem shadow bg-white dark:bg-dark-mode group"
              v-for="member of categorie.members"
              :key="member.fullName"
            >
              <!-- IMAGE -->
              <div
                class="bg-cover bg-center h-2/3 w-full lazy-skeleton card"
                :lazy-background="
                  member.img != '' && member.img
                    ? member.img
                    : '/static/team/members/default.png'
                "
              >
                <!-- OVERLAY -->
                <a
                  v-if="member.linkedin && member.linkedin != ''"
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center text-white h-full w-full bg-overlay cursor-pointer"
                  >
                    <i class="fa-brands fa-linkedin text-5xl"></i>
                  </div>
                </a>
              </div>

              <!-- TEXT -->
              <div
                class="h-1/3 w-full text-center dark:text-white flex flex-col justify-around p-3"
              >
                <h3 class="text-yellow-500 text-xl uppercase font-bold">
                  {{ member.fullName }}
                </h3>
                <p
                  class="text-lg"
                  v-if="member.role && member.role.trim() != ''"
                >
                  {{ $t(member.role) }}
                </p>
                <a
                  :href="'mailto:' + member.mail"
                  class="underline break-words translate-z-25"
                  >{{ member.mail }}</a
                >
              </div>
            </div>
          </article>
        </div>
      </template>
    </section>

    <AsideBar
      :opened="modal"
      @close="modal = false"
      :beforeItem="$t('message.team.year') + ' - '"
      :itemsMenu="teams"
      @clicked="changeDefault"
      :title="$t('message.team.teams')"
    ></AsideBar>
  </div>
</template>
<script lang="ts">
import teams from "./teams";
import AsideBar from "../../components/Asidebar/AsideBar.vue";

export default {
  name: "TeamPage",
  props: ["year"],
  components: { AsideBar },
  data() {
    return {
      teams: teams,
      team: {},
      modal: false,
    };
  },
  watch: {
    year() {
      this.changeYear();
    },
  },
  mounted() {
    if (this.teams.length > 1)
      this.teams = this.teams.sort((a, b) => b.title.localeCompare(a.title));
    this.team = this.teams[0];
  },
  methods: {
    changeYear() {
      const year = this.year.toString();
      this.team = this.teams.find((e) => e.title == year);
    },
    changeDefault(title: string) {
      this.$router.push({
        name: "TeamYear",
        params: {
          year: title,
        },
      });
    },
  },
};
</script>

<style scoped>
.calc-w-h {
  width: calc(100% - (2 * 1.225rem));
  height: 30rem;
}
</style>
