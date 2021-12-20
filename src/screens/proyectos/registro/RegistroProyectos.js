import React, { useState, useEffect } from "react";
import { Box, Container, Input, InputLabel, Grid, Button, TextField, Typography, Select, MenuItem, Menu } from '@material-ui/core'
import { Link } from "react-router-dom";
import { DatePicker } from "@material-ui/pickers";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "../../../graphql/proyectos/queries";
import Dropdown from "../../../components/Dropdown";
import { NoSchemaIntrospectionCustomRule } from "graphql";
import useFormData from "../../../hooks/useFormData";

const RegistroProyectos = () => {

  const { form, formData, updateFormData } = useFormData(null);

  const [listaUsuarios, setListaUsuarios] = useState('');


  const {data, loading, error } = useQuery(GET_USUARIOS, {
    variables: {
      filtro: { role: 'LEADER', status: 'AUTHORIZED'},
    }
  }); 

  useEffect(() => {
    console.log(data);
    if(data) {
      const lu = {};
      data.allUsers.forEach((elemento) => {
        lu[elemento._id] = elemento.name;
      });
      setListaUsuarios(lu);
    }
  }, [data]);
  console.log(listaUsuarios);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  console.log(fechaSeleccionada);

  //if (loading) return <div>Cargando...</div>
  return (

    <div>
      <Link to='/proyectos/gestion'>
        Regresar
      </Link>
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
      <form ref={form} onChange={updateFormData} onSubmit={submitForm}>


        <div>
            <TextField 
            variant="outlined" 
            label="Nombre Proyecto" 
            name="name"
            fullWidth style={{ marginBottom: "2em", marginRight: "2em" }}

            />
            <TextField 
            variant="outlined" 
            label="Presupuesto" 
            name="budget"
            fullWidth style={{ marginBottom: "2em" }}

            /> 
        </div>

        <div>
          
          <DatePicker value={fechaSeleccionada} onChange={setFechaSeleccionada}
            label="Fecha Inicio Proyecto"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            style={{ marginRight: "2em" }}
            defaultValue={Date.now()}
            />
           

          <DatePicker value={fechaSeleccionada} onChange={setFechaSeleccionada}
            label="Fecha Fin Proyecto"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            defaultValue={Date.now()}
            />
        </div>

        <div>
          <TextField 
            variant="outlined" 
            label="Objetivo General" 
            name="generalObjective"
            multiline
            rows={4}

            fullWidth style={{ marginTop: "2em", marginRight: "2em" }}
            />

          <TextField 
            variant="outlined" 
            label="Objetivos Específicos"
            name="specificObjectives" 
            multiline
            rows={4}

            fullWidth style={{ marginTop: "2em", marginBottom: "2em" }}/>

        </div>


        <div>
          <Dropdown 
            label="Líder"
            options={listaUsuarios} 
            name='lider' 
            required={true}
          />
            

        </div>
        </form>
 
      </Box>


<Grid>

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