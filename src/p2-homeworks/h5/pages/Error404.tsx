import React from 'react'
import {Grid, makeStyles, Typography} from '@material-ui/core';

function Error404() {

    const useStyles = makeStyles(() => ({
        fullscreen: {
            background: 'orange',
            height: '100%',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
    }));

    const classes = useStyles();


    return (
        <Grid container className={classes.fullscreen}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h5">Page not found!</Typography>
            <Typography variant="h5">—ฅ/ᐠ.̫ .ᐟ\ฅ—</Typography>
        </Grid>
    )
}

export default Error404;
