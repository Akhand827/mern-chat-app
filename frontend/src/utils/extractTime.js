export function extractTime(dateString) {
  if (!dateString) return ""; // prevent Invalid Date

  const date = new Date(dateString);
  if (isNaN(date)) return ""; // prevent Invalid Date

  return date
    .toLocaleTimeString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase(); // "1:38 pm"
}
