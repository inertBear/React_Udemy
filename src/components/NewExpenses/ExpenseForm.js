import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // three seperate states
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   //NOTE: here is another way to do state. they are both correct
  //   // <-----------------------------------------------------------
  //   const [altUserInput, setAltUserInput] = useState({
  //     altTitle: "",
  //     altAmount: "",
  //     altDate: "",
  //   });

  //   function onAltTitleChanged(event) {
  //     // this ensures the other values in the state are not lost, BUT it creates a dependency on the previous state
  //     setAltUserInput({
  //       ...altUserInput,
  //       altTitle: event.target.value,
  //     });

  //     // this garuntees that the state with ALWAYS be current when updating
  //     setAltUserInput((prevState) => {
  //         return { ...prevState, altTitle: event.target.value};
  //     });
  //   }
  //   // <------------------------------------------------------------------

  // as the title is entered by the user, the title is stored in the 'state'
  function onTitleChanged(event) {
    setTitle(event.target.value);
  }

  // as the amount is entered by the user, the amount is stored in the 'state'
  function onAmountChanged(event) {
    setAmount(event.target.value);
  }

  // as the date is entered by the user, the date is stored in the 'state'
  function onDateChanged(event) {
    setDate(event.target.value);
  }

  // submit a new expense
  function onAddExpense(event) {
    // prevent page from refreshing (trying to access the server)
    event.preventDefault();

    // create an array to hold the values entered by the user
    const data = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    // send the data back 'up a level' to the NewExpense by calling the function that was included in the props
    props.onNewExpense(data);
    //reset values after the form is submitted
    setTitle("");
    setAmount("");
    setDate("");
  }

  //cancel the adding of a new expense
  function onCancelExpense() {
    props.onCancelExpense();
  }

  //NOTE: buttons of type "submit" causes the form it belongs to fire a "onSubmit".
  //we will capture that instead of the individual buttons event
  //Note: the values are cleared and reassign to the components via the "value={''}"
  return (
    <form onSubmit={onAddExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChanged} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={onAmountChanged}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={onDateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancelExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
