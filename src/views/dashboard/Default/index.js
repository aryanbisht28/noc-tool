import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import PieChart from './PieChart';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import RanCard from './cards/RanCard';
import CoreCard from './cards/CoreCard';
import TransCard from './cards/TransCard';
import BarChart from '../BarChart';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid container spacing={gridSpacing} item xs={12}>
                <Grid item xs={4}>
                    <Link to="/pages/CommercialReview/ViewReview" style={{ textDecoration: 'none' }}>
                        <RanCard />
                    </Link>
                </Grid>

                <Grid item xs={4}>
                    <Link to="/pages/PatnerProvisioning/view-intialization" style={{ textDecoration: 'none' }}>
                        <CoreCard />
                    </Link>
                </Grid>

                <Grid item xs={4}>
                    <Link to="/pages/PatnerProvisioning/completed" style={{ textDecoration: 'none' }}>
                        <TransCard />
                    </Link>
                </Grid>
            </Grid>
            <Grid container spacing={gridSpacing} xs={12} style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
                <Grid item xs={4}>
                    <PieChart />
                </Grid>
                <Grid item xs={8}>
                    <BarChart />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
