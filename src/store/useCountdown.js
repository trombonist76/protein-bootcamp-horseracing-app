import { defineStore } from 'pinia'
import {delay} from "@/utils"

export const useCountdownStore = defineStore('counter', {

  state: () => ({
    initialCountdown: 3,
    countdown: 3,
    isCountdownStarted: false
  }),

  actions: {
    async startCountdown(){
      if (this.countdown !== this.initialCountdown) return
  
      this.isCountdownStarted = true
      const interval = setInterval(() => {
        this.countdown --
      },1000)
      
      await delay(3000)
      clearInterval(interval)
      this.isCountdownStarted = false
    },

    resetCountdown(){
      if (this.countdown !== 0) return
      this.countdown = this.initialCountdown
    }
  }
})