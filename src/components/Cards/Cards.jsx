
import React from 'react';

import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'

import styles from './Cards.module.css'


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

    if (!confirmed){
        return 'Loading...';
    }
    return (
        <div className = {styles.container}>
            <Grid container spacing={3} justify = 'center'>
                <Grid item component = {Card}>
                    <CardContent>
                        <Typography color ='textSecondary' gutterBottom>Infected</Typography>
                        <Typography varaint='h5'>
                        <CountUp 
                            start = {0}
                            end = {confirmed.value}
                            duration = {1}
                            separator =","
                        />
                        </Typography>
                        <Typography color='textSecondary'>DATE</Typography>
                        <Typography varaint='body'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography varaint='h5'>{recovered.value}</Typography>
                        <Typography color='textSecondary'>DATE</Typography>
                        <Typography varaint='body'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography varaint='h5'>{deaths.value}</Typography>
                        <Typography color='textSecondary'>DATE</Typography>
                        <Typography varaint='body'>Number of Deaths by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
