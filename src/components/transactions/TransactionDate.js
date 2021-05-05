import React from "react"
import "./TransactionDate.scss";


const TransactionDate = (props) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[new Date(props.date).getMonth()];
  const day = new Date(props.date).getDate();
  const year = new Date(props.date).getFullYear()

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default TransactionDate;