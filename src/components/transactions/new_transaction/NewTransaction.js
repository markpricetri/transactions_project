import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import './NewTransaction.scss'

const NewTransaction = (props) => {
  const saveTransactionDataHandler = (newTransactionData) => {
    const formattedDate = new Date(newTransactionData.date);
    const finalTransactionData = {...newTransactionData, date: formattedDate};
    console.log(finalTransactionData);
    props.onAddTransaction(finalTransactionData);
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setIsFormOpen(false)
  };

  return (
    <div className="new-expense">
      {isFormOpen && <TransactionForm onSaveTransactionData={saveTransactionDataHandler} closeForm={closeForm}/>}
      {!isFormOpen && <button onClick={handleClick}>Add Transaction</button>}
    </div>
  )
};

export default NewTransaction;