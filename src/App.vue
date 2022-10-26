<script setup>
import Hippodrome from '@/components/Hippodrome/Hippodrome.vue';
import Countdown from "@/components/Countdown/Countdown.vue"
import { useCountdownStore } from '@/store/useCountdown';

const countdownStore = useCountdownStore()
</script>

<template>
  <div class="app-container">
    <teleport to='body'>
      <Countdown v-if="countdownStore.isCountdownStarted"></Countdown>
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
