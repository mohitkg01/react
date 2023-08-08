import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'
function ExpenseItems(props){
    
    return (
   <div className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount} 
    loc={props.loc} title={props.title}/>
    </div>
    );
}
export  default ExpenseItems;