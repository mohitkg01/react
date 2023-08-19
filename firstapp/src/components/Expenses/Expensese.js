import React from 'react';
import ExpenseItem from './ExpenseItems'
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=>{
  
    const [filteredYear,setFilteredYear]=useState('2023');

    const filterChangedHandler=((event)=>{
        setFilteredYear(event.target.value);
    });

    const filteredExpenses=props.expense.filter(exp=>exp.date.getFullYear().toString()===filteredYear);
  
    let expenseContent =<p> No expense found</p>;
    let lengthExpense=<p>{filteredExpenses.length} Expense is there</p>
    if(filteredExpenses.length>0){
        expenseContent=filteredExpenses.map((items)=> (
            <ExpenseItem 
                key={items.id}
              title={items.expen} 
              amount={items.amount} 
              date={items.date}/>));
    }
   
    return(
        <div>
             <Card className="exp">
            <ExpensesFilter selected={filteredYear}
             onChangeFilter={filterChangedHandler}/>
             <ExpensesChart expenses={filteredExpenses}/>
              {lengthExpense}
             {/* {filteredExpenses.length=== 0 ? (<p>No expense found.</p>):(filteredExpenses.map((items)=> (
            <ExpenseItem 
                key={items.id}
              title={items.expen} 
              amount={items.amount} 
              date={items.date} 
              loc={items.loc}/>)
              )
          )
         } */ expenseContent}
  </Card>
</div>
       
    )
}
export default Expenses;