import React, {useState} from 'react';
import './YearFilter.scss';

const YearFilter = (props) => {
  const handleSubmit = (e) => {
    console.log(e.target);
    
  };

  const handleChange = (e) => {
    props.onYearFilter(e.target.value);
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