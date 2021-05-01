import React from 'react'
import NewTransaction from './components/transactions/new_transaction/NewTransaction';
import Transactions from "./components/transactions/Transactions";

function App() {
  const addTransactionHandler = (transaction) => {
    console.log(transaction);
  }
  
  return (
    <React.Fragment>
      <NewTransaction onAddTransaction={addTransactionHandler}/>
      <Transactions />
    </React.Fragment>
  );

}

export default App;
