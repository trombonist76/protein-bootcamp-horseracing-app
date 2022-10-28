import { setActivePinia, createPinia } from 'pinia'
import { useHorseStore } from "@/store/useHorse";

describe('Horse Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Start Horses to Race', () => {
    const horseStore = useHorseStore()
    expect(horseStore.horses.length).toBe(8)
    expect(horseStore.horses.every(horse => horse.location === 0)).toBe(true)
    horseStore.startHorsesToRace()
    expect(horseStore.horses.every(horse => horse.location === 1)).toBe(true)
  })

  it('Find a horse', () => {
    const horseStore = useHorseStore()
    const horse = horseStore.findHorse(3)
    expect(horse.id).toBe(3)
  })

  it('Update a horse', () => {
    const horseStore = useHorseStore()
    const horse = horseStore.horses.at(3)
    horseStore.updateHorse(horse)
    expect(horse.location).toEqual(0.4)
    expect(horse.speed).not.to.equal(0)
  })

  it('Select a horse', () => {
    const horseStore = useHorseStore()
    const horse = horseStore.findHorse(3)
    horseStore.selectHorse(horse)
    expect(horseStore.checkAnySelected.id).toBe(3)
  })

})