<script setup>
import Hippodrome from '@/components/Hippodrome/Hippodrome.vue';
import Countdown from "@/components/Countdown/Countdown.vue"
import { useCountdownStore } from '@/store/useCountdown';
import { useRaceStore } from '@/store/useRace';
import Result from '@/components/Result/Result.vue';

const countdownStore = useCountdownStore()
const raceStore = useRaceStore()
</script>

<template>
  <div class="app-container">
    <teleport to='body'>
      <Countdown v-if="countdownStore.isStarted"></Countdown>
      <Result v-if="raceStore.isFinished"></Result>
    </teleport>
    <Hippodrome></Hippodrome>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
