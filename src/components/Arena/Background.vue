<script setup>
import Leaderboard from '../Leaderboard/Leaderboard.vue';
import ButtonComp from '@/components/Shared/Button.vue';
import { useRaceStore } from '@/store/useRace';
import { useCountdownStore } from '@/store/useCountdown';
import { useHorseStore } from '@/store/useHorse';
import { ref, watch} from 'vue';
import {delay} from "@/utils"

const countdownStore = useCountdownStore()
const raceStore =  useRaceStore()
const horseStore = useHorseStore()

const startRaceHandler = async () => {
  await countdownStore.startCountdown()
  raceStore.startRace()
  horseStore.startHorsesToRace()
}

const resetRaceHandler = () => {
  countdownStore.$reset()
  raceStore.$reset()
  horseStore.$reset()
}

const isSliding = ref(true)

watch(() => horseStore.isAnyClosing, async() => {
  await delay(2000)
  isSliding.value = false
})

</script>
<template>
  <div class="arena" :class="{'sliding-arena': raceStore.isStarted, 'paused': !isSliding}">    
    <div class="mid" :class="{'sliding-mid': raceStore.isStarted, 'paused': !isSliding}">
      <div class="front" :class="{'sliding-front': raceStore.isStarted, 'paused': !isSliding}">
        <div class="buttons">
          <ButtonComp v-if="!raceStore.isStarted" @click="startRaceHandler" name="Start Race" icon="flag"></ButtonComp>
          <ButtonComp v-if="raceStore.isFinished" @click="resetRaceHandler" name="Restart Race!"></ButtonComp>
        </div>
          <Leaderboard></Leaderboard>
      </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.arena,
.mid,
.front{
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}
.arena {
  height: 60%;
  background: url('@/assets/icons/back.svg');
  transform: translateZ(0);
}

.front{
  height: 100%;
  background: url('@/assets/icons/front.svg');
  transform: translateZ(0);
  display: flex;
  justify-content: space-between;
}

.mid{
  height: 100%;
  background: url('@/assets/icons/mid.svg');
  transform: translateZ(0);
}


.buttons{
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sliding-arena{
  animation: bg-arena 45s linear infinite;
}

.sliding-mid{
  animation: bg-mid 30s linear infinite;
}

.sliding-front{
  animation: bg-front 15s linear infinite;
}

.paused{
  animation-play-state: paused;
}

@keyframes bg-arena {
  100% {
    background-position: -200% 0;
  }
}

@keyframes bg-mid {
  100% {
    background-position: -400% 0;
  }
}

@keyframes bg-front {
  100% {
    background-position: -600% 0;
  }
}
</style>