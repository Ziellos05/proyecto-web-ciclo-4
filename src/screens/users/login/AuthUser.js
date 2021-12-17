import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { AppContext } from '../../../context/ContextProvider';

import {
    useQuery,
    gql
} from "@apollo/client";

const LOG_IN = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password) 
  }
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AuthUser = ({ email: userEmail, password: userPassword, isOpen, onAuthSuccess, onAuthError }) => {

    const { setToken } = React.useContext(AppContext);
    const { loading, error, data } = useQuery(LOG_IN, { variables: { email: userEmail, password: userPassword } });

    React.useEffect(() => {
        if (error) {
            onAuthError(`Error! ${error}`);
        }
        else if (data && data.login) {
            console.log('data', data);
            localStorage.setItem('token', data.login);
            setToken({ type: 'ADD_TOKEN', payload: data.login });
            onAuthSuccess();
        }
    }, [error, data]);

    return (
        <div>
            <Modal
                open={isOpen}
                //onClose={onCloseAuthUser}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CircularProgress />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Cargando...
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default AuthUser;