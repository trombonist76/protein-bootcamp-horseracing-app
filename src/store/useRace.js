import { defineStore } from 'pinia'
import { useHorseStore } from './useHorse'

export const useRaceStore = defineStore('race',{
  state: () => ({
    isStarted: false
  }),

  getters: {
    isFinished: () => {
      const horseStore = useHorseStore()
      return horseStore.checkAllFinished
    } 
  },

  actions: {
    startRace(){
      this.isStarted = true
    }
  }
})
