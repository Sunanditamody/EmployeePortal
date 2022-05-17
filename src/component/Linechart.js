import {Chart} from 'chart.js'
const speedCanvas = document.getElementById("speedChart");

Chart.defaults.font.family = "Teko";
Chart.defaults.font.size = 22;
Chart.defaults.color = "black";

let speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [0, 59, 75, 20, 20, 55, 40],
    tension: 0.4,
    cubicInterpolationMode: 'monotone',
    fill: false,
    borderColor: '#E64A19',
    backgroundColor: 'transparent',
    borderDash: [20, 10, 60, 10],
    pointBorderColor: '#E64A19',
    pointBackgroundColor: '#FFA726',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 4,
    pointStyle: 'rectRounded'
  }]
};

let lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData
});