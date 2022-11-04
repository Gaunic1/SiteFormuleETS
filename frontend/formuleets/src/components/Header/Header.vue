<template>
  <header
    :class="headerClass"
    class="pointer-events-none nesthub:pointer-events-auto fixed top-0 left-0 transition-all w-full dark:text-dark-mode z-50"
  >
    <nav class="flex justify-center items-center w-full h-full">
      <!-- COMPUTER -->
      <ul class="pointer-events-auto hidden list-none p-3 nesthub:flex">
        <template v-for="item of menu" :key="item.name">
          <!-- DROPDOWN -->
          <li
            v-if="item.type == 'dropdown'"
            class="dropdown flex items-center justify-center group"
          >
            <a
              class="ml-2 mr-2 relative no-underline uppercase dark:text-white cursor-pointer"
              :id="item.name"
            >
              <i
                class="fa-solid fa-caret-right text-lg group-hover:opacity-0"
              ></i>
              <i
                class="fa-solid fa-caret-down absolute left-0 text-lg opacity-0 group-hover:opacity-100"
              ></i>
              {{ $t(item.name) }}
            </a>

            <div class="top-full -mt-5 menu absolute z-50 h-0 overflow-hidden">
              <ul
                class="h-auto flex flex-col justify-center items-center items bg-white dark:bg-dark-mode"
              >
                <li
                  v-for="menu of item.menus"
                  :key="menu.name"
                  class="py-2 px-8 flex justify-center items-center"
                >
                  <router-link
                    class="dark:text-white no-underline uppercase"
                    :to="menu.to"
                    >{{ $t(menu.name) }}</router-link
                  >
                </li>
              </ul>
            </div>
          </li>

          <!-- NOT DROPDOWN -->
          <li v-else class="flex items-center justify-center">
            <router-link
              class="ml-2 mr-2 no-underline uppercase dark:text-white"
              :to="item.to"
              >{{ $t(item.name) }}</router-link
            >
          </li>
        </template>
        <li class="ml-3">
          <!-- DARK MODE -->
          <i
            class="w-9 h-9 flex justify-center items-center cursor-pointer dark:text-white border border-black dark:border-white rounded-full"
            :class="darkMode ? 'fas fa-lightbulb' : 'far fa-lightbulb'"
            @click="changeDarkMode()"
          ></i>
        </li>
        <li>
          <!-- CHANGE LANGUAGE -->
          <div
            @click="changeLangue()"
            class="ml-3 w-9 h-9 uppercase flex justify-center items-center cursor-pointer dark:text-white border border-black dark:border-white rounded-full bg-center bg-cover"
            :style="
              $root.$i18n.getLocale() == 'en'
                ? background('english')
                : background('french')
            "
          ></div>
        </li>
      </ul>

      <!-- PHONE -->
      <ul
        class="pointer-events-auto flex list-none p-3 nesthub:hidden absolute right-0"
      >
        <i
          @click="displayMenuPhone()"
          class="dark:bg-dark-mode bg-white pr-1 pl-1 rounded-lg fas fa-bars cursor-pointer text-3xl dark:text-white"
        ></i>

        <div
          data-aos="fade-right"
          v-if="showMenu"
          class="overflow-y-auto p-5 fixed flex justify-center items-center w-full h-full bg-white dark:bg-dark-mode top-0 left-0 z-50"
        >
          <!-- close -->
          <i
            class="fas fa-times dark:text-white text-3xl absolute right-5 top-3 cursor-pointer"
            @click="displayMenuPhone(false)"
          ></i>

          <ul class="list-none dark:text-white text-center p-5 absolute top-10">
            <template v-for="item of menu" :key="item.name">
              <!-- DROPDOWN -->
              <li
                v-if="item.type == 'dropdown'"
                class="dropdown h-10 m-4 flex justify-center"
              >
                <template v-for="(menu, index) of item.menus" :key="menu.name">
                  <router-link
                    @click="displayMenuPhone(false)"
                    :to="menu.to"
                    class="m-2 no-underline uppercase"
                    >{{ $t(menu.name) }}</router-link
                  >
                  <span
                    class="text-dark-mode dark:text-white m-2"
                    v-if="index < item.menus.length - 1"
                    >|</span
                  >
                </template>
              </li>

              <!-- NOT DROPDOWN -->
              <li v-else class="m-4 h-10">
                <router-link
                  class="m-2 no-underline uppercase"
                  :to="item.to"
                  @click="displayMenuPhone(false)"
                >
                  <span>{{ $t(item.name) }}</span>
                </router-link>
              </li>
            </template>

            <li class="m-4 flex justify-center items-center pb-5">
              <!-- DARK MODE -->
              <i
                class="w-12 h-12 flex justify-center items-center cursor-pointer dark:text-white border border-black dark:border-white rounded-full"
                :class="darkMode ? 'fas fa-lightbulb' : 'far fa-lightbulb'"
                @click="changeDarkMode()"
              ></i>

              <!-- CHANGE LANGUAGE -->
              <div
                @click="changeLangue()"
                class="ml-7 w-12 h-12 uppercase flex justify-center items-center cursor-pointer dark:text-white border border-black dark:border-white rounded-full bg-center bg-cover"
                :style="
                  $root.$i18n.getLocale() == 'en'
                    ? background('english')
                    : background('french')
                "
              ></div>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import HeaderMenus from "./HeaderMenus";

export default {
  name: "Header",
  created() {
    this.setDarkMode();
    document.addEventListener("scroll", this.scroll, { passive: true });
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.scroll, { passive: true });
  },
  data() {
    return {
      menu: HeaderMenus,
      headerClass: ["h-12"],
      showMenu: false,
      darkMode: false,
    };
  },
  methods: {
    displayMenuPhone(val = true) {
      this.showMenu = val;

      if (val) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    },
    background(name = "") {
      return "background-image: url('/static/flags/" + name + ".png')";
    },
    changeLangue() {
      const lg = this.$root.$i18n.getLocale();
      const newLg = lg == "fr" ? "en" : "fr";
      this.$root.$i18n.setLocale(newLg);

      localStorage.langage = newLg;
    },
    scroll() {
      if (window.scrollY > 0)
        this.headerClass = [
          "nesthub:shadow-md",
          "nesthub:bg-white",
          "h-16",
          "nesthub:tracking-widest",
          "nesthub:dark:bg-dark-mode",
        ];
      else this.headerClass = ["h-12"];
    },
    setDarkMode() {
      // const modeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (!localStorage.theme) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;
        return;
      }

      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        this.darkMode = false;
      }
    },
    changeDarkMode() {
      if (this.darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        this.darkMode = false;
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        this.darkMode = true;
      }
    },
  },
};
</script>

<style scoped>
a::after {
  content: "";
  width: 0%;
  height: 0.25rem;
  background-color: rgba(220, 38, 38);
  display: block;
  transition: 0.25s ease;
}

.router-link-exact-active::after {
  width: 100%;
}

.menu::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1rem;
  height: 1rem;
  background: rgba(0, 0, 0, 0.5);

  clip-path: polygon(0 0, 100% 0, 0 100%);

  transform-origin: 0;
  transform: translateX(-25%) rotate(45deg);
}

.dark .menu::before {
  background: rgba(255, 255, 255, 0.5) !important;
}

.dropdown:hover .menu,
.menu:hover {
  height: auto;
}

.menu .items {
  margin-top: 0.85rem;
  border: thin solid rgba(0, 0, 0, 0.3);
}

.dark .menu .items {
  border: thin solid rgba(255, 255, 255, 0.3) !important;
}
</style>
