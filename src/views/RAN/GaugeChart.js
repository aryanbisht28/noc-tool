import React from 'react';
import GaugeChart from 'react-gauge-chart';
import Card from '@mui/material/Card';

function GaugesChart() {
    return (
        <Card style={{ display: 'flex', flexDirection: 'column', alignItem: 'center', justifyContent: 'center', height: '40vh' }}>
            <h3 style={{ textAlign: 'center', marginTop: '1rem' }}>Network Health</h3>
            <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={0.86} />
        </Card>
    );
}

export default GaugesChart;
