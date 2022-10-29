<script setup>
  import {watch, computed} from "vue"
  import { useHorseStore } from '@/store/useHorse';
  import { useRaceStore } from '@/store/useRace';

  const props = defineProps(["horse"])
  const horseStore = useHorseStore()
  const raceStore =  useRaceStore()
  const checkRun = computed(() => raceStore.isStarted && props.horse.location < 90)

  //Props.horse.location initial value = 0
  // When the race starts the value of horse.location = 1
  // Then watch triggered after this value change
  // Horse runs to the finish line
  watch(() => props.horse.location, () => {
    if(props.horse.location < 90){
      horseStore.runHorse(props.horse)
      return
    }
    horseStore.goFinish(props.horse)
  })

  const getImage = (png= true) => {
    if(png){  
      const pngPath = new URL(`/src/assets/img/horse-${props.horse.id}.png`, import.meta.url).href
      return pngPath
    }
    
    const gifPath = new URL(`/src/assets/img/horse-${props.horse.id}.gif`, import.meta.url).href
    return gifPath
  }

</script>

<template>
  <div class="lane-wrapper">
    <span class="lane-wrapper__number">{{horse.id}}</span>
    <div class="horse" >
      <img class="horse__img"  v-if="!checkRun" :style="{left: `${props.horse.location}%`}" :src="getImage()" alt="Standing Horse">
      <img class="horse__img running" v-else  :style="{left: `${props.horse.location}%`}" :src="getImage(false)" alt="Running Horse">
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
      z-index: 1;
    }

    .running{
      transition: left linear .1s;
    }
  }
}
</style>