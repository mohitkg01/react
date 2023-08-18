import React from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangedHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
    const it=props.expense;
    console.log(it[0])

    return(
<Card className="exp">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
{
it.map((item)=>{return (

<ExpenseItem 
 id={item.id}
  title={item.expen} 
  amount={item.amount} 
  date={item.date} 
  loc={item.loc}/>)})}
  
  </Card>
    )
}
export default Expenses;