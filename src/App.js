import React, { useState } from "react"; //unneeded, because it is used under the hood. If we did not use the JSX, this would be required

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

  const INITIAL_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

// this is what is displayed when the browser. it is transformed before delivering it to the browser is launched to test the code using 'npm start'
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // callback for NewExpense to add a new expense entered by the user
  function onAddExpense(expense) {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // TODO: trigger the filter to refresh, in case the new expense was added for the year that is currently being filtered

  };

  // the expenses are passed to the next Component(Expenses) via 'props'
  return (
    <div>
      <NewExpense onAddedExpense={onAddExpense}/>
      <Expenses items={expenses} />
    </div>
  );

  //without JSX syntax, the code would look like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
}

// export the App, so it can be imported in index.js
export default App;
