<template>
  <div
    class="rounded-md border dark:border-white-opacity dark:bg-dark-mode bg-white p-2 dark:text-white z-40 text-center"
  >
    <h3 class="text-xl font-bold mb-3">{{ $t(title) }}</h3>
    <div class="flex flex-col text-lg">
      <div class="flex">
        <p>{{ $t("message.date.days") }}</p>
        <div class="flex-1 flex justify-end ml-3">
          <NumberDisplay :time="time[0]"></NumberDisplay>
        </div>
      </div>
      <div class="flex">
        <p>{{ $t("message.date.hours") }}</p>
        <div class="flex-1 flex justify-end ml-3">
          <NumberDisplay :time="time[1]"></NumberDisplay>
        </div>
      </div>
      <div class="flex">
        <p>{{ $t("message.date.minutes") }}</p>
        <div class="flex-1 flex justify-end ml-3">
          <NumberDisplay :time="time[2]"></NumberDisplay>
        </div>
      </div>
      <div class="flex">
        <p>{{ $t("message.date.seconds") }}</p>
        <div class="flex-1 flex justify-end ml-3">
          <NumberDisplay :time="time[3]"></NumberDisplay>
        </div>
      </div>
      <a
        :href="link"
        v-if="link"
        class="underline text-sm w-full text-left mt-3"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t("message.date.informations") }}
      </a>
    </div>
  </div>
</template>

<script>
import NumberDisplay from "./NumberDisplay.vue";
export default {
  name: "Countdown",
  components: { NumberDisplay },
  props: {
    title: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    hour: {
      required: true,
      type: String,
    },
    link: {
      type: String,
    },
  },
  data() {
    return {
      time: [],
      stopDate: null,
      stop: true,
    };
  },
  mounted() {
    this.stopDate = new Date(this.date + " " + this.hour);
    this.changeHour();
    this.interval = setInterval(this.changeHour.bind(this), 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    calcDate() {
      var dateEntered = this.stopDate;
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();
      if (difference <= 0) {
        // Timer done
        clearInterval(this.time);
        this.stop = true;
        return [0, 0, 0, 0];
      } else {
        this.stop = false;
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        days = days.toString().padStart(2, "0").split("");
        hours = hours.toString().padStart(2, "0").split("");
        minutes = minutes.toString().padStart(2, "0").split("");
        seconds = seconds.toString().padStart(2, "0").split("");

        return [days, hours, minutes, seconds];
      }
    },
    changeHour() {
      const time = this.calcDate();
      this.time = time;
    },
  },
};
</script>
