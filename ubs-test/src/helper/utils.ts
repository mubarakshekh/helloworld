export const getDateFormat = (date: string) => {
  const convertedDate = new Date(date);
  const day = convertedDate.getDate();
  const month = convertedDate.getMonth() + 1;
  const year = convertedDate.getFullYear();
  return `${day}/${month}/${year}`;
};
