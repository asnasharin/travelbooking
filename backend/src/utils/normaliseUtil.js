export const normalizeData = (data) => {
  return {
    type: data.type || "unknown",
    source: data.source || "",
    destination: data.destination || "",

    startDate: data.startDate || null,
    endDate: data.endDate || null,

    hotel: data.hotel || null,
  };
};