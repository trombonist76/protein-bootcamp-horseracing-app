import { defineStore } from 'pinia'
import { getHorses, getRandomSpeed, speedMultiplier} from "@/utils"
import { useRaceStore } from './useRace'

export const useHorseStore = defineStore('horse', {
  state: () => ({
    horses: getHorses(),
  }),

  getters: {
    checkAllFinished : (state) => state.horses.every(horse => horse.location >= 90),
    checkAllGoAway : (state) => state.horses.some(horse => horse.location >= 30),
    checkAnySelected: (state) => state.horses.find(horse => horse.isSelected),
    isAnyClosing : (state) => state.horses.some(horse => horse.location >= 70),
    leaderboard : (state) => state.sortHorses()
  },

  actions: {

    // Initial location = 0 then changes in this function to 1,
    // This triggered 'watch' in Horse.vue and horses start to run. 
    startHorsesToRace() {
      this.horses = this.horses.map(horse => {
        return {
          ...horse, 
          startedAt: Date.now(),
          speed: getRandomSpeed(),
          location: 1
        }
      })
    },

    // It Sorts horses by location / finishing time or race time
    sortHorses(){
      const rankings = [...this.horses].sort((a,b) => {
        const now = Date.now()
        const aDiff = a.location / (a.time ?? now - a.startedAt)
        const bDiff = b.location / (b.time ?? now - b.startedAt)
        return bDiff - aDiff
      })
      return rankings
    },

    findHorse(horseId){
      const horseIndex = this.horses.findIndex(horse => horse.id === horseId)
      const horse = this.horses.at(horseIndex)
      return horse
    },

    updateHorse(updatingHorse){
      const horse = this.findHorse(updatingHorse.id)
      horse.speed = speedMultiplier(updatingHorse.speed)
      horse.location = updatingHorse.location + .4
    },

    runHorse(horse){
      const raceStore = useRaceStore()
      if(!raceStore.isStarted) return
      setTimeout(() => this.updateHorse(horse), 2000 / horse.speed)
    },

    //When horses come to finish line it changes some property in horse obj
    goFinish(finishedHorse){
      const horse = this.findHorse(finishedHorse.id)
      const now = Date.now()
      const diff = (now - horse.startedAt) / 1000
      horse.speed = 0
      horse.finishedAt = now
      horse.time = diff
    },

    selectHorse(selectedHorse){
      const horse = this.findHorse(selectedHorse.id)
      horse.isSelected = true
    } 
  }
})