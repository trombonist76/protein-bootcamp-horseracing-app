<script setup>
import {useHorseStore} from "@/store/useHorse"
const horseStore = useHorseStore()
</script>

<template>
  <div class="finish" :class="{'slide-right': horseStore.isAnyClosing}">
      <div>
        FINISH
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';


.finish {
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
    right: -10rem;
    position: absolute;
  }

.slide-right {
  right: 10%;
  transition: right 2s linear;
}

</style>