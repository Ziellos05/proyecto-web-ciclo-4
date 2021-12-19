import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


const UserForm = ({ isRegisterEnabled, onHandleSubmit }) => {

    const navigate = useNavigate();

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
            student: data.get('student'),
            role: data.get('role'),
        }

        return onHandleSubmit(userData);
    };

    const onPressGoBack = () => {
        navigate("/");
    };

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
                                required
                                fullWidth
                                id="documentId"
                                label="Documento Identidad "
                                name="documentId"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
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
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked name="role" value="STUDENT" color="primary" />}
                                label="ESTUDIANTE"
                            />
                            <FormControlLabel
                                control={<Checkbox name="role" value="LEADER" color="primary" />}
                                label="LIDER"
                            />
                        </Grid>
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