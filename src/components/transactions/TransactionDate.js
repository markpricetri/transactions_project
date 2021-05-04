import React from "react"
import "./TransactionDate.scss";


const TransactionDate = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[(parseInt(props.date.slice(5, 7)) - 1)];
  const day = props.date.slice(8, 11);
  const year = props.date.slice(0, 4);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default TransactionDate;