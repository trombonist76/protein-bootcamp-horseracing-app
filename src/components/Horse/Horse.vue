<script setup>
  import {watch, computed} from "vue"
  import { useHorseStore } from '@/store/useHorse';
  import { useRaceStore } from '@/store/useRace';

  const props = defineProps(["horse"])
  const horseStore = useHorseStore()
  const raceStore =  useRaceStore()
  const checkRun = computed(() => raceStore.isStarted && props.horse.location < 90)

  watch(() => props.horse.location, () => {
    if(props.horse.location < 90){
      horseStore.runHorse(props.horse)
      return
    }
    horseStore.goFinish(props.horse)
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
      z-index: 1;
    }
  }

</style>