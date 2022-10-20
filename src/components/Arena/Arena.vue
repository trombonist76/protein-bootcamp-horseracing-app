<script setup>

</script>

<template>
  <div class="arena">
    <div class="start">
      START
    </div>
    <slot name="horses"></slot>
    <div class="finish">
      FINISH
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
.arena {
  display: flex;
  background-color: $floor-color;
  color: $arena-text-color;

  .start {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 4px solid $arena-border-color;
    width: 9%;
    letter-spacing: .5rem;
    font-size: 3rem;
  }
  
  .finish {
    writing-mode: vertical-lr;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0 4px solid $arena-border-color;
    width: 9%;
    letter-spacing: .5rem;
    font-size: 3rem;
  }
}
</style>