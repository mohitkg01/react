import './ExpenseItem.css'
function ExpenseItems(props){
    return (
   <div className="expense-item">
    <div>{props.date.toString()}</div>
    <div className="expense-desc">
        <h2>{props.title}</h2>
        <div className="expense-price">{props.amount}</div>
        <div className="expense-loc">{props.loc}</div>
    </div>
   </div>
   
    )
}
export  default ExpenseItems;