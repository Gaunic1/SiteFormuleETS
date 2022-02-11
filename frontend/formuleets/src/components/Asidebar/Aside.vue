<template>
    <div v-if="opened">
        <!-- OVERLAY -->
        <div class="fixed top-0 left-0 w-full h-screen bg-overlay z-50" 
        style="backdrop-filter: blur(7px)" 
        @click="close"></div>

        <!-- MENU -->
        <aside class="fixed left-0 top-0 w-full h-screen bg-white dark:bg-dark-mode sm:w-72 z-50
        flex flex-col items-center" data-aos="fade-right">
            <div>
                <i class="fa-solid fa-xmark text-red-500 absolute top-5 right-5 cursor-pointer text-lg" 
                @click="close"></i>

                <h2 class="text-3xl text-red-500 m-10 font-bold" data-aos="zoom-in">{{ title }}</h2>
                <hr class="border border-red-500 bg-red-500 mb-5">
            </div>
            <nav>
                <ul>
                    <template v-for="(item, index) of itemsMenu" :key="item.title">
                        <li class="cursor-pointer text-xl uppercase text-red-500 m-3" @click="clicked(index)">
                            {{ beforeItem }} {{ item.title }}
                        </li>
                    </template>
                </ul>
            </nav>
        </aside>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        opened: {
            required: true,
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: () => "Navbar"
        },
        itemsMenu: {
            type: Array,
            required: true
        },
        beforeItem: {
            type: String,
            required: false,
            default: () => ""
        }
    },
    methods: {
        clicked(index = 0){
            this.$emit("clicked", index);
            this.close();
        },
        close(){
            this.$emit("close");
        }
    }
}
</script>

<style>

</style>