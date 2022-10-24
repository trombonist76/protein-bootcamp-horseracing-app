import { defineStore } from 'pinia'
import { ref } from 'vue'
import {delay} from "@/utils"

export const useCountdownStore = defineStore('counter', () => {
  const initialCountdown = 3
  const countdown = ref(initialCountdown)
  const isCountdownStarted = ref(false)

  async function startCountdown(){
    if (countdown.value !== initialCountdown) return

    isCountdownStarted.value = true
    const interval = setInterval(() => {
      countdown.value --
    },1000)
    
    await delay(3000)
    clearInterval(interval)
    isCountdownStarted.value = false
  }

  function resetCountdown(){
    if (countdown.value !== 0) return
    countdown.value = initialCountdown
  }

  return {countdown, startCountdown, resetCountdown, isCountdownStarted}

})