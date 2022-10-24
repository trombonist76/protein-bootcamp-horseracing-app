<script setup>
import {useHorseStore} from "@/store/useHorse"
import Background from "./Background.vue"
const props = defineProps(["isRaceStarted"])
const horseStore = useHorseStore()
</script>

<template>
  <div class="wrapper">
    <Background :isRaceStarted="props.isRaceStarted"/>
    <div class="lane-wrapper">
      <div class="lane-wrapper__start" :class="{'slide-left': props.isRaceStarted}">
        <div>START</div>
      </div>
      <slot name="horses"></slot>
      <div class="lane-wrapper__finish" :class="{'slide-right': horseStore.isAnyClosing}">
        FINISH
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
    transition: left 2s linear;
  }

  &__finish {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 4px solid $arena-border-color;
    width: 0%;
    letter-spacing: .5rem;
    font-size: 3rem;
    overflow: hidden;
    transition: 2s linear;
  }
}

.slide-left {
  left: -100%;
}

.slide-right {
  width: 12%;
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