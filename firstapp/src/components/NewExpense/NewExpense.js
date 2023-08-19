import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {
  const[expandtoEnter,setExpandtoEnter]=useState(false);
  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setExpandtoEnter(false);
  };

  const showInputHandler=()=>{
    setExpandtoEnter(true);
  }
  const onCancelInputHandler=()=>{
    setExpandtoEnter(false);
  }

  return (
    <div className='new-expense'>
        { !expandtoEnter&&<button onClick={showInputHandler}>Add New Expense</button>}
        {expandtoEnter&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelInputHandler}/>}
    </div>
  );
}

export default NewExpense