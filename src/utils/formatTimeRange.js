export const formatTimeRange = (departure, duration) => {
   const departureDate = new Date(departure);

   const durationInMilliseconds = duration * 60 * 1000;
   const arrivalDate = new Date(departureDate.getTime() + durationInMilliseconds);

   const departureHours = departureDate.getUTCHours().toString().padStart(2, '0');
   const departureMinutes = departureDate.getUTCMinutes().toString().padStart(2, '0');

   const arrivalHours = arrivalDate.getUTCHours().toString().padStart(2, '0');
   const arrivalMinutes = arrivalDate.getUTCMinutes().toString().padStart(2, '0');

   return `${departureHours}:${departureMinutes} - ${arrivalHours}:${arrivalMinutes}`;
}
