import { getHorses, getRandomSpeed, speedMultiplier } from "@/utils";
import { expect } from "vitest";

describe("Utils", () => {
  it("Get 8 horses", () => {
    const horses = getHorses()
    expect(horses.length).toBe(8)
  })

  it("Random speed between two numbers", () => {
    const min = 20
    const max = 40
    const speed = getRandomSpeed(min, max)
    expect(speed).toBeGreaterThanOrEqual(min);
    expect(speed).toBeLessThanOrEqual(max);
  })

  it("Speed multiplier", () => {
    const min = 20
    const max = 40
    const deviation = 0.05
    let updatedSpeed = speedMultiplier(50, deviation, min, max)
    expect(updatedSpeed).toEqual(max)
    updatedSpeed = speedMultiplier(10, deviation, min, max)
    expect(updatedSpeed).toEqual(min)
  })

})
