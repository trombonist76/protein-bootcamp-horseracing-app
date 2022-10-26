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
  <div class="lane-wrapper">
    <span class="lane-wrapper__number">{{horse.id}}</span>
    <div class="horse">
      <img class="horse__img" v-if="!checkRun" :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-standing.png" alt="Standing Horse">
      <img class="horse__img" v-else  :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-running.gif" alt="Running Horse">
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .lane-wrapper{
    display: flex;
    gap: 2rem;
    font-size: 3rem;
    flex: 1;
    .horse{
    position: relative;
    flex: 1;
    
    &__img{
      height: 4rem;
      margin-top: -1%;
      position: absolute;
      transition: left linear .1s;
      z-index: 1;
    }
  }
}
</style>