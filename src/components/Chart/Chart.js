import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => {return dataPoint.value})
  const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => {
        return <ChartBar 
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label} />
      })}
    </div>
  )
}

export default Chart;