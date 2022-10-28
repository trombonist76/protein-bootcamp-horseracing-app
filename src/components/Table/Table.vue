<script setup>
import TableItem from "./TableItem.vue";
import { useHorseStore } from "@/store/useHorse"
import { setSelectedHorse } from "@/service/local"

const horseStore = useHorseStore()

const selectHorseHandler = (horse) => {
  horseStore.selectHorse(horse)
  setSelectedHorse(horse)
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
      width: 100%;
      display: grid;
      align-items: center;
      gap: 2rem;
      padding: 2rem 1rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border-radius: 1rem;
      overflow: hidden;
      background-color: $not-in-top;

      @include md {
        width: 80%;
        padding: 2rem 3rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      @include lg{
        width: 80%;
      }

      @include xl{
        width: 60%;
      }

      @include xxl{
        width: 50%;
      }
    }
  }
</style>