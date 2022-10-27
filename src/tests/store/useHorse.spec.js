import { setActivePinia, createPinia } from 'pinia'
import { useHorseStore } from "@/store/useHorse";

describe('Horse Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Start Horses to Race', () => {
    const horseStore = useHorseStore()
    expect(horseStore.horses.length).toBe(8)
    expect(horseStore.horses.every(horse => horse.location === 0)).to.be.true
    horseStore.startHorsesToRace()
    expect(horseStore.horses.every(horse => horse.location === 1)).to.be.true
  })

  it('Find a horse', () => {
    const horseStore = useHorseStore()
    const horse = horseStore.findHorse(3)
    expect(horse.id).toBe(3)
  })
})