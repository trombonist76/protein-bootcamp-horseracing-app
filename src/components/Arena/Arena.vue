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
    <div class="lane-wrapper">
      <div class="lane-wrapper__start" :class="{'slide-left': raceStore.isStarted}">
        <div>START</div>
      </div>
      <slot name="horses"></slot>
      <div class="lane-wrapper__finish" :class="{'slide-right': horseStore.isAnyClosing}">
        <div>FINISH</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

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
    position: absolute;
    left: 150px;
  }

  &__finish {
    // writing-mode: vertical-lr;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // letter-spacing: .8rem;
    // font-size: 3rem;
    // background-color: $floor-color;
    // height: 100%;
    // position: absolute;
    // right: -10%;
    // width: 9%;
    // transition: right 2s linear;

    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 4px solid $arena-border-color;
    width: 0%;
    letter-spacing: .5rem;
    font-size: 3rem;
    overflow: hidden;
  }
}

.slide-left {
  left: -100%;
  transition: 2s linear;

}

.slide-right {
  width: 9%;
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