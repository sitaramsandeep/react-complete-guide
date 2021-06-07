import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
  const [showSection, setShowSection] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const cancelClicked = (show) => {
    setShowSection(show)
  }

  const startEditingHandler = () => {
    setShowSection(true)
  }

  return (
    <div className="new-expense">
      {!showSection ? 
      <button onClick={startEditingHandler} >Add New Expense</button>:
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={cancelClicked}/>}
    </div>
  );
};

export default NewExpense;
