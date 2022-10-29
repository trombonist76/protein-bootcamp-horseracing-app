<script setup>
import HippodromeStart from "./HippodromeStart.vue";
import HippodromeFinish from "./HippodromeFinish.vue";
import HippodromeBackground from "./HippodromeBackground.vue"
import Horse from "@/components/Horse/Horse.vue";
import { useHorseStore } from "@/store/useHorse"

const horseStore = useHorseStore()
</script>

<template>
  <div class="wrapper">
    <HippodromeBackground/>
    <div class="lane-wrapper">
      <div class="horses">
          <Horse class="horses__horse" v-for="horse in horseStore.horses" :key="horse.id" :horse="horse"/>
      </div>
      <HippodromeStart></HippodromeStart>
      <HippodromeFinish></HippodromeFinish>
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
  flex: 1;
  color: $arena-text-color;
  background-color: $floor-color;
  position: relative;

  .horses {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-left: 4px solid white;
      &__horse:not(:last-child){
        border-bottom: 4px solid white;
      }
    }
  }
</style>