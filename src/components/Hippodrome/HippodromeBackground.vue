<script setup>

import Leaderboard from '../Leaderboard/Leaderboard.vue';
import ButtonComp from '@/components/Button/Button.vue';
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
  isSliding.value = true
}

const isSliding = ref(true)

watch(() => horseStore.isAnyClosing, async() => {
  if(!horseStore.isAnyClosing) return
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
@import '@/assets/scss/mixins.scss';

.arena,
.mid,
.front{
    backface-visibility: hidden;
}
.arena {
  height: 60%;
  background: url('@/assets/icons/back.svg') repeat-x;
  background-size: cover;
}

.front{
  height: 100%;
  background: url('@/assets/icons/front.svg') repeat-x;
  background-size: cover;
  display: flex;
  justify-content: space-between;
}

.mid{
  height: 100%;
  background: url('@/assets/icons/mid.svg') repeat-x;
  background-size: cover;
}



@include xxl{
  .arena {
    height: 42%;
    background-size: contain;
  }

  .front{
    background-size: contain;
    flex-direction: row;
    justify-content: space-between;

  }

  .mid{
    background-size: contain;
  }
}

.buttons{
  margin-left: 2rem;
  display: flex;
  align-items: center;
  flex: 1;
}

.sliding-arena{
  animation: slide-arena 45s linear infinite;
}

.sliding-mid{
  animation: slide-mid 30s linear infinite;
}

.sliding-front{
  animation: slide-front 15s linear infinite;
}

.paused{
  animation-play-state: paused;
}


@include animation-mixin(slide-arena, 200%);
@include animation-mixin(slide-mid, 400%);
@include animation-mixin(slide-front, 600%);
</style>