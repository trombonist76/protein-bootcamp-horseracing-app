import { setActivePinia, createPinia } from 'pinia'
import { useCountdownStore } from "@/store/useCountdown";

describe('Countdown Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Start Countdown', async () => {
    const countdownStore = useCountdownStore()
    expect(countdownStore.countdown).toBe(3)
    await countdownStore.startCountdown()
    expect(countdownStore.countdown).toBe(1)
  })

  it('Reset Countdown', () => {
    const countdownStore = useCountdownStore()
    countdownStore.resetCountdown()
    expect(countdownStore.countdown).toBe(3)
  })
})