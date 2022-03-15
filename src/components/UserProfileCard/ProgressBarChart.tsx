import React from "react";
import "./ProgressBarChart.css";
const ProgressBarChart = () => {
  function bar() {
    return Math.floor(Math.random() * 5000);
  }
  const process: number = bar();
  return (
    <React.Fragment>
      <label className="cardUserPlanUsage">Plan Uses</label>

      <progress
        value={Math.round((process / 5000) * 100)}
        max="100"
        className="bar_style"
      />
      <div className="division">
        <div className="child">
          <div className="status">{process}</div>
          <div className="font_size">Clicks Reviewed</div>
        </div>
        <div className="child">
          <div className="status">5000</div>
          <div className="font_size">Monthly Clicks</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProgressBarChart;
