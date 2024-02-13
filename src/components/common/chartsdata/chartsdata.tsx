//CHART JS

import React from "react";
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, registerables } from "chart.js";
import { ApexOptions } from "apexcharts";
ChartJS.register(...registerables);


//**************************CHARTJS*********************************//

export const Linechart = {
    responsive: true,

};
// linechartdata
export const linechartdata = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets: [
        {
            label: "Data 1 ",
            data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
            borderColor: "#38cab3 ",
            borderWidth: 1,

            tension: 0.4,
        },
        {
            label: "Data 2 ",
            data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40, 80],
            borderColor: "#f74f75",
            borderWidth: 1,

            tension: 0.4,
        },
    ],

};

export const Areachart = {
    responsive: true,

};
//areachart
export const areachart: any = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            label: "Data 1 ",
            borderColor: "#f74f75",
            borderWidth: "1",
            pointHighlightStroke: "rgba(235, 111, 51 ,1)",
            data: [16, 32, 18, 26, 42, 33, 44],
            fill: true,
            tension: 0.4,
        },
        {
            label: "Data 2",
            borderColor: "#38cab3",
            borderWidth: "1",
            data: [22, 44, 67, 43, 76, 45, 12],
            fill: true,
            tension: 0.4,
        },
    ],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        scales: {
            x:
            {
                ticks: {
                    fontColor: "#77778e",
                },
                gridLines: {
                    color: "rgba(119, 119, 142, 0.2)",
                },
            },

            y:
            {
                ticks: {
                    beginAtZero: true,
                    fontColor: "#77778e",
                },
                gridLines: {
                    color: "rgba(119, 119, 142, 0.2)",
                },
            },

        },

    },
};

// Bar-chart 1

export const Barchart1 = {

    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};
export const barchart1data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",],
    datasets: [
        {
            label: "Data 1 ",
            data: [10, 24, 20, 25, 35, 50],
            backgroundColor: "#f74f75",
            borderWidth: 1,
            fill: true,
        },
        {
            label: "Data 2 ",
            data: [10, 24, 20, 25, 35, 50],
            backgroundColor: "#d462f9",
            borderWidth: 1,
            fill: true,
        },
        {
            label: "Data 3 ",
            data: [20, 30, 28, 33, 45, 65],
            backgroundColor: "#e5bcf3",
            borderWidth: 1,
            fill: true,
        },
    ],
};

//Horizontalbar

export const Horizontalbarchart: any = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },

};
export const Horizontalbarchartdata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Data 1 ",
            data: [10, 24, 20, 25, 35, 50],
            backgroundColor: "#f74f75",
            borderWidth: 1,
            fill: true,
        },
        {
            label: "Data 2 ",
            data: [10, 24, 20, 25, 35, 50],
            backgroundColor: "#d462f9",
            borderWidth: 1,
            fill: true,
        },
        {
            label: "Data 3",
            data: [20, 30, 28, 33, 45, 65],
            backgroundColor: "#e5bcf3",
            borderWidth: 1,
            fill: true,
        },
    ],
};

// Solid Color 
export const SolidColor = {

    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};
export const SolidColordata = {
    type: "bar",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [

        {
            label: "Data 1 ",
            data: [12, 39, 20, 10, 25, 18, 80],
            backgroundColor: "#38cab3",
        },
    ],
};

// With Transparency 
export const Transparency = {

    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};
export const Transparencydata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Data 1 ",
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: "rgba(254, 78, 140, .5)",
        },
    ],
};

// Using Gradient Color 

export const GradientColor = {

    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};
export const GradientColordata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "Data 1 ",
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: "#41acb5",
            hoverBackgroundColor: "#38cab3",
        },
    ],
};

//Horizontal 

export const Horizontalbarchart1: any = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: "",
        },
    },
};
export const Horizontalbarchartdata1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: " Data 1 ",
        data: [12, 39, 20, 10, 25, 18, 80],
        backgroundColor: ['#6d26be', '#ffbd5a', '#38cab3', '#673ab7', '#ffc107', '#1a9c86']
    }]
};

//Horizontal -2

export const Horizontalbarchart2: any = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {

        title: {
            display: true,
            text: "",
        },
    },
};
export const Horizontalbarchartdata2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: " Data 1 ",
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: [
                "#6d26be",
                "#ffbd5a",
                "#673ab7",
                "#ffc107",
                "#1a9c86",
                "#7571f9",
            ],
        },
        {
            label: "Data 2 ",
            data: [22, 30, 25, 30, 20, 40, 80],
            backgroundColor: "rgba(0,123,255,.5)",
        },
    ],
};

//Piechart

export const piechart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: 'Data 1',
            data: [20, 20, 30, 5, 25],
            backgroundColor: ["#6d26be", "#ffbd5a", "#4ec2f0", "#1a9c86", "#f74f75"],
        },
    ],
    hoverOffset: 4,
};

//Donutchart

