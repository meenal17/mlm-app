import React from "react";
import {Doughnut} from "react-chartjs-2";
import "./style.css";
const options = {
  legend: {
    display: false,
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function (chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>,
      ];
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c"],
  datasets: [
    {
      data: [3, 50, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverBackgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};

const pieData = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["usa", "europe", "africa"],
  datasets: [
    {
      data: [3, 50, 40],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverBackgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};

const DonutGraph = () => {
  return (
    <div class="card">
      <h4
        style={{
          color: "grey",
          fontSize: 16 + "px",
          padding: 15,
        }}
      >
        Payout Overview
      </h4>
      <div class="card-body" style={{paddingBottom: "280px"}}>
        <div style={styles.Doughnut}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  Doughnut: {
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

export default DonutGraph;
