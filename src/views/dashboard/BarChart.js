import React from 'react';
import { Bar } from 'react-chartjs-2';
import MainCard from 'ui-component/cards/MainCard';

function BarChart() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Monthly Network Data'
            }
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Transmission',
                data: [5, 10, 12, 11, 4, 7, 0, 1, 7, 20, 12, 8],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'RAN',
                data: [5, 10, 12, 11, 4, 7, 0, 1, 7, 20, 12, 8],
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
            {
                label: 'Core',
                data: [5, 10, 12, 11, 4, 7, 0, 1, 7, 20, 12, 8],
                backgroundColor: 'rgba(83, 162, 235, 0.5)'
            }
        ]
    };
    return (
        <MainCard>
            <Bar options={options} data={data} />;
        </MainCard>
    );
}

export default BarChart;
