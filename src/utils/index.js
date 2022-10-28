import {getSelectedHorse} from "@/service/local"

const getHorseNames = () => {
  const horseNames = [
    "Yadigar", "Ekselans", "Kehribar",  
    "Alaca", "Gelincik", "Rüzgar", "Gölge", "Karamel"
  ]
  return horseNames
}


export function getHorses() {
  const horses = [];
  const names = getHorseNames()
  const selectedHorse = getSelectedHorse()

  for (let i = 0; i < 8; i++) {
    const isSelected = selectedHorse?.id === i + 1
    const horse = {
      id: i + 1,
      name: names.at(i),
      location: 0,
      speed: 0,
      startedAt: null,
      finishedAt: null,
      isSelected: isSelected,
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
  minBetween = 30,
  maxBetween = 40
) {
  const max =  (1 + deviation) * speed 
  const min =  (1 - deviation) * speed
  const updatedSpeed = getRandomSpeed(min, max);
  const setSpeedBetween = Math.min(Math.max(minBetween, updatedSpeed), maxBetween)
  return setSpeedBetween
}
