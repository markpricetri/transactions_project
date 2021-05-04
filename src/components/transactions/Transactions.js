import React, { useState } from "react";

import TransactionItem from "./TransactionItem"
import NewTransaction from "./new_transaction/NewTransaction";
import Card from "../UI/Card"
import "./Transactions.scss"

const data = require("../../transactionData");

const Transactions = () => {
  const [transactions, setTransactions] = useState(data.transactions);

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  };
  

  return (
    <React.Fragment>
      <NewTransaction onAddTransaction={addTransactionHandler} />
      <Card className="expenses">
        {transactions.map((transaction) => {
          return (
            <TransactionItem
              key={transaction.id}
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
