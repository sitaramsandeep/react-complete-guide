import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {
  const yearsArray = [
    {id:1, value:"2022"},
    {id:2, value:"2021"},
    {id:3, value:"2020"},
    {id:4, value:"2019"}
  ]
  const yearChangeHandler = (event) => {
    props.onFilteredYearChange(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter_control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={props.selection}>
          {yearsArray.map(year => {
            return <option key={year.id} value={year.value}>{year.value}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;