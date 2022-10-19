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

    horses.push(horse)
  }
  return horses
}