<script setup>
 import useHorse from "@/composables/horse"
import Background from "./Background.vue"
 const {checkAllGoAway, isAnyClosing} = useHorse()

 
</script>

<template>
  <div class="wrapper">
    <Background/>
    <div class="lane-wrapper">
      <div class="lane-wrapper__start" :class="{'slide-left': checkAllGoAway}">
        START
      </div>
      <slot name="horses"></slot>
      <div class="lane-wrapper__finish" :class="{'slide-right': isAnyClosing}">
        FINISH
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.wrapper{
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column
}

.lane-wrapper {
  
  display: flex;
  color: $arena-text-color;

  &__start {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 4px solid $arena-border-color;
    width: 9%;
    letter-spacing: .5rem;
    font-size: 3rem;
    overflow: hidden;
    transition: 2s linear;
    background: url('@/assets/icons/lane.svg');


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
    background: url('@/assets/icons/lane.svg') ;

  }
}

.slide-left{
  width: 0;
}

.slide-right{
  width: 18%;
}

@keyframes slide{
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-33%, 0, 0);
  }
}
</style>