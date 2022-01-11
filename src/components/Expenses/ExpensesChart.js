import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
    // create an array for all our datapoints
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // update our array to the actual $ values for expenses in each month
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0, Jan is 0
    chartDataPoints[expenseMonth].value += expense.amount; // add up expense for each month
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
