import Expenses from './components/Expenses/Expensese';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const App = ()=> {
  const [expenseData,setExpenseData]= useState([{
    id:1,
    expen:'Buy food',
    amount:1000,
    date:new Date(2023,1,2),
    loc:'patna'
  },{
    id:2,
    expen:'Fruits',
    amount:5000,
    date:new Date(2022,1,2),
    loc:'varansi'
  },{
    id:3,
    expen:'Clothes',
    amount:1000,
    date:new Date(2021,11,5),
    loc:'bihar'
  },{
    id:4,
    expen:'Travel',
    amount:10000,
    date:new Date(2023,10,2),
    loc:'Gorkhpur'
  },
]);
const addExpenseHandler=expense=>{
  setExpenseData((prevExpenseData)=>[...prevExpenseData,expense])
};

  return (
  <div>
    <h2>Expense Tracker</h2>
    <NewExpense onAddExpense={addExpenseHandler}/>
  <Expenses expense={expenseData}/>
  
  </div>
 
  );
}

export default App;
