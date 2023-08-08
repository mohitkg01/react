import ExpenseItems from "./components/ExpenseItems";
function App() {
  const expense=[{
    id:1,
    expen:'Buy food',
    amount:1000,
    date:new Date(2023,1,2),
    loc:'patna'
  },{
    id:2,
    expen:'Fruits',
    amount:5000,
    date:new Date(2022,1,2),
    loc:'varansi'
  },{
    id:3,
    expen:'Clothes',
    amount:1000,
    date:new Date(2023,11,5),
    loc:'bihar'
  },{
    id:4,
    expen:'Travel',
    amount:10000,
    date:new Date(2023,10,2),
    loc:'Gorkhpur'
  },
];
  return (
  <>
  <h2>Expense Tracker</h2>
  {
    expense.map((item)=>(
    <ExpenseItems  key={item.id} title={item.expen} amount={item.amount} date={item.date} loc={item.loc}/>))
  }
  </>
  );
}

export default App;
