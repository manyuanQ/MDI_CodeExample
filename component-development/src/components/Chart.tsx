import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the shape of data passed to Chart
interface ChartItem {
  month: string;
  value: number;
}

interface ChartProps {
  data: ChartItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  // Extract labels and values from the fetched data
  const labels = data.map(item => item.month);
  const values = data.map(item => item.value);

  const chartData: ChartData<'line'> = {
    labels,
    datasets: [
      {
        label: 'My Data',
        data: values,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart" aria-label="Line Chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
