import { ref, readonly } from 'vue'
import { getHorses } from '../utils'

const horses = ref(getHorses())

export default function useHorse(){
  

  return { horses: readonly(horses)}
}