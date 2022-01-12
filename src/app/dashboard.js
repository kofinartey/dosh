const lineChart = document.getElementById("lineChart").getContext("2d");
const pieChart = document.getElementById("pieChart").getContext("2d");

const config = {
  type: "line",
  data: {},
  options: {},
  plugins: [],
};

const myChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 30, 24, 50, 15],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const myChart2 = new Chart(pieChart, {
  type: "doughnut",
  data: {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 30, 24, 50, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],

        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
