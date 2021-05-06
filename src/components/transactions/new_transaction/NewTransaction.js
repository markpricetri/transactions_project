import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import Button from '../../UI/Button'
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
      {isFormOpen && <TransactionForm 
        onSaveTransactionData={saveTransactionDataHandler} 
        closeForm={closeForm} 
        error={props.error}
      />}
      {!isFormOpen && <Button onClick={handleClick}>Add Transaction</Button>}
    </div>
  )
};

export default NewTransaction;