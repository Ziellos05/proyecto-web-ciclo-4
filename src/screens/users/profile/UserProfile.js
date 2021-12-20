import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import UserIcon from '../commons/UserIcon';
import UserForm from '../commons/UserForm';
import UpdateUser from './UpdateUser';

const UserProfile = () => {

    const navigate = useNavigate();

    const [openUpdateUser, setOpenUpdateUser] = React.useState(false);

    const onOpenUpdateUser = () => setOpenUpdateUser(true);
    const onCloseUpdateUser = () => setOpenUpdateUser(false);

    const refUserData = React.useRef({});

    const onUpdateSuccess = () => {
        onCloseUpdateUser();
        alert('Se actualizó usuario!');
        setTimeout(() => {
            navigate('/home', { replace: true });
        }, 100);
    };

    const onUpdateError = (error) => {
        onCloseUpdateUser();
        alert(error);
    };

    const onHandleSubmit = (userData) => {
        refUserData.current = userData;
        onOpenUpdateUser();
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
                {openUpdateUser && <UpdateUser
                    userData={refUserData.current}
                    isOpen={openUpdateUser}
                    onUpdateSuccess={onUpdateSuccess}
                    onUpdateError={onUpdateError}
                />}
                <UserIcon />
                <Typography component="h1" variant="h5">
                    Actualizar Datos
                </Typography>

                <UserForm onHandleSubmit={onHandleSubmit} />

            </Box>
        </>
    );
}

export default UserProfile;