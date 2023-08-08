import React from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses=(props)=>{
    const it=props.expense;
    return(
<Card className="exp">
{
it.map((item)=>{return (<ExpenseItem title={item.expen} amount={item.amount} date={item.date} loc={item.loc}/>)})}
  
  </Card>
    )
}
export default Expenses;