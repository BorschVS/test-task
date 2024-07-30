export const formatFlightDuration = (departure, duration) => {
  const departureDate = new Date(departure);
  
  const durationInMilliseconds = duration * 60 * 1000;
  const arrivalDate = new Date(departureDate.getTime() + durationInMilliseconds);

  const timeDifference = arrivalDate.getTime() - departureDate.getTime();
  
  const totalMinutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  return `${hours}Ч ${minutes}М`;
}