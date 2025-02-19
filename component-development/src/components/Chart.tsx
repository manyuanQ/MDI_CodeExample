import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        accessibility: {
            enabled: true,
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div aria-label="Sales data chart">
            <h2>Sales Data Visualization</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Chart;