export const dchart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
        {
            label: 'Data 1',
            data: [20, 20, 30, 5, 25],
            backgroundColor: ["#6d26be", "#ffbd5a", "#4ec2f0", "#1a9c86", "#f74f75"],
        },
    ],
    hoverOffset: 4,
};

//************************** END *********************************//




//**************************ECHARTS*********************************//

// Echart1

export const Echart1 = {
    option: {
        grid: {
            top: "6",
            right: "0",
            bottom: "17",
            left: "25",
        },
        xAxis: {
            data: ["2013", "2014", "2015", "2016", "2017", "2018"],
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        color: ["#f74f75", "#38cab3"],
        series: [
            {
                name: "sales",
                type: "bar",
                width: "100%",
                barMaxWidth: 20,
                stack: "Stack",
                data: [10, 15, 9, 18, 10, 15],
            },
            {
                name: "Profit",
                type: "bar",
                width: "100%",
                stack: "Stack",
                barMaxWidth: 20,
                data: [10, 14, 10, 15, 9, 25],
            },
        ],
        
    },
};

// Echart2
export const Echart2 = {
    option: {
        grid: {
            top: "6",
            right: "10",
            bottom: "17",
            left: "32",
        },
        xAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            type: "category",
            data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        series: [
            {
                type: "bar",
                stack: "total",
                data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
                color: "#f74f75",
            },
            {
                type: "bar",
                stack: "total",
                data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
                color: "#38cab3",
            },
        ],
    },
};

// Echart3

export const Echart3 = {
    option: {
        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(171, 167, 167,0.2)"],
                },
            },
            splitLine: {
                lineStyle: {
                    color: ["rgba(171, 167, 167,0.2)"],
                },
            },
        },
        grid: {
            top: "6",
            right: "0",
            bottom: "17",
            left: "25",
        },
        xAxis: {
            data: ["2014", "2015", "2016", "2017", "2018", "2019"],
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        series: [
            {
                name: "sales",
                type: "bar",
                barMaxWidth: 20,
                data: [10, 15, 9, 18, 10, 15],
                color: "#38cab3",
            },
            {
                name: "growth",
                type: "bar",
                barMaxWidth: 20,
                data: [10, 14, 10, 15, 9, 25],
                color: "#f74f75",
            },
        ],
    },
};

// Echart4

export const Echart4 = {
    option: {
        grid: {
            left: "6%",
            right: "3%",
            bottom: "8%",
            top: "3%",
        },

        xAxis: [
            {
                type: "value",
                axisTick: {
                    alignWithLabel: true,
                },
            },
        ],
        yAxis: [
            {
                type: "category",
                data: ["2014", "2015", "2016", "2017", "2018", "2019"],
            },
            {
                type: "value",
            },
            {
                type: "value",
            },
        ],
        color: ["#38cab3", "#f74f75"],
        series: [
            {
                name: "sales",
                type: "bar",
                barMaxWidth: 20,
                data: [10, 15, 9, 18, 10, 15],
            },
            {
                name: "growth",
                type: "bar",
                barMaxWidth: 20,
                data: [10, 14, 10, 15, 9, 25],
            },
        ],
    },
};

// Echart5

export const Echart5 = {
    option: {
        grid: {
            top: "6",
            right: "0",
            bottom: "17",
            left: "25",
        },
        xAxis: {
            data: ["2014", "2015", "2016", "2017", "2018", "2019"],
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        color: ["#38cab3", "#f74f75"],
        series: [
            {
                name: "sales",
                type: "line",
                smooth: true,
                data: [10, 15, 9, 18, 10, 15],
                color: ["#38cab3"],
            },
            {
                name: "Profit",
                type: "line",
                smooth: true,
                size: 10,
                data: [10, 14, 10, 15, 9, 25],
                color: ["#f74f75"],
            },
        ],
    },
};

// Echart6

export const Echart6 = {
    option: {
        grid: {
            top: 10,
            bottom: 30,
        },
        xAxis: [
            {
                type: "value",
            },
        ],
        yAxis: [
            {
                type: "category",
                data: ["2014", "2015", "2016", "2017", "2018", "2019"],
            },
        ],
        color: ["#38cab3", "#f74f75"],
        series: [
            {
                name: "sales",
                type: "line",
                smooth: true,
                data: [10, 15, 9, 18, 10, 15],
                color: ["#38cab3"],
            },
            {
                name: "Profit",
                type: "line",
                smooth: true,
                size: 10,
                data: [10, 14, 10, 15, 9, 25],
                color: ["#f74f75"],
            },
        ],
    },
};
// Echart7

export const Echart7 = {
    option: {
        grid: {
            top: "6",
            right: "0",
            bottom: "17",
            left: "25",
        },
        xAxis: {
            data: ["2013", "2014", "2015", "2016", "2017", "2018"],
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        series: [
            {
                name: "data",
                type: "line",
                data: [5, 15, 9, 18, 10, 15],
                color: "#f74f75",
            },
        ],
    },
};

// Echart8

export const Echart8 = {
    option: {
        grid: {
            top: "6",
            right: "0",
            bottom: "17",
            left: "25",
        },
        xAxis: {
            data: ["2013", "2014", "2015", "2016", "2017", "2018"],
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(171, 167, 167,0.2)",
                },
            },
            axisLabel: {
                fontSize: 10,
                color: "#5f6d7a",
            },
        },
        series: [
            {
                name: "data",
                type: "line",
                smooth: true,
                data: [5, 15, 9, 18, 10, 15],
                color: "#38cab3",
            },
        ],
    },
};

