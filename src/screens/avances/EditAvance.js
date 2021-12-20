import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import { useMutation, gql } from "@apollo/client";

const UpdateAdvance = gql`
mutation UpdateAdvance($input: UpdateAdvanceAdvanceInput!) {
  updateAdvanceAdvance(input: $input) {
    _id
    advance
  }
}
`;

const EditAvance = ({avance}) => {

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
    projectID: avance._id,
    avance: avance.advance,
  });
 
  const handleChange = (event) => {
    setEdit({... avance, [event.target.name]: event.target.value});
  };

  const [updateAdvance, { data, loading, error }] = useMutation(UpdateAdvance);
  
  return(
    <>
    <Button onClick={handleOpen} variant="contained">Editar</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
    <h1>Editar avance</h1>
    <Grid>
      <TextField id="avance" multiline rows={4} label="Avance" variant="outlined" onChange={handleChange} value={avance.advance} />
    </Grid>
    <br />
    <Button variant="contained" onClick={() => updateAdvance({ variables: {avance: edit.avance}})}>Guardar cambios</Button>
    <h4>(Haz click fuera del recuadro blanco para cancelar)</h4>
    </Box>
  </Modal>
  </>
  )
};

export default EditAvance;