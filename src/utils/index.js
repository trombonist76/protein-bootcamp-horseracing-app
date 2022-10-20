export function getHorses(count = 8) {
  const horses = [];

  for (let i = 0; i < count; i++) {
    const horse = {
      id: i + 1,
      name: `Horse ${i + 1}`,
      location: 0,
      speed: 0,
      startedAt: null,
      finishedAt: null,
      time: null,
    };

    horses.push(horse);
  }
  return horses;
}

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function getRandomSpeed(min = 20, max = 40) {
  const diff = max - min;
  return Math.random() * diff + min;
}

export function speedMultiplier(
  speed,
  deviation = 0.2,
  minBetween = 20,
  maxBetween = 40
) {
  const negativeOrPositive = Math.random() < 0.5 ? 1 - deviation : 1 + deviation;
  const updatedSpeed = negativeOrPositive * speed;
  const setSpeedBetween = Math.min(Math.max(minBetween, updatedSpeed), maxBetween)
  return setSpeedBetween
}
