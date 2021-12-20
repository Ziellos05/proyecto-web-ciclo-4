/* eslint-disable react-hooks/exhaustive-deps */
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


const UPDATE_USER = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            name
        }
    }
`;

//POSSIBLE DATA TO UPDATE
//      email: String
//     documentId: Float
//     name: String
//     lastName: String
//     fullName: String
//     role: UserRole
//     password: String

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

const UpdateUser = ({ userData, isOpen, onUpdateSuccess, onUpdateError }) => {

    // const { setToken, setUser } = React.useContext(AppContext);
    const { email, documentId, name, lastName, role, password } = userData;

    const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

    
    React.useEffect(() => {
        updateUser({ variables: { input: {email, password, documentId: Number(documentId), name, lastName, role} } });
    }, []);


    React.useEffect(() => {
        if(loading) return;
        if (error) {
            onUpdateError(`Error! ${error}`);
        }
        else if (data && data.updateUser) {
            const userStored = localStorage.getItem('user');
            const user = JSON.parse(userStored);
            localStorage.setItem('user', JSON.stringify({ ...user, ...userData }));

            // setUser({ type: 'LOG_IN', payload: { ...userDecoded.user }})
            // setToken({ type: 'ADD_TOKEN', payload: data.login });
            onUpdateSuccess();
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
                    <CircularProgress style={{marginLeft:25}}/>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Cargando...
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateUser;