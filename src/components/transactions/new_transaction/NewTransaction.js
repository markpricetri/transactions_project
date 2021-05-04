import React from 'react';
import TransactionForm from './TransactionForm';
import './NewTransaction.scss'

const NewTransaction = (props) => {
  const saveTransactionDataHandler = (newTransactionData) => {
    const transactionData = {
      date: newTransactionData.newDate,
      amount: newTransactionData.newAmount,
      title: newTransactionData.newTitle,
      id: new Date().getTime().toString()
    }
    props.onAddTransaction(transactionData);
  };

  return (
    <div className="new-expense">
      <TransactionForm onSaveTransactionData={saveTransactionDataHandler}/>
    </div>
  )
};

export default NewTransaction;