import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filteredYearChangeHandler = (changedYear) => {
    setFilterYear(changedYear);
  }

  const filteredExpenseItem = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })


  
  return (
    <Card className="expenses">
      <ExpenseFilter selection={filterYear} onFilteredYearChange={filteredYearChangeHandler} />
      <ExpensesChart expenses={filteredExpenseItem} />
      <ExpensesList items={filteredExpenseItem}/>
    </Card>
  );
};

export default Expenses;
