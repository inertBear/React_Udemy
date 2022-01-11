import ExpenseDate from "./ExpenseDate"; // import another component for use in this component
import Card from "../UI/Card";
import "./ExpenseItem.css"; // import cooresponding css file for the html element we want to return for 'ExpenseItem'

//NOTE: A comonent in React is just a Javascript Function
//NOTE: 'props' is a collection included when creating this component
function ExpenseItem(props) {
  //NOTE: return the HTML code which displays the component
  //NOTE: must only have 1 root element per return statement
  //NOTE: to apply .css, use 'className' instead of 'class'

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;