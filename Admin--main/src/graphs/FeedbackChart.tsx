import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface Series {
  name: string;
  data: number[];
}

const FeedbackChart: React.FC = () => {
  const series: Series[] = [
    {
      name: 'Average feedback',
      data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65]
    },
    {
      name: 'Good feedbacks',
      data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45]
    },
    {
      name: 'No feedback',
      data: [85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85]
    },
    {
      name: 'Bad feedbacks',
      data: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55]
    }
  ];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 220,
      width: '100%',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
        dataLabels: {
          position: 'top'
        }
      }
    },
    colors: ['#1e4db7', '#39de7b', '#bf7af0', '#ff6b6b'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
      min: 0,
      max: 100,
      tickAmount: 5
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left'
    }
  };

  return (
    <div className="">
      <div id="chart">
        <ReactApexChart 
          options={options}
          series={series}
          type="bar"
          height={220}
          width="100%"
        />
      </div>
    </div>
  );
};

export default FeedbackChart;