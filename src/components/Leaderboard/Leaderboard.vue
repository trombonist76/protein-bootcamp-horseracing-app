<script setup>
import {useHorseStore} from "@/store/useHorse"
import LeaderboardItem from "./LeaderboardItem.vue";
const horseStore = useHorseStore()
</script>
<template>
  <div class="leaderboard">
    <LeaderboardItem v-for="(horse, index) in horseStore.leaderboard" :rank="index" :horse="horse" :key="horse.id"></LeaderboardItem>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';
.leaderboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 4px;
  width: 100%;
  padding: 1.1rem 1rem;
  background-color: #ABA89D;
}

@include md{
  .leaderboard{
    width: 40%;
    margin: .5rem 2rem 0 0;
    align-self: flex-start;    
  }
}
</style>