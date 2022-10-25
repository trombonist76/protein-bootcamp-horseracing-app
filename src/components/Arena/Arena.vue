<script setup>
import {useHorseStore} from "@/store/useHorse"
import { useRaceStore } from '@/store/useRace';
import Background from "./Background.vue"

const raceStore =  useRaceStore()
const horseStore = useHorseStore()
</script>

<template>
  <div class="wrapper">
    <Background/>
    <!-- <div class="lane-wrapper">

      <slot name="horses"></slot>
      <div class="lane-wrapper__start" :class="{'slide-left': raceStore.isStarted}">
        <div>START</div>
      </div>
      <div class="lane-wrapper__finish" :class="{'slide-right': horseStore.isAnyClosing}">
        <div>
          <img class="flag" src="@/assets/img/finish.png" alt="">
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';


.wrapper {
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column
}

.lane-wrapper {
  display: flex;
  color: $arena-text-color;
  position: relative;
  background-color: $floor-color;

  &__start {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: .8rem;
    font-size: 3rem;
    background-color: $floor-color;
    height: 100%;
    padding: 0 2rem;
    position: absolute;
    left: 150px;
  }

  &__finish {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: .8rem;
    font-size: 3rem;
    background-color: $floor-color;
    height: 100%;
    font-size: 3rem;
    padding: 0 2rem;
    position: absolute;
    right: -10%;

    .flag{
      height: 7rem;
    }
  }
}

.slide-left {
  left: -100%;
  transition: 2s linear;

}

.slide-right {
  right: 10%;
  transition: 2s linear;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-33%, 0, 0);
  }
}
</style>