import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GetUser from './GetUser';


const UserList = () => {


    const [openGetUser, setOpenGetUser] = React.useState(true);

    const [userList, setUserList] = React.useState([]);

    const refRole = React.useRef('LEADER');

    const onOpenGetUser = () => setOpenGetUser(true);
    const onCloseGetUser = () => setOpenGetUser(false);

    const onGetUserSuccess = (dataList) => {
        setUserList(dataList);
        onCloseGetUser();
    };

    const onGetUserError = (error) => {
        onCloseGetUser();
        alert(error);
    };

    React.useEffect(() => {
        const userStored = localStorage.getItem('user');
        const user = JSON.parse(userStored);
        refRole.current = user.role;
        if (['ADMIN', 'LEADER'].includes(user.role)) {
            onOpenGetUser()
        }
        else {
            alert(`No tienes permisos, eres ${user.role}`);
        }
    }, []);

    return (
        <div>
            {openGetUser && <GetUser
                userRole={refRole.current}
                isOpen={openGetUser}
                onGetUserSuccess={onGetUserSuccess}
                onGetUserError={onGetUserError}
            />}
            {
                refRole.current === 'LEADER' ? (
                    <h2>Lista de Estudiantes</h2>
                ) : (
                    <h2>Lista de Usuarios</h2>
                )
            }
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                refRole.current === 'LEADER' ? (
                                    <TableCell>Nombre</TableCell>
                                ) : (
                                    <>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="right">Apellido</TableCell>
                                        <TableCell align="right">Documento</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                        <TableCell align="right">Rol</TableCell>
                                    </>
                                )
                            }

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {userList.length > 0 && userList.map((u) => (
                            <TableRow
                                key={u._id || u.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    refRole.current === 'LEADER' ? (
                                        <TableCell component="th" scope="row">{u.name}</TableCell>
                                    ) : (
                                        <>
                                            <TableCell align="right">{u.lastName}</TableCell>
                                            <TableCell align="right">{u.documentId}</TableCell>
                                            <TableCell align="right">{u.email}</TableCell>
                                            <TableCell align="right">{u.role}</TableCell>
                                        </>
                                    )
                                }

                                {/* <TableCell align="right">
                                    <Link to={`/proyectos/gestion/editar/${u._id}`}>Editar</Link>
                                </TableCell> */}

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );

};

export default UserList;