import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'

const ExpenseItems=(props)=>{
    const clickHandler=()=>{
        console.log('clickedd!!!');
    }
    const DeleteHandler=()=>{
        console.log("Deleted")
    }
    
    return (
   <Card className="expense-item">
    <ExpenseDate date={props.date}/>
    <ExpenseDetails amount={props.amount} 
    loc={props.loc} title={props.title}/>
    <button onClick={clickHandler}>Change Title</button>
    <button onClick={DeleteHandler}>Delete</button>
    </Card>
    );
}
export  default ExpenseItems;