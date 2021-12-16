import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useQuery, gql } from "@apollo/client";
import styles from "./Styles.modules.css";

const AVANCES = gql`
  query AllAdvances{
    allAdvances {
      _id
      project {
        _id
        name
      }
      user {
        _id
        fullName
      }
      advance
      date
      comments
    }
  }
`;

const AvancesScreen = () => {

  const { data } = useQuery(AVANCES);
  console.log(data);


  return(
    <>
      <Box xs={{ backgroundColor: 'grey'}}>
        <Typography component="div">
          <Box sx={{ textAlign: 'center', m: 1, fontWeight: 'bold' }}>
            <h1>Avances</h1>
          </Box>
        </Typography>
        <Grid container spacing={2}>
          { data.allAdvances.map((avance) => (
            <Grid item xs={6}>
            <Card>
              <CardContent>
                <h2>Proyecto: {avance.project.name}</h2>
                <h3>Autor: {avance.user.fullName}</h3>
                <h3>Fecha: {avance.date}</h3>
                <h3>Avance:</h3>
                <p>{avance.advance}</p>
                <h3>Comentarios:</h3>
                <p>{avance.comments}</p>
              </CardContent>
          </Card>

            </Grid>
          ))}
        </Grid>        
      </Box>
    </>
  )
};

export default AvancesScreen;