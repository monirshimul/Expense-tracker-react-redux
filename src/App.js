import React from 'react';
import Header from './IncomeExpense/components/Header'
import { Balance } from './IncomeExpense/components/Balance'
import { IncomeExpences } from './IncomeExpense/components/IncomeExpences'
import { TransactionList } from './IncomeExpense/components/TransactionList'
import { AddTransaction } from './IncomeExpense/components/AddTransaction';




const state = {
  title: "Expense Tracker"
}

function App() {


  return (
    <div className="container">
      <Header title={state.title} />
      <Balance />
      <IncomeExpences />
      <TransactionList />
      <AddTransaction />


    </div>

  );
}

export default App;
