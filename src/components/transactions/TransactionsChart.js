import React from 'react';
import Chart from '../chart/Chart';

const TransactionsChart = (props) => {
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

  for (const transaction of props.transactions) {
    const transactionMonth = transaction.date.getMonth();
    chartDataPoints[transactionMonth].value += transaction.amount;
  };

  return (
    <React.Fragment>
        <Chart dataPoints={chartDataPoints} />
    </React.Fragment>
  );
}

export default TransactionsChart;