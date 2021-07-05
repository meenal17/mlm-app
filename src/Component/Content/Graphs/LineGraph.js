import {style} from "d3";
import React from "react";
import {Line} from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      //   backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#00b33c",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "purple",
    },
  ],
};

function LineGraph() {
  return (
    <div class="card">
      <div className=" mt-3 ml-3">
        <h4
          style={{
            color: "grey",
            fontSize: 16 + "px",
          }}
        >
          Total Joining's
        </h4>
      </div>
      <div class="card-body" style={{}}>
        <div style={styles.line}>
          <div className="App">
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  Line: {
    width: "70%",
    height: "70%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  relative: {
    position: "relative",
  },
};
export default LineGraph;
