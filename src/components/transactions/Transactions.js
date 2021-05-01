import React from "react";

import TransactionItem from "./TransactionItem"
import Card from "../UI/Card"
import "./Transactions.scss"

const data = require("../../transactionData");

const Transactions = () => {
  return (
    <React.Fragment>
      <Card className="expenses">
        {data.transactions.map((transaction) => {
          return (
            <TransactionItem 
              key={transaction.id}
              className="expense-item"
              title={transaction.title}
              amount={transaction.amount.toFixed(2)}
              date={transaction.date}
            />
          );
        })}
      </Card>
    </React.Fragment>
  );
}

export default Transactions;
