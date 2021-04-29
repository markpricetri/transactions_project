import React from "react";

import TransactionItem from "./TransactionItem"
import Card from "../UI/Card"
import "./Transactions.css"

const data = require("../../transactionData");

const Transactions = () => {
  return (
    <React.Fragment>
      <Card className="expenses">
        {data.transactions.map((transaction) => {
          return (
            <TransactionItem
              className="expense-item"
              title={transaction.title}
              amount={transaction.amount}
              date={transaction.date}
            />
          );
        })}
      </Card>
    </React.Fragment>
  );
}

export default Transactions;
