<script setup>
import { useHorseStore } from '@/store/useHorse'
import { useRaceStore } from '@/store/useRace'
import ResultItem from './ResultItem.vue';
import ButtonComp from '@/components/Button/Button.vue';
const horseStore = useHorseStore()
const raceStore = useRaceStore()

const restartHandler = () => {
  raceStore.resetRace()
  raceStore.startRace()
}

const closeHandler = () => {
  raceStore.resetRace()
}

</script>
<template>
  <div class="wrapper">
    <div class="results">
      <ResultItem v-for="(result, index) in horseStore.leaderboard" :key="result.id" :result="result" :rank="index">
      </ResultItem>
      <div class="buttons">
        <ButtonComp @click="restartHandler" icon="restart_alt" name="Restart Race"  textColor="white" width="40%"></ButtonComp>
        <ButtonComp @click="closeHandler" icon="close" name="Close Leaderboard"  textColor="white" width="40%"></ButtonComp>
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';


.wrapper{
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: black, $alpha: .6);
}
.results {
  width: 90%;
  display: grid;
  align-items: flex-end;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 0 0 .7rem .7rem;
  overflow: hidden;

  .buttons{
    grid-column: 1 / -1;
    background-color: $not-in-top;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;

  }

  @include md {
    width: 70%;
  }

  @include lg{
    width: 50%;
  }
  @include xl{
    width: 40%;
  }
}
</style>