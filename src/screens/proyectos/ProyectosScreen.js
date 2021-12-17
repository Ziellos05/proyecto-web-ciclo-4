import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';


const ProyectosScreen = () => {

  const [value, setValue] = React.useState(new Date());

  return (

    <div>
        
      <Card> 
          <Typography variant="button" display="block" gutterBottom>
            Registro de Proyectos
          </Typography>     
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
          >
          <div>
              <TextField
                label="Nombre Proyecto"
                placeholder="Ingrese nombre del proyecto"
                id="filled-size-small"
                sx={{ m: 1, width: '40ch' }}
                variant="outlined"
                size="small"
                required
              />

     




          </div>

          <div>
            <TextField
              id="outlined-multiline-static"
              label="Objetivos Generales"
              placeholder="Ingrese Objetivos Generales del proyecto"
              sx={{ m: 1, width: '40ch' }}
              multiline
              rows={4}
              required
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-static"
              label="Objetivos Específicos"
              placeholder="Ingrese Objetivos Específicos del proyecto"
              sx={{ m: 1, width: '40ch' }}
              multiline
              rows={4}
              required
            />
          </div>

          <div>
            <TextField
              label="Presupuesto"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              required
            />
          </div>
          
        </Box>


      </Card>

    </div>
    


  );
  
  //<Button variant="contained">Proyectos Screen</Button>;
 
}

export default ProyectosScreen;