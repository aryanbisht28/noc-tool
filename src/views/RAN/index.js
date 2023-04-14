import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import MainCard from 'ui-component/cards/MainCard';
import PieChart from 'views/RAN/PieChart';
import GaugeChart from 'views/RAN/GaugeChart';
function index() {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'RAN Health Pie Chart'
            }
        }
    };
    const data = {
        maintainAspectRatio: false,
        responsive: false,
        labels: ['Critical', 'Medium', 'Normal'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#336699', '#99CCFF', '#999933']
                // hoverBackgroundColor: chartColors
            }
        ]
    };
    return (
        <Grid container xs={12}>
            <Grid item xs={6} direction="column">
                <Grid item>
                    <GaugeChart />
                </Grid>
                <Grid item style={{ marginTop: '1rem' }}>
                    <PieChart />
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Card>
                    <li>random</li>
                </Card>
            </Grid>
        </Grid>
    );
}

export default index;
