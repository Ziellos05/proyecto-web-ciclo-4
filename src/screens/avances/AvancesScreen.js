import * as React from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

const AvancesScreen = () => {


  return(
    <>
      <Container maxWidth="xs">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h3>Avances</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h4>Autor: ###########</h4>
          </Grid>
          <Grid item spacing={6}>
            <h4>Fecha: ###########</h4>
          </Grid>
          <Grid item spacing={12}>
            <p>Avance##########</p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AvancesScreen;