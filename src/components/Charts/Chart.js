import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // get array of values
  const totalMax = Math.max(...dataPointValues); // find highest value in the current values

  // the chart will have a bar for each value in the datapoints array (12 - one for each month)
  // the 'props' for each datapoint will be provided to each individual instance of ChartBar
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
