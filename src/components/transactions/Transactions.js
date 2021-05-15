import React, { useState } from "react";

import TransactionItem from "./TransactionItem";
import NewTransaction from "./new_transaction/NewTransaction";
import YearFilter from "./YearFilter";
import Card from "../UI/Card";
import Total from "./Total";
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
  
  const calculateTotal = () => {
    const total = filteredTransactions.reduce(function(prev, cur) {
      return prev + cur.amount;
    }, 0);
    return total.toFixed(2).toString();
  };
  

  return (
    <React.Fragment>
      <NewTransaction onAddTransaction={addTransactionHandler} error={props.error}/>
      <TransactionsChart transactions={filteredTransactions}/>
      <Card className="expenses">
        <YearFilter onYearFilter={applyFilter}/>
        <Total amount={calculateTotal()} />
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
