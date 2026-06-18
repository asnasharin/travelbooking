import { getDaysBetween } from "./date.js";

export const calculateDays = (data) => {
  // HOTEL
  if (data.hotel?.checkIn && data.hotel?.checkOut) {
    return getDaysBetween(data.hotel.checkIn, data.hotel.checkOut);
  }

  // FLIGHT / TRAIN
  if (data.startDate && data.endDate) {
    return getDaysBetween(data.startDate, data.endDate);
  }

  return 2;
};