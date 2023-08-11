import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredtitle,setenteredTitle]=useState('');
  const [amountEntered,setAmount]=useState('');
  const [enteredDate,setDate]=useState('');
  // const [userInput,setUserInput]=useState({
  //   enteredtitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const titleHandler=(event)=>{
     setenteredTitle(event.target.value); //best aporach other than two
    // setUserInput({
    //   ...userInput,
    //   enteredtitle:event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredtitle:event.target.value};
    //})
    
  };
  const amountHandler=(event)=>{
     setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    // })
  }
  const dateHandler=(event)=>{
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:event.target.value,
    // })
   
  };
  const submitHandler=(event)=>{
    event.preventDefault(); 

    const expenseData={
      title:enteredtitle,
      amount:amountEntered,
      date:new Date(enteredDate)
    };
    console.log(expenseData);
  };
  return (
        <form onSubmit={submitHandler}>
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