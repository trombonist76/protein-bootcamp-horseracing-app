export const getSelectedHorse = () => {
  const data = localStorage.getItem('selectedHorse');
  const selectedHorse = JSON.parse(data);
  return selectedHorse;
}

export const setSelectedHorse = (horse) => {
  const selectedHorse = JSON.stringify(horse)
  localStorage.setItem('selectedHorse', selectedHorse);
  return selectedHorse;
}

export const removeSelectedHorse = () => {
  localStorage.removeItem("selectedHorse");
}