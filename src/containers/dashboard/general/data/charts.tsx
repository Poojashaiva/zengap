import React from "react";
import ReactApexChart from "react-apexcharts";
import { Chart as ChartJS, registerables } from "chart.js";
import { ApexOptions } from "apexcharts";
ChartJS.register(...registerables);

interface spark3 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Generaldashboard extends React.Component<{}, spark3> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: "Active Devices",
          type: "column",
          data: [104, 102, 117, 146, 118, 115, 220, 103, 83, 114, 265, 174],
        },
        {
          name: "Inactive Devices",
          type: "column",
          data: [92, 75, 123, 111, 196, 122, 159, 102, 138, 136, 62, 240],
        },
        {
          name: "Pinging Devices",
          type: "line",
          data: [35, 52, 86, 65, 102, 70, 152, 87, 55, 92, 170, 80],
        },
      ],
      stroke: {
        width: [0, 0, 2],
      },
      plotOptions: {
        bar: {
          columnWidth: "25%",
        },
      },
      options: {
        chart: {
          height: 308,
          type: "line",
          stacked: false,
          fontFamily: "poppins, sans-serif",
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
        },

        stroke: {
          width: [0, 0, 2],
        },
        plotOptions: {
          bar: {
            columnWidth: "25%",
          },
        },
        markers: {
          size: [0, 0, 3],
       
          strokeColors: "#000",
          strokeOpacity: 0.6,
          strokeDashArray: 0,
          fillOpacity: 1,
          discrete: [],
          shape: "circle",
        
          offsetX: 0,
          offsetY: 0,
          onClick: undefined,
          onDblClick: undefined,
          showNullDataPoints: true,
          hover: {
            size: undefined,
            sizeOffset: 3,
          },
        },
        fill: {
          opacity: [1, 1, 1],
        },
        grid: {
          borderColor: "#f2f6f7",
        },
        legend: {
          show: true,
          position: "bottom",
          fontWeight: 500,
          markers: {
            width: 7,
            height: 7,
            // shape: 'square',
            radius: 0,
          },
        },
        yaxis: {
          min: 0,
          forceNiceScale: true,
          title: {
            style: {
              //   color: "#adb5be",
              fontSize: "14px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        xaxis: {
          // type: 'month',
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: true,

            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: "solid",

            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
          },
        },
        tooltip: {
          enabled: true,
          shared: false,
          intersect: true,
          x: {
            show: false,
          },
        },
        colors: ["#4deeea", "#2d8487", "#f9f871"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={300}
        />
      </div>
    );
  }
}

interface spark4 {
  options?: ApexOptions;
  width?: string | number;
  height?: string | number;
  series?: ApexOptions["series"];
  [key: string]: any;
  label?: XAxisAnnotations;
  endingShape?: string;
}
export class Totalinvestment extends React.Component<{}, spark4> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      dataLabels: {
        enabled: false,
      },
      colors: ["#4deeea"],
      series: [
        {
          name: "Male",
          data: [80, 50, 57, 98, 66, 56, 75],
        },
      ],

      plotOptions: {
        bar: {
          columnWidth: "25%",
        },
      },
      options: {
        chart: {
          events: {
            mounted: (chart: any) => {
              chart.windowResizeHandler();
            },
          },
          toolbar: {
            show: false,
          },
          type: "bar",
          height: 50,
          width: 10,
          fontFamily: "poppins, sans-serif",
          sparkline: {
            enabled: true,
          },
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 2,

            opacity: 0.5,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
        },
        xaxis: {
          labels: {
            show: false,
          },
          categories: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
          axisBorder: {
            show: false,
            offsetX: 0,
            offsetY: 0,
          },

          axisTicks: {
            show: false,
            borderType: "solid",
            offsetX: 0,
            offsetY: 0,
          },
        },
        yaxis: {
          title: {
            style: {
              color: "	#adb5be",
              fontSize: "14px",
              fontFamily: "poppins, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-label",
            },
          },
          labels: {
            show: false,
            formatter: function (y) {
              return y.toFixed(0) + "";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
          position: "top",
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
        colors: ["#4deeea", "#2d8487", "#f9f871"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={50}
          width={95}
        />
      </div>
    );
  }
}
