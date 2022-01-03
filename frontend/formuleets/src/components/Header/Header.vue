<template>
  <header :class="headerClass" class="fixed top-0 left-0 h-12 transition-all w-full dark:text-dark-mode z-50">
      <nav class="flex justify-center items-center w-full h-full">
          <!-- LOGO -->
          <div id="logo" class="flex-auto h-full p-3">
              <img :src="logo" alt="Logo" class="h-full"/>
          </div>

          <!-- COMPUTER -->
          <ul class="hidden list-none p-3 lg:flex">
              <template v-for="item of menu" :key="item.name">
                    <!-- DROPDOWN -->
                    <li v-if="item.type == 'dropdown'" class="dropdown flex items-center justify-center">
                        <a class="ml-2 mr-2 no-underline uppercase dark:text-white cursor-pointer" :id="item.name">{{ item.name }}</a>

                        <div class="top-full -mt-3 menu absolute z-50 bg-white dark:bg-dark-mode h-0 overflow-hidden">
                            <ul class="h-auto flex flex-col justify-center items-center">
                                <li v-for="menu of item.menus" :key="menu.name" class="h-10">
                                    <router-link class="dark:text-white no-underline uppercase" :to="menu.to">{{ menu.name }}</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <!-- NOT DROPDOWN -->
                    <li v-else class="flex items-center justify-center">
                        <router-link class="ml-2 mr-2 no-underline uppercase dark:text-white" :to="item.to">{{ item.name }}</router-link>
                    </li>
              </template>
              <li>
                <!-- DARK MODE -->
                <div class="relative inline-block w-10 mr-2 ml-2 align-middle select-none transition duration-200 ease-in">
                    <input :checked="darkMode" @change="changeDarkMode" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "/>
                    <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </li>
          </ul>

          <!-- PHONE -->
            <ul class="flex list-none p-3 lg:hidden">
              <i @click="showMenu = true" class="fas fa-bars cursor-pointer text-3xl dark:text-white"></i>

              <div data-aos="fade-right" v-if="showMenu" class="fixed flex justify-center items-center w-full h-screen bg-white dark:bg-dark-mode top-0 left-0 z-50">
                <!-- close -->
                <i class="fas fa-times dark:text-white text-3xl absolute right-3 top-3 cursor-pointer" @click="showMenu = false"></i>
            
                <ul class="list-none dark:text-white text-center">
                    <template v-for="item of menu" :key="item.name">
                        <!-- DROPDOWN -->
                        <li v-if="item.type == 'dropdown'" class="dropdown m-4 flex">
                            <template v-for="(menu, index) of item.menus" :key="menu.name">
                                <router-link @click="showMenu = false" :to="menu.to" class="ml-2 mr-2 no-underline uppercase">{{ menu.name }}</router-link>
                                <span class="text-dark-mode dark:text-white" v-if="index < item.menus.length-1">|</span>
                            </template>
                        </li>

                        <!-- NOT DROPDOWN -->
                        <li v-else class="m-4">
                            <router-link class="ml-2 mr-2 no-underline uppercase" :to="item.to" @click="showMenu = false">{{ item.name }}</router-link>
                        </li>
                    </template>

                    <li>
                        <!-- DARK MODE -->
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input :checked="darkMode" @change="changeDarkMode" type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer "/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </li>
                </ul>
              </div>
          </ul>
      </nav>
  </header>
</template>

<script>
import HeaderMenus from "./HeaderMenus"

export default {
    name: "Header",
    created(){
        this.setDarkMode();
        window.addEventListener('scroll',this.scroll);
    },
    unmounted(){
        window.removeEventListener('scroll', this.scroll);
    },
    data(){
        return {
            menu: HeaderMenus,
            logo: require('../../assets/logo-f1.png'),
            headerClass: [],
            showMenu: false,
            darkMode: false,
            value: false
        }
    },
    methods: {
        scroll(){
            if(window.scrollY > 0) 
                this.headerClass = ["shadow-md", "bg-white", "h-16", "dark:text-dark-mode", "tracking-wider", "dark:bg-dark-mode", "dark:text-white"];
            else 
                this.headerClass = [];
        },
        setDarkMode(){
            // const modeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if(!localStorage.theme){
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                this.darkMode = true;
                return;
            }

            if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                this.darkMode = true;
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
                this.darkMode = false;
            }
        },
        changeDarkMode(){
            if(this.darkMode){
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
                this.darkMode = false;
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                this.darkMode = true;
            }

        },
    }
}
</script>

<style scoped>
a::after{
    content: "";
    width: 0%;
    height: 0.25rem;
    background-color: rgba(220, 38, 38);
    display: block;
    transition: 0.25s ease;
}

.router-link-exact-active::after{
    width: 100%;
}

.dropdown:hover .menu, .menu:hover{
    height: auto;
}

.toggle-checkbox:checked {
    right: 0;
    border-color: red;
}
.toggle-checkbox:checked + .toggle-label {
    background-color: red;
}
</style>