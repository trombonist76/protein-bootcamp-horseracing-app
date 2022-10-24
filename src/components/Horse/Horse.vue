<script setup>
  import {ref, onMounted, watch, watchEffect, computed} from "vue"
  import { useHorseStore } from '@/store/useHorse';

  const props = defineProps(["horse", "isRaceStarted"])
  const checkRun = computed(() => props.isRaceStarted && props.horse.location < 100)
  const horseStore = useHorseStore()

  watchEffect(() => {
    if(checkRun.value){
      horseStore.runHorse(props.horse)
    }else if(props.horse.location >= 100){
      horseStore.goFinish(props.horse)
    }
  })

</script>

<template>
  <div class="horse">
    {{horse.id}}
    <img class="horse__img" v-if="!checkRun" :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-standing.png" alt="Standing Horse">
    <img class="horse__img" v-else  :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-running.gif" alt="Running Horse">
  </div>
</template>

<style lang="scss" scoped>
  .horse{
    font-size: 3rem;
    width: 100%;
    height: 4.4rem;
    position: relative;

    &__img{
      height: 5rem;
      margin-left: 40px;

      margin-top: -30px;
      position: absolute;
      transition: left linear .1s;
    }
  }

</style>