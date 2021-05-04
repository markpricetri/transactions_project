// takes a ISO date string ("YYYY-MM-DD") returns just the year
const getYear = (date) => {
  const year_string = new Date(date).toISOString().slice(0, 4);
  return parseInt(year_string);
};

export default getYear;