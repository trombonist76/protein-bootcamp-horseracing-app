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

  function runHorse(updatingHorse){
    const horseIndex = horses.value.findIndex(horse => horse.id === updatingHorse.id)
    const speed = speedMultiplier(updatingHorse.speed)
    const location = updatingHorse.location + (speed / 50)
    horses.value[horseIndex] = {
      ...updatingHorse,
      speed,
      location
    }
  }

  return { horses: readonly(horses), startHorsesToRace, runHorse}
}