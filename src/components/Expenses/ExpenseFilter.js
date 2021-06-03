import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onFilteredYearChange(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter_control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;