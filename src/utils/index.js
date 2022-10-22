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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function speedMultiplier(
  speed,
  deviation = 0.05,
  minBetween = 20,
  maxBetween = 40
) {
  const max =  (1 + deviation) * speed 
  const min =  (1 - deviation) * speed
  const updatedSpeed = getRandomSpeed(min, max);
  const setSpeedBetween = Math.min(Math.max(minBetween, updatedSpeed), maxBetween)
  return setSpeedBetween
}
