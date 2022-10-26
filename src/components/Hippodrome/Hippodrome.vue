<script setup>
import {useHorseStore} from "@/store/useHorse"
import { useRaceStore } from '@/store/useRace';
import ArenaStart from "./HippodromeStart.vue";
import ArenaFinish from "./HippodromeFinish.vue";
import Background from "./HippodromeBackground.vue"
import Horse from "@/components/Horse/Horse.vue";

const raceStore =  useRaceStore()
const horseStore = useHorseStore()
</script>

<template>
  <div class="wrapper">
    <Background/>
    <div class="lane-wrapper">
      <div class="horses" :class="{'slide' : raceStore.isStarted}">
          <Horse class="horse" v-for="horse in horseStore.horses" :key="horse.id" :horse="horse"/>
      </div>
      <ArenaStart></ArenaStart>
      <ArenaFinish></ArenaFinish>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';


.wrapper {
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column
}

.lane-wrapper {
  display: flex;
  color: $arena-text-color;
  background-color: $floor-color;
  position: relative;

  .horses {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: 4px solid white;
    border-right: 4px solid white;
    }
     .horse:not(:last-child){
      border-bottom: 4px solid white;
    }
  }

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-33%, 0, 0);
  }
}
</style>