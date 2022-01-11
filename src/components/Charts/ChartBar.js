import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%"; // stored as a string so it can be injected into the css "style" tag

  // determine height of fill for this chart bar
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
