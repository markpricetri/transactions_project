import React, { useState } from "react";

import TransactionItem from "./TransactionItem";
import NewTransaction from "./new_transaction/NewTransaction";
import YearFilter from "./YearFilter";
import Card from "../UI/Card";
import TransactionsChart, { refreshChart } from '../chart/TransactionsChart';
import "./Transactions.scss";
const data = require("../../transactionData");

const Transactions = (props) => {
  const [transactions, setTransactions] = useState(data.transactions);

  const [filter, setFilter] = useState(new Date().getFullYear())

  const addTransactionHandler = (transaction) => {
    setFilter(transaction.date.getFullYear());
    setTransactions((prevTransactions) => {
      return [transaction, ...prevTransactions];
    });
  };

  const applyFilter = (year) => {
    setFilter(year);
    refreshChart(filteredTransactions);
  };

  const filteredTransactions = transactions.filter((transaction) => new Date(transaction.date).getFullYear() === filter);

  return (
    <React.Fragment>
      <NewTransaction onAddTransaction={addTransactionHandler}/>
      <TransactionsChart transactions={filteredTransactions}/>
      <Card className="expenses">
        <YearFilter onYearFilter={applyFilter}/>
        {filteredTransactions.length === 0 && 
          <p className="list-fallback">
            No transactions to display...
          </p>}
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
