import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewAvance = () => {

    return(
        <>
        <Container maxWidth="xs">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Avance"
                    multiline
                    rows={5}
                    defaultValue="Escriba aquí el nuevo avance"
                />
            </Grid>
            <Grid item xs={6}>
                <Button variant='contained' color='error'>Cancelar</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='contained' color='success'>Guardar</Button>
            </Grid>
        </Grid>
        </Container>
        </>
    )
};

export default NewAvance;