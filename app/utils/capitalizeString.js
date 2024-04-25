export const capitalizeString = (lowercaseString) =>
  lowercaseString.replace(/\b\w/g, (c) => c.toUpperCase());
