import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  // when a new expense is submitted by the user(onNewExpense)
  function onNewExpense(newExpense) {
    const expense = {
      ...newExpense,
      id: Math.random().toString(), //not perfect, but good enough
    };
    // pass the new expense up to the App.js, so it can be included in the list of items to display
    props.onAddedExpense(expense);
    setIsAdding(false);
  }

  // display the ExpenseForm
  function onAddingExpense() {
    setIsAdding(true);
  }

  // hide the ExpenseForm
  function onCancelExpense(){
    setIsAdding(false);
  }

  //Note: we are passing a function as a prop that can be used within "ExpenseForm" to deliver a value back up to NewExpense. Like a Callback
  return (
    <div className="new-expense">
      {!isAdding && <button onClick={onAddingExpense}>Add New Expense</button>}
      {isAdding && <ExpenseForm onNewExpense={onNewExpense} onCancelExpense={onCancelExpense}/>}
    </div>
  );
};

export default NewExpense;
