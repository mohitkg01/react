import './ExpenseItem.css'
function ExpenseItems(){
    const expenseDate=new Date();
    const expenseTitle="Buy Some Food";
    const expenseAmount=250;
    const expenseLocation="Patna";
    
    return (
   <div className="expense-item">
    <div>{expenseDate.toString()}</div>
    <div className="expense-desc">
        <h2>{expenseTitle}</h2>
        <div className="expense-price">{expenseAmount}</div>
        <div className="expense-loc">{expenseLocation}</div>
    </div>
   </div>
   
    )
}
export  default ExpenseItems;