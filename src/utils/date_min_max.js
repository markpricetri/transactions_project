const date = new Date();
const threeMonthsFromNow = date.setMonth(date.getMonth() + 3);
const threeMonthsAgo = date.setMonth(date.getMonth() - 3);

export { threeMonthsAgo, threeMonthsFromNow };
