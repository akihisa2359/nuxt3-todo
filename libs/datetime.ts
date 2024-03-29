export const formatDate = (date: Date, format: string): string => {
  return format
    .replace(/yyyy/g, date.getFullYear())
    .replace(/MM/g, `0${date.getMonth() + 1}`.slice(-2))
    .replace(/dd/g, `0${date.getDate()}`.slice(-2))
    .replace(/HH/g, `0${date.getHours()}`.slice(-2))
    .replace(/mm/g, `0${date.getMinutes()}`.slice(-2))
    .replace(/ss/g, `0${date.getSeconds()}`.slice(-2))
    .replace(/SSS/g, `0${date.getMilliseconds()}`.slice(-3));
};