// Echart9

export const Echart9 = {

    option: {
        tooltip: {
            trigger: "axis",
            position: ["35%", "32%"],
        },
        toolbox: {
            show: false,
        },
        calculable: false,
        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: "#888180",
                },
            },
            splitLine: {
                lineStyle: {
                    color: ["rgba(171, 167, 167,0.2)"],
                },
            },
        },
        grid: {
            x: 40,
            y: 20,
            x2: 40,
            y2: 20,
        },
        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: "#888180",
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(255,255,255,0.1)"],
                },
            },
            splitLine: {
                lineStyle: {
                    color: ["rgba(171, 167, 167,0.2)"],
                },
            },
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "Jan",
                    "Feb",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisLine: {
                    lineStyle: {
                        color: "rgba(171, 167, 167,0.2)",
                    },
                },
                axisLabel: {
                    fontSize: 10,
                    color: "#5f6d7a",
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    lineStyle: {
                        color: "rgba(171, 167, 167,0.2)",
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(171, 167, 167,0.2)",
                    },
                },
                axisLabel: {
                    fontSize: 10,
                    color: "#5f6d7a",
                },
            },
        ],
        color: ["#38cab3", "#f74f75"],
        series: [
            {
                name: "View Price",
                type: "bar",
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
                ],
                markPoint: {
                    data: [
                        {
                            type: "max",
                            name: "",
                        },
                        {
                            type: "min",
                            name: "",
                        },
                    ],
                },
                markLine: {
                    data: [
                        {
                            type: "average",
                            name: "",
                        },
                    ],
                },
            },
            {
                name: " Purchased Price",
                type: "bar",
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
                ],
                markPoint: {
                    data: [
                        {
                            name: "Purchased Price",
                            value: 182.2,
                            xAxis: 7,
                            yAxis: 183,
                        },
                        {
                            name: "Purchased Price",
                            value: 2.3,
                            xAxis: 11,
                            yAxis: 3,
                        },
                    ],
                },
                markLine: {
                    data: [
                        {
                            type: "average",
                            name: "",
                        },
                    ],
                },
            },
        ],
    },
};

//****************************END********************************//





//**************************APEXCHARTS**************************//

// Stacked Bar
interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
}
export class Apexcharts1 extends React.Component<{}, spark3>{
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {

            series: [{
                name: 'Data 1',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Data 2',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Data 3',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Data 4',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Data 5',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
                dataLabels: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: 350,
                    width: 350,
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },

                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    labels: {
                        formatter: function (val) {
                            return val + 'K';
                        },
                        rotate: -90
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + 'K';
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }

        };
    }

    render() {
        return (

            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />

        );
    }
}
// AreaChart
export class Apexcharts2 extends React.Component<{}, spark3>{
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'South',
                    data: [120, 232, 301, 434, 290, 130, 410]
                },
                {
                    name: 'North',
                    data: [520, 432, 601, 634, 390, 330, 520]
                },
                {
                    name: 'Central',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true

                },
                colors: ['#f1b7c4', '#8a9ce4', '#c1c2f0'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center'
                }
            }

        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={300} />
            </div>
        );
    }
}
// Mixed Line Column Area
export class Apexcharts3 extends React.Component<{}, spark3>{
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {

            series: [{
                name: 'Data A',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                color: '#f7557a'
            }, {
                name: 'Data B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                color: '#285cf7'
            }, {
                name: 'Data C',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                color: '#4ecc48'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },

                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: 'vertical',
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],

                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {

                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== 'undefined') {
                                return y.toFixed(0) + ' points';
                            }
                            return y;
                        }
                    }
                }
            }
        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>

        );
    }
}
export class Apexcharts4 extends React.Component<{}, spark3>{
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {

            series: [21, 65, 33, 43, 59, 63],

            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 400,
                    options: {
                        chart: {
                            width: 260
                        },
                    }
                },
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                        },
                    }
                },
                {
                    breakpoint: 1004,
                    options: {
                        chart: {
                            width: 280
                        },
                    }
                },
                {
                    breakpoint: 1024,
                    options: {
                        chart: {
                            width: 300
                        },
                    }
                },]
            },

        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={410} />
            </div>

        );
    }
}

//**************************END*******************************//
