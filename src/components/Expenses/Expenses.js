import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {

  const [filterYear, setFilterYear] = useState('2021')

  const filteredYearChangeHandler = (changedYear) => {
    setFilterYear(changedYear);
    console.log(changedYear);
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter selection={filterYear} onFilteredYearChange={filteredYearChangeHandler} />
      {props.item.map(item => {
        return <ExpenseItem 
        key={item.id} 
        title={item.title}
        amount={item.amount}
        date={item.date}/>
      })}
    </Card>
  );
};

export default Expenses;
