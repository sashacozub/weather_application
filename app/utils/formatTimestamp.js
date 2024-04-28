// Function for converting timestamp to a HH:MM format
export const formatTimestamp = (timestamp, formatType) => {
  // Create a new Date object with the timestamp in milliseconds
  const date = new Date(timestamp * 1000);
  const currentDate = new Date();

  // Concatenate hours and minutes with a colon separator
  if (formatType === 'time') {
    // Get hours and minutes from the Date object
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  } else if (formatType === 'day') {
    // Get day of the week from the Date object
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = days[date.getDay()];

    // Check if timestamp corresponds to today
    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      return 'Today';
    } else {
      // Return day of the week
      return dayOfWeek;
    }
  }
};
