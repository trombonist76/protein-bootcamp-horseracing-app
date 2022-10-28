import { setActivePinia, createPinia } from 'pinia'
import { useRaceStore } from "@/store/useRace";
import { useCountdownStore } from "@/store/useCountdown";
import { expect } from 'vitest';

describe('Race Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Start Race', async () => {
    const raceStore = useRaceStore()
    const countdownStore = useCountdownStore()
    await raceStore.startRace()
    expect(countdownStore.countdown).toEqual(0)
    expect(raceStore.isStarted).toBe(true)
    expect(raceStore.isBackgroundSliding).toBe(true)
  })

  it('Reset Race', () => {
    const raceStore = useRaceStore()
    const countdownStore = useCountdownStore()
    raceStore.resetRace()
    expect(raceStore.isStarted).toBe(false)
    expect(countdownStore.countdown).toEqual(3)
  })

  it('Pause Background', () => {
    const raceStore = useRaceStore()
    raceStore.pauseBackground()
    expect(raceStore.isBackgroundSliding).toBe(false)
  })

})