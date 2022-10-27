<script setup>
import Hippodrome from '@/components/Hippodrome/Hippodrome.vue';
import Countdown from "@/components/Countdown/Countdown.vue"
import TableComp from "@/components/Table/Table.vue"
import Result from '@/components/Result/Result.vue';
import { useCountdownStore } from '@/store/useCountdown';
import { useRaceStore } from '@/store/useRace';
import { useHorseStore } from '@/store/useHorse';

const countdownStore = useCountdownStore()
const raceStore = useRaceStore()
const horseStore = useHorseStore()
</script>

<template>
  <div class="app-container">
    <teleport to='body'>
      <Countdown v-if="countdownStore.isStarted"></Countdown>
      <Result v-if="raceStore.isFinished"></Result>
      <TableComp v-if="!horseStore.checkAnySelected"></TableComp>
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
