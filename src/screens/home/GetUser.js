import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { AppContext } from '../../context/ContextProvider';

import {
    useQuery,
    gql
} from "@apollo/client";

const GET_ALL_USERS = gql`
  query AllUsers {
    allUsers {
      _id
      email
      documentId
      name
      lastName
      fullName
      role
      status
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

const GetUser = ({ isOpen, onGetUserSuccess, onGetUserError }) => {

    const { user, setUser } = React.useContext(AppContext);
    const { loading, error, data } = useQuery(GET_ALL_USERS);


    React.useEffect(() => {
        if (loading) return;
        if (error) {
            console.log('current User', user);
            localStorage.setItem('user', JSON.stringify(user));
            onGetUserError(`Error! ${error}`);
        }
        else if (data && data.allUsers) {
            // console.log('allUsers ', data.allUsers);
            const userFound = data.allUsers.find(element => element.email === user.email);
            if (userFound) {
                console.log('current User', { ...user, ...userFound });
                localStorage.setItem('user', JSON.stringify({...user, ...userFound} ));
                setUser({ type: 'LOG_IN', payload: { ...userFound}})
                onGetUserSuccess()
            } 
            else {
                onGetUserError(`Error! User not found`);
            }
            
        }
        
    }, [error, data])


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
                        Cargando Usuario...
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default GetUser;