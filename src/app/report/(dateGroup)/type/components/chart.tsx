import type { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import type { FC } from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
}

const Chart: FC<Props> = ({ series }) => {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#0967ff"],
    stroke: {
      lineCap: "round",
      curve: "straight",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "#000",
      },
      title: {
        text: "2024",
      },
      categories: ["10", "11", "12", "13", "14", "15", "16"],
    },
    yaxis: {
      min: 0,
      max: 80,
      stepSize: 20,
    },
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  };

  return (
    <ApexChart
      type="line"
      series={series}
      height={240}
      width="100%"
      options={options}
    />
  );
};

export default Chart;
