import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PerformanceChart: React.FC = () => {
  const series = [26, 16, 24, 34];

  const options: ApexOptions = {
    chart: {
      type: 'pie',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        offsetY: 160, // Move pie chart up slightly
        offsetX: 30, // Move pie chart up slightly
        customScale: 1.9, // Increase size of pie by 20%
        donut:{
            size: '500', // Set explicit size in pixels
        }
      }
    },
    labels: [
      'Sleeper Berth - 50% drivers completed this course',
      'Sleeper Berth - 50% drivers completed this course',
      'Sleeper Berth - 50% drivers completed this course',
      'Short Haul Success - 50% drivers completed this course'
    ],
    colors: ['#003366', '#87ceeb', '#e6a8d7', '#00ff7f'],
    legend: {
      position: 'right',
      horizontalAlign: 'left',
      fontSize: '10px',
      fontFamily: "'Inter', sans-serif",
      markers: {
        size: 5,
        offsetX: 5,
        offsetY: -6,
      },
      itemMargin: {
        vertical: 0,
        horizontal: 5
      },
      formatter: function(seriesName: string) {
        return seriesName;
      },
      width: 220,
      height: 220,
      offsetY: 40,
      offsetX: -60
    },
    stroke: {
      width: 0
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          height: undefined,
          width: undefined,
          offsetX: 0,
          offsetY: 0
        },
        plotOptions: {
          pie: {
            offsetX: 0,
            customScale: 1, // Reset scale for mobile view
            size: undefined // Allow automatic sizing on mobile
          }
        }
      }
    }]
  };

  return (
    <div className="w-full">
      <div id="chart">
        <ReactApexChart 
          options={options}
          series={series}
          type="pie"
          height={350} // Increased height to accommodate larger pie
          width="100%"
        />
      </div>
    </div>
  );
};

export default PerformanceChart;