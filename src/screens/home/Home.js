import * as React from 'react';
import Button from '@mui/material/Button';

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
  const token = localStorage.getItem('token');
  console.log('token', token);

  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <Button variant="contained">Home Screen</Button>
  );
}

export default HomeScreen;