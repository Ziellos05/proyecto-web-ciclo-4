import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppScreens from '../AppScreens';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationContainer from '../NavContainer/NavigationContainer';
import { makeStyles } from '@mui/styles';
import { AppContext } from '../../context/ContextProvider';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';


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

const httpLink = createHttpLink({
    uri: 'https://gestor-de-proyectos-backend.herokuapp.com/graphql',
});

// const client = new ApolloClient({
//     uri: 'https://gestor-de-proyectos-backend.herokuapp.com/graphql',
//     cache: new InMemoryCache()
// });

//-----
// FUNCTIONAL COMPONENT
//-----

const AppContainer = () => {

    const { authState, user, token } = useContext(AppContext);

    const classes = useStyles();

    const theme = createTheme();

    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        //const token = localStorage.getItem('token');
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token.token}` : "",
          }
        }
    });

    const initialClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    const [client, setClient] = React.useState(initialClient); 


    useEffect(() => {

        const newAuthLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            //const token = localStorage.getItem('token');
            // return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                authorization: token ? `${token.token}` : "",
              }
            }
        });

        const newClient = new ApolloClient({
            link: newAuthLink.concat(httpLink),
            cache: new InMemoryCache()
        });
        setClient(newClient);
    }, [token])

    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default AppContainer;
