
function ExpenseDetails(props) {
    return(
    <div className="expense-desc">
        <h2>{props.title}</h2>
    <div className="expense-price">{props.amount}</div>
    <div className="expense-loc">{props.loc}</div>
    </div>)
}
export default ExpenseDetails;