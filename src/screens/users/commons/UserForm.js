/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const ADMIN = 'ADMIN';
const LEADER = 'LEADER';
const STUDENT = 'STUDENT';


export const USER_ROLES = {
    [ADMIN]: ADMIN,
    [LEADER]: LEADER,
    [STUDENT]: STUDENT
};


const UserForm = ({ isRegisterEnabled, onHandleSubmit }) => {

    const navigate = useNavigate();

    const [isLeaderChecked, setIsLeaderChecked] = React.useState(false);
    const [isStudentChecked, setIsStudentChecked] = React.useState(true);

    const [isAdmin, setIsAdmin] = React.useState(false);

    const initialState = {
        documentId: 0,
        email: '',
        fullName: '',
        lastName: '',
        name: '',
        password: '',
        role: '',
        _id: ''
    };

    const [userProfile, setUserProfile] = React.useState(initialState);

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log(event.currentTarget);
        // console.log(data);

        const userData = {
            name: data.get('name'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            documentId: data.get('documentId'),
            role: data.get('role'),
        }

        if (!isRegisterEnabled) {
            return onHandleSubmit({ ...userProfile, role: isLeaderChecked ? LEADER : STUDENT });
        }

        return onHandleSubmit(userData);
    };

    const onPressGoBack = () => {
        navigate("/");
    };

    const handleLeaderChange = (event) => {
        if (isStudentChecked) {
            setIsStudentChecked(false);
        }
        setIsLeaderChecked(event.target.checked);
    };

    const handleStudentChange = (event) => {
        if (isLeaderChecked) {
            setIsLeaderChecked(false);
        }
        setIsStudentChecked(event.target.checked);
    };

    // -------
    //
    // -------

    const onChangeName = (event) => {
        setUserProfile(prevState => ({ ...prevState, name: event.target.value  }));
    };

    const onChangeLastName = (event) => {
        setUserProfile(prevState => ({ ...prevState, lastName: event.target.value  }));
    };

    const onChangeDocId = (event) => {
        setUserProfile(prevState => ({ ...prevState, documentId: event.target.value  }));
    };

    const onChangeEmail = (event) => {
        setUserProfile(prevState => ({ ...prevState, email: event.target.value  }));
    };

    const onChangePassword = (event) => {
        setUserProfile(prevState => ({ ...prevState, password: event.target.value  }));
    };

    React.useEffect(() => {
        if (!isRegisterEnabled) {
            const userStored = localStorage.getItem('user');
            const currentUser = JSON.parse(userStored)
            console.log('current user', currentUser);

            setUserProfile(prevState => ({ ...prevState, ...currentUser }));

            if (currentUser.role === LEADER) {
                setIsLeaderChecked(true);
                setIsStudentChecked(false);
            }
            else if (currentUser.role === STUDENT) {
                setIsLeaderChecked(false);
                setIsStudentChecked(true);
            }
            else {
                setIsAdmin(true);
            }
        }
    }, [])

    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={onChangeName}
                                value={userProfile.name}
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Nombres"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={onChangeLastName}
                                value={userProfile.lastName}
                                required
                                fullWidth
                                id="lastName"
                                label="Apellidos"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChangeDocId}
                                value={userProfile.documentId || ''}
                                required
                                fullWidth
                                id="documentId"
                                label="Documento Identidad "
                                name="documentId"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChangeEmail}
                                value={userProfile.email}
                                required
                                fullWidth
                                id="email"
                                label="Correo Electrónico"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChangePassword}
                                value={userProfile.password}
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        {
                            isAdmin ? (
                                <h2>Eres Administrador</h2>
                            ) : (
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox name="role" value="STUDENT" color="primary" checked={isStudentChecked} onChange={handleStudentChange} />}
                                        label="ESTUDIANTE"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="role" value="LEADER" color="primary" checked={isLeaderChecked} onChange={handleLeaderChange} />}
                                        label="LIDER"
                                    />
                                </Grid>
                            )
                        }

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isRegisterEnabled ? 'Registrarse' : 'Actualizar'}
                    </Button>

                    {
                        isRegisterEnabled &&
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    onClick={onPressGoBack}
                                >
                                    Ya tienes una cuenta? Inicia Sesión
                                </Link>
                            </Grid>
                        </Grid>
                    }

                </Box>
            </Box>
        </>
    );
}

export default UserForm;