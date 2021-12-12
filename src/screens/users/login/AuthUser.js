import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

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


    const { loading, error, data } = useQuery(LOG_IN, { variables: { email: userEmail, password: userPassword } });

    React.useEffect(() => {
        if (error) {
            onAuthError(`Error! ${error}`);
        }
        else if (data && data.login) {
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