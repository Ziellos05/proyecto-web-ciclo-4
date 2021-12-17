import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { useQuery } from "@apollo/client";
import { GET_PROYECTOS } from "../../../graphql/proyectos/queries";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';


import Typography from '@mui/material/Typography';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { Link } from "@mui/material";

const GestionProyectos = () => {

    const {data, error, loading } = useQuery(GET_PROYECTOS);

    //Para ver que nos entrega el data
    useEffect(() => {
        console.log('Data Servidor', data);
        }, [data]);

    if (loading) return <div>Cargando...</div>


    return (
        <div>
            Datos Proyectos:
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre Proyecto</TableCell>
                            <TableCell align="right">Presupuesto</TableCell>
                            <TableCell align="right">Fecha Inicio</TableCell>
                            <TableCell align="right">Fecha Fin</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right">Fase</TableCell>
                            <TableCell align="right">Acciones</TableCell>  
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {data && data.allProjects.map((u) => (
                            <TableRow
                            key={u._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{u.name}</TableCell>
                                <TableCell align="right">{u.budget}</TableCell>
                                <TableCell align="right">{u.startDate}</TableCell>
                                <TableCell align="right">{u.endDate}</TableCell>
                                <TableCell align="right">{u.status}</TableCell>
                                <TableCell align="right">{u.phase}</TableCell>
                                <TableCell align="right"> 
                                    <Link to= {`/proyectos/gestion/editar/${u._id}`}>Editar</Link> 
                                </TableCell>
                                                        
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        
            );
            
          };

          



export default GestionProyectos;