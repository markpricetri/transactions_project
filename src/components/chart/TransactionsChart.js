import React from 'react';
import Chart from './Chart';

const chartDataPoints = [
  { label: 'Jan', value: 0 },
  { label: 'Feb', value: 0 },
  { label: 'Mar', value: 0 },
  { label: 'Apr', value: 0 },
  { label: 'May', value: 0 },
  { label: 'Jun', value: 0 },
  { label: 'Jul', value: 0 },
  { label: 'Aug', value: 0 },
  { label: 'Sep', value: 0 },
  { label: 'Oct', value: 0 },
  { label: 'Nov', value: 0 },
  { label: 'Dec', value: 0 },
];

const refreshChart = (arrayOfTransactions) => {
  chartDataPoints.map((month) => month.value = 0);
  for (const transaction of arrayOfTransactions) {
    const transactionMonth = new Date(transaction.date).getMonth();
    chartDataPoints[transactionMonth].value += transaction.amount;
  };
  return chartDataPoints;
}

const TransactionsChart = (props) => {
  return <Chart dataPoints={refreshChart(props.transactions)} />;
};

export { refreshChart };
export default TransactionsChart;