import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItems=(props)=>{
   const [amount,setTitle]= useState(props.amount);

    const clickHandler=()=>{
        
        console.log("clicked");
    }
    const DeleteHandler=()=>{
        console.log("Deleted")
    }
    const expenseUpdate=()=>{
        setTitle("$100");
    }
    return (
   <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={amount} 
    loc={props.loc} title={props.title}/>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={DeleteHandler}>Delete</button>
    <button onClick={expenseUpdate}> Expense</button>
    </Card>
    );
}
export  default ExpenseItems;