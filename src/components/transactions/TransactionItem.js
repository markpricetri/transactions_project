import React, { useState } from "react";

import TransactionDate from "./TransactionDate";
import Card from "../UI/Card";
import "./TransactionItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = (props) => {
  const [transactionName, setTransactionName] = useState(props.title);

  const handleClick = () => {
   setisNewInputOpen(true);
  };
  
  const handleSubmit = () => {
    setisNewInputOpen(false);
  }

  const handleChange = (e) => {
    setTransactionName(e.target.value);
  };

  const [isNewInputOpen, setisNewInputOpen] = useState(false);

  return (
    <React.Fragment>
      <Card className="expense-item">
        <TransactionDate date={props.date} />
        <div className="expense-item__description">
          <h2>{transactionName}</h2>

          <div className="expense-title-change-form">
            {isNewInputOpen && (
              // SINGLE LINE FORM
              <React.Fragment>
                <form className="form newTitleForm" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label htmlFor="firstName">
                      Enter new transaction name:{" "}
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={transactionName}
                      onChange={(e) => handleChange(e)}
                    />
                    <button className="transaction-change-btn" onClick={handleSubmit}>Change</button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </div>

          <button
            onClick={handleClick}
            className="transaction-btn"
            value={props.title}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <div className="expense-item__price">£{parseFloat(props.amount).toFixed(2)}</div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default TransactionItem;
