<script setup>
import LeaderboardItem from "./LeaderboardItem.vue";
import { useHorseStore } from "@/store/useHorse"
import { onMounted, onUnmounted, ref } from "vue";
const horseStore = useHorseStore()
const leaderboard = ref(null)

// Horse rankings change instantly, 
// but this change is so fast that it creates bad user experience in the UI. In order to fix this, 
// it is better to watch the horse sequences at 500ms intervals.
let interval = ref(null)

onMounted(() => {
  interval.value = setInterval(() => {
    leaderboard.value = horseStore.leaderboard
  },500)
})

onUnmounted(() => {
  clearInterval(interval.value)
})

</script>
<template>
  <TransitionGroup tag="ul" name="fade" class="leaderboard">
    <LeaderboardItem v-for="(horse, index) in leaderboard" :rank="index" :horse="horse" :key="horse.id"></LeaderboardItem>
  </TransitionGroup>
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
  padding: 1.1rem 1rem;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>