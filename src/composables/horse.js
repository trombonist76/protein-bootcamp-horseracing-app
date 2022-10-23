import { ref, readonly, computed } from 'vue'
import { getHorses, getRandomSpeed, speedMultiplier } from '../utils'

const horses = ref(getHorses(8))

export default function useHorse(){
  
  const checkAllFinished = computed(() => horses.value.every(horse => horse.location >= 100)) 
  const isAnyClosing = computed(() => horses.value.some(horse => horse.location >= 70)) 
  const checkAllGoAway = computed(() => horses.value.some(horse => horse.location >= 30)) 
  const leaderboard = computed(() => checkAllFinished.value ? sortByTime() : sortByLocation())

  function startHorsesToRace(){
    horses.value = horses.value.map(horse => {
      return {
        ...horse, 
        startedAt: Date.now(),
        speed: getRandomSpeed()
      }
    })
  }

  function sortByLocation(){
    const rankings = [...horses.value].sort((a,b) => b.location - a.location)
    return rankings
  }

  function sortByTime(){
    const rankings = [...horses.value].sort((a,b) => a.time - b.time)
    return rankings
  }

  function findHorse(horseId){
    const horseIndex = horses.value.findIndex(horse => horse.id === horseId)
    const horse = horses.value.at(horseIndex)
    return horse
  }

  function updateHorse(updatingHorse){
    const horse = findHorse(updatingHorse.id)
    horse.speed = speedMultiplier(updatingHorse.speed)
    horse.location = updatingHorse.location + .4
  }

  function runHorse(horse){
    setTimeout(() => updateHorse(horse), 2000 / horse.speed)
  }

  const goFinish = (finishedHorse) => {
    const horse = findHorse(finishedHorse.id)
    const now = Date.now()
    const diff = (now - horse.startedAt) / 1000
    horse.speed = 0
    horse.finishedAt = now
    horse.time = diff
  }

  return { horses: readonly(horses), startHorsesToRace, runHorse, goFinish, leaderboard, isAnyClosing, checkAllGoAway}
}