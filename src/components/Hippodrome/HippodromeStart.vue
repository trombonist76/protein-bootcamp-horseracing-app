<script setup>
import { useRaceStore } from '@/store/useRace';

const raceStore =  useRaceStore()
</script>

<template>
  <div class="start" :class="{'slide-left': raceStore.isStarted}">
    <div>START</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

  .start {
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
    left: 12%;
  }

.slide-left {
  left: -100%;
  transition: 2s linear;
}
</style>