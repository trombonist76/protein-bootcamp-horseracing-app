<script setup>
import { useCountdownStore } from '@/store/useCountdown';
  const countdownStore = useCountdownStore()
</script>
<template>
  <div class="countdown">
    <div class="countdown__circle">
      {{countdownStore.countdown}}
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.countdown {
  position: absolute;
  inset: 0;
  background-color: rgba($color: $modal-bg-color, $alpha: .3);
  display: flex;
  align-items: center;
  justify-content: center;

  &__circle {
    height: 300px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    border-radius: 50%;
    background-color: $timer-bg-color;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    60% {
      transform: scale(1.5);
      box-shadow: 0 0 0 200px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
}
</style>