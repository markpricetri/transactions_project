import React from 'react';
import './YearFilter.scss';

const YearFilter = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(parseInt(e.target.value))
    props.onYearFilter(parseInt(e.target.value));
  };

  return (
    <React.Fragment>
      <div className="filter-div">
        <div className="filter-title">
          <h4>Filter</h4>
        </div>
        <form className="drop-down" onSubmit={handleSubmit}>
          <select type="text" id="year" name="year" onChange={handleChange}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </form>
      </div>
    </React.Fragment>
  );
};

export default YearFilter;