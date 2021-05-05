import React, {useState} from 'react';
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

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Add Transaction')
  
  const handleClick = () => {
    if (buttonText === 'Add Transaction') {
      setButtonText('Close')
    } else {
      setButtonText("Add Transaction");
    }
    setIsFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setButtonText("Add Transaction");
    setIsFormOpen(false)
  };

  return (
    <div className="new-expense">
      {isFormOpen && <TransactionForm onSaveTransactionData={saveTransactionDataHandler} closeForm={closeForm}/>}
      {!isFormOpen && <button onClick={handleClick}>{buttonText}</button>}
    </div>
  )
};

export default NewTransaction;