import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
// import { AppContext } from '../../../context/ContextProvider';

import {
    useMutation,
    gql
} from "@apollo/client";


// Define mutation
// const REGISTER_USER = gql`
//   mutation Register($input: RegisterInput!) {
//     register(email: $email, documentId: $documentId, name: $name, lastName: $lastName, role: $role, password: $password) 
//   }
// `;

// const REGISTER_U = gql`
//     mutation Register($input: RegisterInput!) {
//         register(email: $email, documentId: $documentId, name: $name, lastName: $lastName, role: $role, password: $password ) {
//             email
//         }
//     }
// `;

const REGISTER_USER = gql`
    mutation Register($input: RegisterInput!) {
        register(input: $input) {
            _id
        }
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

const RegisterUser = ({ isOpen, onRegisterSuccess, onRegisterError, userData }) => {

    // const { setToken } = React.useContext(AppContext);
    // const { loading, error, data } = useQuery(LOG_IN, { variables: { email: userEmail, password: userPassword } });
    const { email, documentId, name, lastName, role, password } = userData;


    const [register, { data, loading, error }] = useMutation(REGISTER_USER);

    React.useEffect(() => {
        register({ variables: { input: {email, password, documentId: Number(documentId), name, lastName, role} } });
    }, []);

    React.useEffect(() => {
        if (loading) return;
        if (error) {
            onRegisterError(`Error! ${error}`);
        }
        else if (data && data.register) {
            console.log('register data', data);
            // localStorage.setItem('token', data.login);
            // setToken({ type: 'ADD_TOKEN', payload: data.login });
            onRegisterSuccess();
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
                <Box sx={style} >
                    <CircularProgress style={{ marginLeft: 25 }} />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Cargando...
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default RegisterUser;