import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import { AppContext } from '../../context/ContextProvider';
import AppScreens from '../AppScreens';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import NavStructure from '../navStructure/NavStructure';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },    
    content: {
        flexGrow: 1,
    }, 
}));


const AppContainer = () => {

    // const { authState, setAuthState, user, setUser } = useContext(AppContext);
    const classes = useStyles();

    const authState = {
        isLoggedIn: false
    }

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                {/* <NavigationContainer /> */}
                <Container maxWidth="sm">
                    <main className={classes.content}>                        
                        <AppScreens authState={authState} />
                    </main>
               </Container>
            </div>
        </Router>
    );
}

export default AppContainer;
