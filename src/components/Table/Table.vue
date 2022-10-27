<script setup>
import { useHorseStore } from "@/store/useHorse"
import TableItem from "./TableItem.vue";
const horseStore = useHorseStore()
const selectHorseHandler = (horse) => {
  horseStore.selectHorse(horse)
}
</script>

<template>
  <div class="table-wrapper">
    <div class="inner">
      <TableItem v-for="horse in horseStore.horses" :horse="horse" :key="horse.id" @selectHorse="selectHorseHandler"></TableItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';
  .table-wrapper{
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color: black, $alpha: .6);

    .inner{
      width: 55%;
      display: grid;
      align-items: center;
      gap: 2rem;
      padding: 2rem 3rem;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      border-radius: 1rem;
      overflow: hidden;
      background-color: $not-in-top;
    }
  }
</style>