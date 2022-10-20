import { ref } from "vue";
import {delay} from "@/utils"
export default function useCountdown(initialCountdown = 3){
  const countdown = ref(initialCountdown)

  async function startCountdown(){
    if (countdown.value !== initialCountdown) return

    const interval = setInterval(() => {
      countdown.value --
    },1000)
    
    await delay(3000)
    clearInterval(interval)
  }

  function resetCountdown(){
    if (countdown.value !== 0) return
    countdown.value = initialCountdown
  }

  return {countdown, startCountdown, resetCountdown}
}