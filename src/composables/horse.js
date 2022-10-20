import { ref, readonly } from 'vue'
import { getHorses, getRandomSpeed, speedMultiplier } from '../utils'

const horses = ref(getHorses(8))

export default function useHorse(){
  
  function startHorsesToRace(){
    horses.value = horses.value.map(horse => {
      return {
        ...horse, 
        startedAt: Date.now(),
        speed: getRandomSpeed()
      }
    })
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
    setTimeout(() => updateHorse(horse), 1000 / horse.speed)
  }

  const goFinish = (finishedHorse) => {
    const horse = findHorse(finishedHorse.id)
    const now = Date.now()
    const diff = (now - horse.startedAt) / 1000
    horse.speed = 0
    horse.finishedAt = now
    horse.time = diff
  }

  return { horses: readonly(horses), startHorsesToRace, runHorse, goFinish}
}