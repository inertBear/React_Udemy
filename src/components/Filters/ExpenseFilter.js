import "./ExpenseFilter.css";

// listener for changes on dropdown
// get event, forward the selected year to the expenses component
const ExpenseFilter = (props) => {
  // listen for changes to the filter
  function onFilterChange(event) {
    // lift state to parent component
    props.onFilterChange(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.default} onChange={onFilterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
