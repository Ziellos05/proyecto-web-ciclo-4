import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import { useQuery, gql } from "@apollo/client";

// const AvancesProyecto = gql`
//   query AdvancesByProject($id: ID!) {
//     project(_id: $id) {
//       advances {
//         _id
//         project {
//           _id
//           name
//         }
//         user {
//           _id
//           fullName
//         }
//         advance
//         comments
//       }
//     }
//   }
// `;

// Modal ===============
const EditAvance = ({avance}) => {
  
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
    comments: avance.comments,
  });
 
  const handleChange = (event) => {
    setEdit({... avance, [event.target.name]: event.target.value});
  };

  
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
      <TextField id="avance" label="Avance" variant="outlined" onChange={handleChange} placeholder={avance.advance} />
    </Grid>
    <br />
    <Grid>
      <TextField id="comments" label="Comentario" variant="outlined" onChange={handleChange} placeholder={avance.comments} />
    </Grid>
    </Box>
  </Modal>
  </>
  )
};

export default EditAvance;