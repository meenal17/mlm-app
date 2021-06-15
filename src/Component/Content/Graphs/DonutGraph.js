import React from "react";
import {Doughnut} from "react-chartjs-2";

const state = {
  labels: ["January", "February"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#8600b3", "#ff8c1a"],
      hoverBackgroundColor: ["#8600b3", "#ff8c1a"],
      data: [65, 2],
    },
  ],
};
const DonutGraph = () => {
  return (
    <Doughnut
      data={state}
      options={{
        title: {
          display: true,
        },
        legend: {
          display: true,
          position: "fixed",
        },
      }}
    />
  );
};

export default DonutGraph;
