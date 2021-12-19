import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROYECTO } from "../../../graphql/proyectos/queries";

import { Box, Container, Input, InputLabel, Grid, Button, TextField, Typography } from '@material-ui/core'
import useFormData from "../../../hooks/useFormData";




const EditarProyectos = () => {
  
  const { form, formData, updateFormData } = useFormData(null);
  
  const { _id } = useParams();
  const { data, error, loading } = useQuery(GET_PROYECTO, {
    variables:{ _id },
  });
  
  if (loading) return <div>Cargando...</div>

  const submitForm = (e) => {
    e.preventDefault();
    console.log('fd', formData);
  }


  console.log(data);
  
  return (

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
        <Typography variant="h5" color="primary">Actualizar Proyecto</Typography>
      </Grid>

        <Grid 
          container 
          direction="column" 
          alignItems="center" 
          justifyContent="center" 
          >

          <form
          onSubmit={submitForm}
          onChange={updateFormData}
          ref={form}
          >
          <TextField 
          variant="outlined" 
          label="Nombre Proyecto" 
          name="name"
          fullWidth style={{ marginBottom: "2em" }}
          defaultValue={data.project.name}
          />
          <TextField 
          variant="outlined" 
          label="Presupuesto" 
          name="budget"
          fullWidth style={{ marginBottom: "2em" }}
          defaultValue={data.project.budget}
          /> 
          <TextField 
            variant="outlined" 
            label="Objetivo General" 
            name="generalObjective"
            multiline
            rows={4}
            defaultValue={data.project.generalObjective}
            fullWidth style={{ marginBottom: "2em" }}
            />
          <TextField 
            variant="outlined" 
            label="Objetivos Específicos"
            name="specificObjectives" 
            multiline
            rows={4}
            defaultValue={data.project.specificObjectives}
            fullWidth style={{ marginBottom: "2em" }}/>

          <Button 
 
            loading="false"
            type="submit"
            size="large" 
            variant="contained" 
            color="primary">
            GUARDAR
          </Button>
          </form>
        </Grid>
      </Grid>

  
    
    </Box>
  </Container>

  )};


export default EditarProyectos;