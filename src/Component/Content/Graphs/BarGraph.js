import React from "react";
import {Bar} from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#248f8f",
        "#33cccc",
        "#248f8f",
        "#33cccc",
        "#248f8f",
        "#33cccc",
      ],
      borderColor: [
        "#248f8f",
        "#33cccc",
        "#248f8f",
        "#33cccc",
        "#248f8f",
        "#33cccc",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarGraph = () => (
  <Bar
    data={data}
    options={options}
    // style={{height: 274 + "px", padding: 20 + "px"}}
  />
);

export default BarGraph;
