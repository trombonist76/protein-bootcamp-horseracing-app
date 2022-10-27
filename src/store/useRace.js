import { defineStore } from 'pinia'
import { useHorseStore } from './useHorse'
import { useCountdownStore } from './useCountdown'


export const useRaceStore = defineStore('race',{
  state: () => ({
    isStarted: false,
    isBackgroundSliding: false
  }),

  getters: {
    isFinished: () => {
      const horseStore = useHorseStore()
      return horseStore.checkAllFinished
    } 
  },

  actions: {
    async startRace(){
      const countdownStore = useCountdownStore()
      const horseStore = useHorseStore()
      await countdownStore.startCountdown()
      this.isStarted = true
      this.isBackGroundSliding = true
      horseStore.startHorsesToRace()
    },

    resetRace(){
      const horseStore = useHorseStore()
      const countdownStore = useCountdownStore()
      this.isStarted = false
      countdownStore.$reset()
      horseStore.$reset()
    },

    pauseBackground(){
      this.isBackgroundSliding = false
    },

  }
})
