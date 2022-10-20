<script setup>
import { reactive } from 'vue';
import Horse from './components/Horse/Horse.vue';
import Arena from './components/Arena/Arena.vue';
import useCountdown from './composables/countdown';
import useHorse from './composables/horse';
import ButtonComp from './components/Shared/Button.vue';
const { horses } = useHorse()
const { countdown, startCountdown, resetCountdown } = useCountdown()
const race = reactive({
  isStarted: false
})

const startCountdownHandler = async () => {
  await startCountdown()
  race.isStarted = true
}
</script>

<template>
  <div class="app-container">
    <div>
      {{countdown}}
      {{race.isStarted}}
      <ButtonComp @click="startCountdownHandler" name="Start Countdown"></ButtonComp>
      <ButtonComp @click="resetCountdown" name="Reset Countdown"></ButtonComp>
    </div>
    <Arena>
      <template v-slot:horses>
        <div class="horses">
          <Horse class="horse" v-for="(horse, index) in horses" :key="horse.id" :horse="horse" :isRaceStarted="race.isStarted" />
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
  justify-content: flex-end;
  
}
.horses {
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
