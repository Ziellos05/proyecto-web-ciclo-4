import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppScreens from '../AppScreens';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationContainer from '../NavContainer/NavigationContainer';
import { makeStyles } from '@mui/styles';
import { AppContext } from '../../context/ContextProvider';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        marginTop: 65,
        marginLeft: 30
    },
}));


const AppContainer = () => {

    const { authState, user } = useContext(AppContext);

    const classes = useStyles();

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    {
                        authState.isLoggedIn && <NavigationContainer />
                    }                    
                    <main className={classes.content}>
                        <AppScreens authState={authState} />
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default AppContainer;
