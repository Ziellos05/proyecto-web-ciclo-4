import React, {useState} from "react";
import { Box, Container, Input, InputLabel, Grid, Button, TextField, Typography } from '@material-ui/core'

import { DatePicker } from "@material-ui/pickers";

const RegistroProyectos = () => {

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  console.log(fechaSeleccionada);
  return (

    <div>
      <Grid item>
        <Typography variant="h5" color="primary">Registrar Proyecto</Typography>
      </Grid>
      <Box
        component="form"
          sx={{
            '& .MuiTextField-root': { m:1, width: '40ch' },
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >

        <div>
            <TextField 
            variant="outlined" 
            label="Nombre Proyecto" 
            name="name"
            fullWidth style={{ marginBottom: "2em", marginRight: "2em" }}

            />
            <TextField 
            variant="outlined" 
            label="Fecha de Inicio" 
            name="startDate"
            fullWidth style={{ marginBottom: "2em" }}

            /> 
        </div>

        <div>
          
          <DatePicker value={fechaSeleccionada} onChange={setFechaSeleccionada}
            label="Fecha Inicio Proyecto"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            style={{ marginRight: "2em" }}/>

          <DatePicker value={fechaSeleccionada} onChange={setFechaSeleccionada}
            label="Fecha Fin Proyecto"
            inputVariant="outlined"
            format="MM/dd/yyyy"/>
        </div>




      </Box>






<Grid>
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


  
    
 


    </div>

  )
};

export default RegistroProyectos;