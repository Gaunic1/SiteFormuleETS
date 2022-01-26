<template>
  <div class="w-full min-h-screen bg-fixed bg-cover bg-center dark:bg-dark-mode bg-white"
  lazy-background="/static/photos/fond.svg">
      <!-- USELESS. JUST HERE TO DONT GO ON THE HEADER -->
     <div class="w-full h-12"></div>

     <div class="p-5 flex flex-wrap justify-center h-full relative">
        <template v-for="(item,index) of folders.sort((a,b) => a.name - b.name)" :key="item.name">

            <div class="m-5 zoom transition-all border dark:border-white border-black p-2 w-56 h-11
             dark:bg-dark-mode bg-white overflow-hidden">

                <div>
                    <div class="inline-block">
                        <div class="flex dark:text-white items-center cursor-pointer w-56" @click="zoomFolder(index)">
                            <i class="fas fa-image ml-5"></i>
                            <span class="ml-5">{{ item.name }}</span>
                        </div>
                    </div>

                    <div class="inline-block cw">
                        <div class="flex justify-end items-center p-5">
                            <i class="fas fa-times dark:text-white cursor-pointer" @click="closeZoom(index)"></i>
                        </div>
                    </div>
                </div>

            </div>

        </template>
     </div>

  </div>
</template>

<script>
export default {
    name: "Photos",
    data(){
        return {
            folders: [
                {
                    name: "2020"
                },
                {
                    name: "2021"
                }
            ]
        }
    },

    mounted(){
        for(let i=0; i<20; ++i){
            this.folders.push({
                name: "20" + i.toString().padStart(2, "0")
            })
        }
    },

    methods: {
        zoomFolder(index){
            const el = document.querySelectorAll('.zoom')[index];
            el.style = "position: fixed; width: calc(100% - 2 * 1.25rem); height: calc(100vh - 2 * 1.25rem - 3rem); left: 0; top: 3rem; z-index: 45";
        },
        closeZoom(index){
            const el = document.querySelectorAll('.zoom')[index];
            el.style = "";
        }
    }
}
</script>

<style scoped>
.cw{
    width: calc(100% - 14rem);
}
</style>