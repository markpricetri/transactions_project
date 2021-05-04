import React, { useState } from "react";

import TransactionItem from "./TransactionItem";
import NewTransaction from "./new_transaction/NewTransaction";
import YearFilter from "./YearFilter";
import Card from "../UI/Card";
import "./Transactions.scss";
import getYear from "../../utils/get_year"

const data = require("../../transactionData");

const Transactions = () => {
  const [transactions, setTransactions] = useState(data.transactions);

  const [filter, setFilter] = useState(2021)

  const applyFilter = (year) => {
    setFilter(year);
  };

  const filteredTransactions = transactions.filter((transaction) => getYear(transaction.date) == filter);

  const resetTransactions = () => {
    console.log(data.transactions)
    setTransactions((prevState) => {
      return [...prevState, data.transactions]
    });
  };

  const addTransactionHandler = (transaction) => {
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  };

  return (
    <React.Fragment>
      <NewTransaction onAddTransaction={addTransactionHandler} />
      <Card className="expenses">
        <YearFilter onYearFilter={applyFilter} reset={resetTransactions}/>
        {filteredTransactions.map((transaction) => {
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
