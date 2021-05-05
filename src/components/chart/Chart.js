import React from 'react'
import ChartBar from './ChartBar'
import './Chart.scss'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <React.Fragment>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>
          );
        })}
      </div>
    </React.Fragment>
  )
}

export default Chart;