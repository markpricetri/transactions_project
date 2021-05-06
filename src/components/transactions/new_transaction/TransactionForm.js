import React, { useState } from "react";
import "./TransactionForm.scss";
import Button from '../../UI/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TransactionForm = (props) => {
  const [newTransaction, setNewTransaction] = useState({
    id: 0,
    title: "eg. Petrol",
    amount: "40.00",
    date: new Date().toISOString().slice(0, 10),
  });

  let defaultValidity = {
    title: true,
    amount: true,
    date: true,
  };

  const [isValid, setIsValid] = useState(defaultValidity);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let [key] of Object.entries(defaultValidity)) {
      if (!newTransaction[`${key}`]) {
        defaultValidity[key] = false;
      }
    }
    setIsValid(defaultValidity);
    if (Object.values(defaultValidity).includes(false)) {
      return;
    } else {
      setNewTransaction(() => {
        return {
          id: new Date().getTime(),
          title: newTransaction.title,
          amount: parseInt(newTransaction.amount),
          date: newTransaction.date,
        };
      });
      props.onSaveTransactionData(newTransaction);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setNewTransaction((prevState) => {
        return {
          ...prevState,
          title: e.target.value,
        };
      });
    } else if (e.target.name === "amount") {
      setNewTransaction((prevState) => {
        return {
          ...prevState,
          amount: e.target.value,
        };
      });
    } else {
      console.log(e.target.value);
      setNewTransaction((prevState) => {
        return {
          ...prevState,
          date: e.target.value,
        };
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
              className={`${!isValid.title ? "invalid" : ""}`}
              type="text"
              name="title"
              value={newTransaction.title}
              onChange={handleChange}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              className={`${!isValid.amount ? "invalid" : ""}`}
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
              className={`${!isValid.date ? "invalid" : ""}`}
              type="date"
              name="date"
              value={newTransaction.date}
              onChange={handleChange}
            />
          </div>
          <Button type="sumbit" onClick={handleSubmit} inForm={true}>
            Add Transaction
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TransactionForm;
