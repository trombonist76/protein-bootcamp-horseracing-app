import { defineStore } from 'pinia'
import { getHorses, getRandomSpeed, speedMultiplier} from "@/utils"
import { useRaceStore } from './useRace'

export const useHorseStore = defineStore('horse', {
  state: () => ({horses: getHorses(8)}),

  getters: {
    checkAllFinished : (state) => state.horses.every(horse => horse.location >= 100),
    isAnyClosing : (state) => state.horses.some(horse => horse.location >= 70),
    checkAllGoAway : (state) => state.horses.some(horse => horse.location >= 30),
    leaderboard : (state) => {
      const raceStore = useRaceStore()
      return raceStore.isFinished ? state.sortByTime() : state.sortByLocation()
    }

  },

  actions: {
    startHorsesToRace() {
      this.horses = this.horses.map(horse => {
        return {
          ...horse, 
          startedAt: Date.now(),
          speed: getRandomSpeed(),
          location: 0
        }
      })
    },

    sortByLocation(){
      const rankings = [...this.horses].sort((a,b) => {
        const now = Date.now()
        const aDiff = (now - a.startedAt) / a.location
        const bDiff = (now - b.startedAt) / b.location
        return aDiff - bDiff
      })
      return rankings
    },

    sortByTime(){
      const rankings = [...this.horses].sort((a,b) => a.time - b.time)
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

    goFinish(finishedHorse){
      const horse = this.findHorse(finishedHorse.id)
      const now = Date.now()
      const diff = (now - horse.startedAt) / 1000
      horse.speed = 0
      horse.finishedAt = now
      horse.time = diff
    }
  }
})