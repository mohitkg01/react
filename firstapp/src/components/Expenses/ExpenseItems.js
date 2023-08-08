import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItems=(props)=>{
    
    return (
   <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount} 
    loc={props.loc} title={props.title}/>
    </Card>
    );
}
export  default ExpenseItems;