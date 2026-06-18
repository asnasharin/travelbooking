export const getDaysBetween = (checkIn, checkOut) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const diff = end - start;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return days > 0 ? days : 1;
};