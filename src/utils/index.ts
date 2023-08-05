export const extractDatesFromContent = (content: string) => {
  const dateRegex = /(\d{1,2}[./-]\d{1,2}[./-]\d{2,4})/g;
  const dates = content.match(dateRegex);

  if (dates && dates.length > 0) {
    return dates.join(", ");
  }
};

export function formatDate(dateString: string) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
