<script setup>
import { reactive } from 'vue';
import Horse from '@/components/Horse/Horse.vue';
import Arena from '@/components/Arena/Arena.vue';
import ButtonComp from '@/components/Shared/Button.vue';
import Countdown from "@/components/Countdown/Countdown.vue"
import { useCountdownStore } from '@/store/useCountdown';
import { useHorseStore } from '@/store/useHorse';
import Leaderboard from '@/components/Leaderboard/Leaderboard.vue';

const horseStore = useHorseStore()
const countdownStore = useCountdownStore()
const race = reactive({
  isStarted: false
})

const startCountdownHandler = async () => {
  await countdownStore.startCountdown()
  race.isStarted = true
  horseStore.startHorsesToRace()
}
</script>

<template>
  <div class="app-container">
    <teleport to='body'>
      <Countdown v-if="countdownStore.isCountdownStarted"></Countdown>
    </teleport>
    <!-- <Leaderboard></Leaderboard> -->
    <div>

      <ButtonComp @click="startCountdownHandler" name="Start Countdown"></ButtonComp>
      <ButtonComp @click="countdownStore.resetCountdown" name="Reset Countdown"></ButtonComp>
    </div>
    <Arena :isRaceStarted="race.isStarted">
      <template v-slot:horses>
        <div class="horses" :class="{'slide' : race.isStarted}">
          <Horse class="horse" v-for="horse in horseStore.horses" :key="horse.id" :horse="horse" :isRaceStarted="race.isStarted" />
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
  position: relative;
  display: flex;
  flex-direction: column;
  border-left: 4px solid white;
  border-right: 4px solid white;
}
  .horses .horse:not(:last-child){
    border-bottom: 4px solid white;
}
</style>
