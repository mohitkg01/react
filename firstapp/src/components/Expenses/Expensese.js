import React from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses=(props)=>{
    const it=props.expense;
    console.log(it[0])

    return(
<Card className="exp">
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