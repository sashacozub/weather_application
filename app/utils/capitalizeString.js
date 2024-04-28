// Function for capitalizing each word in a string
export const capitalizeString = (lowercaseString) =>
  lowercaseString.replace(/\b\w/g, (c) => c.toUpperCase());
