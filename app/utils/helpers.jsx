// convert Fri Mar 15 2024 00:00:00 GMT+0500 (Pakistan Standard Time) to YYYY-MM-DD format
const convertDates = (dates) => {
  return dates?.map((dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  });
};

export { convertDates };
