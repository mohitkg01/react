import React from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
  const ChangeHandler=(event)=>{
    console.log(event.target.value);
  }
  return (
        <form>
          <div className="new-expense-controls">
            <div className="new-expense-control">
            <label>Expense Title</label>
            <input type="text" onChange={ChangeHandler}/>
            <label>Expense Amount</label>
            <input type="number"  onChange={ChangeHandler} required/>
            <label>Expense Date</label>
            <input type="date"  required/>
            </div>  
          </div>
          <div className="new-expense-action">
          <button type='submit'>Submit</button>
          </div>
        </form>
  )
}

export default ExpenseForm