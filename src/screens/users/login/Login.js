import * as React from 'react';
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
}

export default LoginScreen;