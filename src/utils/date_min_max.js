const date = new Date();
const threeMonths = 7889238000;
const threeMonthsFromNow = date.getTime() + threeMonths;

const threeMonthsAgo = date.getTime() - threeMonths;

export { threeMonthsAgo, threeMonthsFromNow };
