import React, { useState } from 'react';

import { threeMonthsAgo, threeMonthsFromNow } from "../../../utils/date_min_max"
import "./TransactionForm.scss"


const TransactionForm = (props) => {
  const [newTransaction, setnewTransaction] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    if (newTransaction.newDate > threeMonthsAgo && newTransaction.newDate < threeMonthsFromNow) {
      props.onSaveTransactionData(newTransaction);
    } else {
      console.log("Error: date cannot be more than 3 months from today's date.")
    }
  };
  
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setnewTransaction((prevState) => {
        return {
        ...prevState,
        newTitle: e.target.value
        }
      });
    } else if (e.target.name === "amount") {
      setnewTransaction((prevState) => {
        return {
        ...prevState,
        newAmount: e.target.value,
        }
      });
    } else {
      setnewTransaction((prevState) => {
        return {
        ...prevState,
        newDate: e.target.value,
        }
      });
    }
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              value={newTransaction.newTitle}
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              value={newTransaction.newAmount}
              min="0.01"
              step="0.01"
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Date</label>
            <input
              type="date"
              name="date"
              value={newTransaction.newDate}
              min={threeMonthsAgo}
              max={threeMonthsFromNow}
              onChange={handleChange}
            />
          </div>
          <button className="new-expense__actions" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TransactionForm;
