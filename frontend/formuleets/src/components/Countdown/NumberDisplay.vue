<template>
  <div class="timer">
    <div class="animated" ref="timer">
      <div class="front">{{ time ? time[0] : 0 }}</div>
      <div class="back">{{ backVal ? backVal[0] : 0 }}</div>
    </div>
    <hr class="border-bt" />
    <div class="next">
      <p>{{ time ? time[0] : 0 }}</p>
    </div>
    <p>{{ backVal ? backVal[0] : 0 }}</p>
  </div>
  <div class="timer">
    <div class="animated" ref="timer2">
      <div class="front">{{ time ? time[1] : 0 }}</div>
      <div class="back">{{ backVal ? backVal[1] : 0 }}</div>
    </div>
    <hr class="border-bt" />
    <div class="next">
      <p>{{ time ? time[1] : 0 }}</p>
    </div>
    <p>{{ backVal ? backVal[1] : 0 }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberDisplay",
  props: {
    time: {
      type: Array,
      required: true,
      default: () => [0, 0],
    },
  },
  watch: {
    time(next) {
      if (this.backVal[0] != this.time[0]) {
        this.$refs.timer.classList.add("play-animation");
        this.$refs.timer.addEventListener(
          "animationend",
          () => {
            this.backVal = next;
            this.$refs.timer.classList.remove("play-animation");
          },
          { once: true }
        );
      }

      if (this.backVal[1] != this.time[1]) {
        this.$refs.timer2.classList.add("play-animation");
        this.$refs.timer2.addEventListener(
          "animationend",
          () => {
            this.backVal = next;
            this.$refs.timer2.classList.remove("play-animation");
          },
          { once: true }
        );
      }
    },
  },
  data() {
    return {
      backVal: null,
    };
  },
  mounted() {
    this.backVal = this.time;
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  color: #fff;
  padding: 0;
  margin: 0;
}

.timer div,
.timer p {
  font-weight: bold;
}

.timer {
  position: relative;
  width: 1.2rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd50;
  transform-style: preserve-3d;
  perspective: 300px;
  background-color: #1b1b1b;
}

.next {
  background-color: #1b1b1b;
  position: absolute;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  top: 0;
}

.next p {
  transform: translateY(50%);
}

.animated {
  position: absolute;
  top: -1px;
  z-index: 10;
  width: calc(100% + 2px);
  height: calc(50% + 1px);
  /*   background-color: #1b1b1b; */
  display: flex;
  justify-content: center;
  overflow: visible;
  transform-style: preserve-3d;
  transform-origin: bottom;
  border: 1px solid #dddddd50;
}

.play-animation {
  animation: 0.75s rotate linear;
}

.front,
.back {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200%;
  transform: rotateY(0deg) translateY(1px); /* fix firefox bug */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #1b1b1b;
}

.front {
  transform-origin: center;
  transform: translateY(1px) rotateY(180deg) rotateZ(180deg);
}

.border-bt {
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #dddddd50;
  opacity: 0.5;
  z-index: 15;
}

@keyframes rotate {
  to {
    transform: rotateX(-180deg);
  }
}
</style>
