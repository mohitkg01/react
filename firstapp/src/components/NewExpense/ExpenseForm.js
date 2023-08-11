import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredtitle,setenteredTitle]=useState('');
  const [amountEntered,setAmount]=useState('');
  const [enterdDate,setDate]=useState('');

  const titleHandler=(event)=>{
    setenteredTitle(event.target.value);
    
  };
  const amountHandler=(event)=>{
    setAmount(event.target.value);
  }
  const dateHandler=(event)=>{
    setDate(event.target.value);
  }
  return (
        <form>
          <div className="new-expense-controls">
            <div className="new-expense-control">
            <label>Expense Title</label>
            <input type="text" onChange={titleHandler}/>
            <label>Expense Amount</label>
            <input type="number"  onChange={amountHandler} required/>
            <label>Expense Date</label>
            <input type="date"  onChange={dateHandler} required/>
            </div>  
          </div>
          <div className="new-expense-action">
          <button type='submit'>Submit</button>
          </div>
        </form>
  )
}

export default ExpenseForm