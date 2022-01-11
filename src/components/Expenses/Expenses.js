import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../Filters/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState(new Date().getFullYear());

  function onFilterChange(filter) {
    console.log(filter);
    setFilterDate(filter);
  }

  // filter the expenses based on the selected year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter default={filterDate} onFilterChange={onFilterChange} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
