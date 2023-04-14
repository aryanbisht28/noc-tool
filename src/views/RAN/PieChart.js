import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import MainCard from 'ui-component/cards/MainCard';

function index() {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'RAN Health Pie Chart'
            }
        }
        // responsive: true
    };
    const data = {
        // maintainAspectRatio: false,
        labels: ['Critical', 'Medium', 'Normal'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#336699', '#99CCFF', '#999933'],
                // hoverBackgroundColor: chartColors
                borderColor: ['#ffff'],
                borderWidth: 2,
                hoverOffset: 4
            }
        ]
    };
    return (
        <MainCard>
            <Pie style={{ marginTop: '0.1em', marginLeft: '0.1em', marginRight: '0.1em', height: '60%' }} data={data} options={options} />
        </MainCard>
    );
}

export default index;
