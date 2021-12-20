import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';

import { useMutation, gql } from "@apollo/client";

const NewAdvance = gql`
    mutation NewAdvance($input: NewAdvanceInput!) {
        newAdvance(input: $input) {
        projectID
        advance
        }
    }
`

const NewAvance = (project) => {

    // Modal ===============  
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Advance state ===============

    const [edit, setEdit] = useState({
        projectID: project._id,
        avance: "",
    });
    
    const handleChange = (event) => {
        setEdit({... edit, [event.target.name]: event.target.value});
    };

    const [newAdvance, { data, loading, error }] = useMutation(Advance);


    return(
        <>
        <Button onClick={handleOpen} variant="contained">Nuevo avance</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>Crear avance</h1>
        <Grid>
          <TextField id="avance" multiline rows={4} label="Avance" variant="outlined" onChange={handleChange} placeholder='Crear nuevo avance' />
        </Grid>
        <br />
        <Button variant="contained" onClick={() => newAdvance({ variables: {projectID: project._id, avance: edit.avance}})}>Crear avance</Button>
        <h4>(Haz click fuera del recuadro blanco para cancelar)</h4>
        </Box>
      </Modal>
      </>
    
    )
};

export default NewAvance;