<script setup>
import {useHorseStore} from "@/store/useHorse"
import LeaderboardItem from "./LeaderboardItem.vue";
const horseStore = useHorseStore()
</script>
<template>
  <div class="leaderboard">
    <table id="leaderboard">
      <tr>
        <th>Rank</th>
        <th>Horse</th>
        <th>Speed</th>
        <th>Time</th>
      </tr>
      <LeaderboardItem v-for="(horse, index) in horseStore.leaderboard" :rank="index" :horse="horse" :key="horse.id"></LeaderboardItem>
    </table>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
.leaderboard {
  display: flex;
  gap: 3rem;
  height: 100%;
}

#leaderboard{
  color: $table-text-color;
  width: 25%;
  border-radius: 2rem;
  text-align: center;

  th{
    background-color: $table-header-color;
    padding: 15px;
  }
}
</style>