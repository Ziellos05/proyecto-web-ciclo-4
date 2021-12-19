import React from 'react';
import Button from '@mui/material/Button';
import GetUser from './GetUser';

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

const HomeScreen = () => {
  
  const [openGetUser, setOpenGetUser] = React.useState(true);

  const onOpenGetUser = () => setOpenGetUser(true);
  const onCloseGetUser = () => setOpenGetUser(false);

  const onGetUserSuccess = () => {
    onCloseGetUser();
  }

  const onGetUserError = (error) => {
    onCloseGetUser();
    alert(error);
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token', token);
  }, [])

  return (
    <>
      <Button variant="contained">Los REACTivos</Button>
      {openGetUser && <GetUser 
            isOpen={openGetUser} 
            onGetUserSuccess={onGetUserSuccess}
            onGetUserError={onGetUserError}
      />}
    </>
  );
}

export default HomeScreen;