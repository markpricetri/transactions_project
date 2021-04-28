import React from "react";

import TransactionDate from "./TransactionDate";
import Card from "../UI/Card";
import "./TransactionItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <TransactionDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
