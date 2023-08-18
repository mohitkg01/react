import React from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses=(props)=>{
  
    const [filteredYear,setFilteredYear]=useState('2023');

    const filterChangedHandler=((event)=>{
        setFilteredYear(event.target.value);
    });

    const filteredExpenses=props.expense.filter(exp=>exp.date.getFullYear().toString()===filteredYear);
    return(
        <div>
             <Card className="exp">
            <ExpensesFilter selected={filteredYear}
             onChangeFilter={filterChangedHandler}/>
{
    filteredExpenses.map((items)=>{return (
<ExpenseItem 
    key={items.id}
  title={items.expen} 
  amount={items.amount} 
  date={items.date} 
  loc={items.loc}/>)})}
  
  </Card>
</div>
       
    )
}
export default Expenses;