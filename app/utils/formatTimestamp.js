// Function for converting timestamp to a HH:MM format
export const formatTimestamp = (timestamp) => {
  // Create a new Date object with the timestamp in milliseconds
  const date = new Date(timestamp * 1000);

  // Get hours and minutes from the Date object
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Concatenate hours and minutes with a colon separator
  return `${hours}:${minutes}`;
};
