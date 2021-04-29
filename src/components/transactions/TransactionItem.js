import React from "react";

import TransactionDate from "./TransactionDate";
import Card from "../UI/Card";
import "./TransactionItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const handleClick = (e) => {
  console.log(e.currentTarget);
};

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <TransactionDate date={props.date} />
      <div className="expense-item__description">
          <button onClick={(e) => handleClick(e)} className="btn">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
