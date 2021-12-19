import React from "react";
import { Box, Container, Input, InputLabel, Grid, Button, TextField, Typography } from '@material-ui/core'



const RegistroProyectos = () => {
  return (

    <div>
      <Container 
      component="main" 
      maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

    <Grid
    container 
    justifyContent="center" 
    alignItems="center" 
    direction="column" 
    style={{ minHeight: "50vh" }} 
    spacing={5} >
      <Grid item>
        <Typography variant="h5" color="primary">Registrar Proyecto</Typography>
      </Grid>

        <Grid 
          container 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          >

          <TextField 
          variant="outlined" 
          label="Nombre Proyecto" 
          name="name"
          fullWidth style={{ marginBottom: "2em" }}

          />
          <TextField 
          variant="outlined" 
          label="Presupuesto" 
          name="budget"
          fullWidth style={{ marginBottom: "2em" }}

          /> 
          <TextField 
            variant="outlined" 
            label="Objetivo General" 
            name="generalObjective"
            multiline
            rows={4}

            fullWidth style={{ marginBottom: "2em" }}
            />
          <TextField 
            variant="outlined" 
            label="Objetivos Específicos"
            name="specificObjectives" 
            multiline
            rows={4}

            fullWidth style={{ marginBottom: "2em" }}/>

          <Button 
 
            loading="false"
            type="submit"
            size="large" 
            variant="contained" 
            color="primary">
            GUARDAR
          </Button>

        </Grid>
      </Grid>

  
    
    </Box>
  </Container>


    </div>

  )
};

export default RegistroProyectos;