<script setup>
import Horse from '@/components/Horse/Horse.vue';
import Arena from '@/components/Arena/Arena.vue';
import Countdown from "@/components/Countdown/Countdown.vue"
import { useCountdownStore } from '@/store/useCountdown';
import { useHorseStore } from '@/store/useHorse';
import { useRaceStore } from '@/store/useRace';

const horseStore = useHorseStore()
const countdownStore = useCountdownStore()
const raceStore =  useRaceStore()
</script>

<template>
  <div class="app-container">
    <teleport to='body'>
      <Countdown v-if="countdownStore.isCountdownStarted"></Countdown>
    </teleport>
    <Arena>
      <template v-slot:horses>
        <div class="horses" :class="{'slide' : raceStore.isStarted}">
          <Horse class="horse" v-for="horse in horseStore.horses" :key="horse.id" :horse="horse"/>
        </div>
      </template>
    </Arena>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.horses {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 4px solid white;
  border-right: 4px solid white;
}
  .horses .horse:not(:last-child){
    border-bottom: 4px solid white;
}
</style>
