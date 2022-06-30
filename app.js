// toggle button
const element = document.getElementById("checkbox")
element.addEventListener("change", myFunction);

function myFunction() {
    document.body.classList.toggle("dark-mode")
}

// Different Graphs

// for myChart
var xyValues = [
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 80, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
    { x: 110, y: 10 },
    { x: 120, y: 11 },
    { x: 130, y: 14 },
    { x: 140, y: 14 },
    { x: 150, y: 15 }
];

const myChart = document.getElementById('myChart');
const scatterChart = new Chart(myChart, {
    type: "scatter",
    data: {
        datasets: [{
            label: 'Scatter Graph',
            pointRadius: 4,
            pointBackgroundColor: "blue",
            data: xyValues
        }]
    },

});

// for chart1

var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

const chart1 = document.getElementById('chart1').getContext('2d');
const lineChart = new Chart(chart1, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Line Graph',
            fill: true,
            lineTension: 0,
            backgroundColor: "red",
            borderColor: "red",
            data: yValues
        }]
    }

});

// for chart2

var xAxis = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("chart2", {
    type: "line",
    data: {
        labels: xAxis,
        datasets: [{
            label: 'Red',
            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false,
        }, {
            label: 'Green',
            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false

        }, {
            label: 'Blue',
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
});

// for chart3


const labels = [
    'India',
    'United States',
    'Indonesia',
    'Pakistan',
    'Brazil',
    'Nigeria',
    'Bangladesh',
    'Russia',
    'Mexico',
    'Spain'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Countries',
        data: [
            987564,
            458964,
            321548,
            754123,
            598743,
            854632,
            452186,
            578961,
            425896,
            214593
        ],
        backgroundColor: [
            'rgb(193, 0, 0, 0.5)',
            'rgb(170, 191, 0, 0.5)',
            'rgb(170, 191, 219, 0.5)',
            'rgb(32, 255, 139, 0.5)',
            'rgb(255, 0, 0, 0.5)',
            'rgb(0, 0, 255, 0.5)',
            'rgb(60, 179, 113, 0.5)',
            'rgb(238, 130, 238, 0.5)',
            'rgb(255, 165, 0, 0.5)',
            'rgb(106, 90, 205, 0.5)'
        ],
        borderWidth: '1',
        borderColor: 'grey',
        hoverBorderWidth: '2',
        hoverBorderColor: 'black'
    }]
};
// for chart3
const config = {
    type: 'bar',
    data: data,
    option: {}
};

const chart3 = document.getElementById('chart3').getContext('2d');
const barChart = new Chart(chart3,
    config
);


// for chart4
const config1 = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y'
    }
};

const chart4 = document.getElementById('chart4').getContext('2d');
const horizontalChart = new Chart(chart4,
    config1
);

// for chart5 Horizontal Bar

const config2 = {
    type: 'pie',
    data: data,
    options: {}
};

const chart5 = document.getElementById('chart5').getContext('2d');
const pieChart = new Chart(chart5,
    config2
);
