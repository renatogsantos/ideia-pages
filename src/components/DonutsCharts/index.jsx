"use client";
import ReactApexChart from "react-apexcharts";

export default function DonutChart({ labels, colors, series }) {
  const options = {
    series: series ? series : [100],
    colors: colors ? colors : ["#38c460"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Montserrat, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Montserrat, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return `${sum}k`;
              },
            },
            value: {
              show: true,
              fontFamily: "Montserrat, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              },
            },
          },
          size: "80%",
        },
      },
    },
    labels: labels ? labels : ["Label"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Montserrat, sans-serif",
    },
  };

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={"100%"}
      />
    </>
  );
}
