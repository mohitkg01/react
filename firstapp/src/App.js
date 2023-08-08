import Expenses from './components/Expenses/Expensese';
import React from 'react';

const App = ()=> {
  const expenseData=[{
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
    date:new Date(2023,11,5),
    loc:'bihar'
  },{
    id:4,
    expen:'Travel',
    amount:10000,
    date:new Date(2023,10,2),
    loc:'Gorkhpur'
  },
];
  return (
  <div>
    <h2>Expense Tracker</h2>
  <Expenses expense={expenseData}/></div>
  );
}

export default App;
