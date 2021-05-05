import React, { useState } from 'react';

import { threeMonthsAgo, threeMonthsFromNow } from "../../../utils/date_min_max"
import "./TransactionForm.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const TransactionForm = (props) => {
  const [newTransaction, setnewTransaction] = useState({
    newTitle: "",
    newAmount: "",
    newDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTransaction.newDate);
    console.log(newTransaction.newAmount);
    console.log(newTransaction.newTitle);
    props.onSaveTransactionData(newTransaction);
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
      console.log(e.target.value)
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
        <button id="exit-button" onClick={props.closeForm}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
