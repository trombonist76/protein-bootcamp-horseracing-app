import { ref } from "vue";

export default function useCountdown(initialCountdown = 3){
  const countdown = ref(initialCountdown)

  function startCountdown(){
    if (countdown.value !== initialCountdown) return

    const interval = setInterval(() => {
      countdown.value --
    },1000)
    
    setTimeout(() => clearInterval(interval), initialCountdown * 1000)
  }

  function resetCountdown(){
    if (countdown.value !== 0) return

    countdown.value = initialCountdown
  }

  return {countdown, startCountdown, resetCountdown}
}