import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRaceStore = defineStore('race', () => {

  const isStarted = ref(false)
  const isFinished = ref(false)

  function startRace(){
    isStarted.value = true
  }

  return {isStarted, isFinished, startRace}
})
