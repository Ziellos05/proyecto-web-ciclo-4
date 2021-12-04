import React from "react";
import { green } from '@mui/material/colors';
import { Avatar, Grid, Typography } from '@material-ui/core';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Portrait = () => {

    return (
        <Grid container justify = "center">
             <Avatar sx={{ bgcolor: green[500] }}>
                <AssignmentIcon />
            </Avatar>
            <Typography 
                variant='body1' 
                component='span' 
            >
                Los REACTivos
            </Typography>            
        </Grid >
    );
};
export default Portrait;