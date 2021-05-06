import React, { useState } from 'react';

import { threeMonthsAgo, threeMonthsFromNow } from "../../../utils/date_min_max"
import "./TransactionForm.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const TransactionForm = (props) => {
  const [newTransaction, setNewTransaction] = useState({
    id: 0,
    title: "eg. Petrol",
    amount: "40.00",
    date: new Date().toISOString().slice(0, 10),
  });

  const [isValid, setIsVald] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTransaction.title || !newTransaction.amount || !newTransaction.date) {
      setIsValid(false)
      return;
    }
    setNewTransaction((prevState) => {
      return {
        id: new Date().getTime(),
        title: newTransaction.title,
        amount: parseInt(newTransaction.amount),
        date: newTransaction.date,
      };
    })
    props.onSaveTransactionData(newTransaction);
  };
  
  const handleChange = (e) => {
    if (e.target.name === "title") {
      setNewTransaction((prevState) => {
        return {
        ...prevState,
        title: e.target.value
        }
      });
    } else if (e.target.name === "amount") {
      setNewTransaction((prevState) => {
        return {
        ...prevState,
        amount: e.target.value,
        }
      });
    } else {
      console.log(e.target.value)
      setNewTransaction((prevState) => {
        return {
        ...prevState,
        date: e.target.value,
        }
      });
    }
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <button id="exit-button" onClick={props.closeForm}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              name="title"
              value={newTransaction.title}
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              value={newTransaction.amount}
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
              value={newTransaction.date}
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
