import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../../context/ContextProvider';
import Footer from '../commons/Footer';
import UserIcon from '../commons/UserIcon';



const LoginScreen = () => {

  const navigate = useNavigate();

  const { user, authState, setAuthState, setUser } = React.useContext(AppContext);

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    setAuthState({ type: 'LOG_IN', payload: true });
  };

  const onNavigateToRegistration = () => {
    navigate("/register", { replace: true });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <UserIcon />
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <></>                
              </Grid>
              <Grid item>
                <Link 
                  href="#" 
                  variant="body2" 
                  onClick={onNavigateToRegistration} 
                >
                  {"Aún no tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer sx={{ mt: 8, mb: 4 }}/>
      </Container>
    </>
  );
}

/* import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  content: {
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 100
      // padding: theme.spacing(0.1),
  }, 
}));

const LoginScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Button style={{marginRight: 50}} variant="contained">User Log In</Button>
      <Button variant='outlined'>Registration</Button>
    </div>
  );
} */

export default LoginScreen;