<script setup>
import { reactive } from 'vue';
import Horse from './components/Horse/Horse.vue';
import useCountdown from './composables/countdown';
import useHorse from './composables/horse';
const {horses} = useHorse()
const {countdown, startCountdown, resetCountdown} = useCountdown()
const race = reactive({
  isStarted: false
})

const startCountdownHandler = () => {
  startCountdown()
}
</script>

<template>
  {{countdown}}
  <button @click="startCountdownHandler">Start Countdown</button>
  <button @click="resetCountdown">Reset Countdown</button>
  <Horse v-for="horse in horses" :key="horse.id" :horse="horse" :isRaceStarted="race.isStarted"/>
</template>

<style scoped>
</style>
