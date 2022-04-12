<template>
  <div class="rounded-md border dark:border-[#ffffff41] dark:bg-dark-mode
   bg-white p-2 dark:text-white z-40 text-center">
      <h3 class="text-sm font-bold mb-3">{{ $t(title) }}</h3>
      <p class="text-xs">{{ $t('message.date.time', time) }}</p>
  </div>
</template>

<script>
export default {
    name: "Countdown",
    props: {
        title: {
            required: true,
            type: String
        },
        date: {
            required: true,
            type: String
        },
        hour: {
            required: true,
            type: String
        },
    },
    data(){
        return {
            time: [],
            stopDate: null,
            stop: true
        }
    },
    mounted(){
        this.stopDate = new Date(this.date + " " + this.hour);
        this.changeHour();

        this.interval = setInterval(this.changeHour.bind(this), 1000);
    },
    beforeUnmount(){
        clearInterval(this.interval);
    },
    methods: {
        calcDate(){
            var dateEntered = this.stopDate;
            var now = new Date();
            var difference = dateEntered.getTime() - now.getTime();

            if (difference <= 0) {
                // Timer done
                clearInterval(this.time);
                this.stop = true;
                return [0,0,0,0];
            } else {
                this.stop = false;
                let seconds = Math.floor(difference / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                hours %= 24;
                minutes %= 60;
                seconds %= 60;

                return [days, hours, minutes, seconds];
            }
        },
        changeHour(){
            const time = this.calcDate();
            this.time = time;
        }
    }
}
</script>