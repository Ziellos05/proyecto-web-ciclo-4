import React from 'react';
import Button from '@mui/material/Button';


const HomeScreen = () => {
  

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token', token);

    const user = localStorage.getItem('user');
    console.log('current user', JSON.parse(user));
  }, [])

  return (
    <>
      <Button variant="contained">Los REACTivos</Button>
    </>
  );
}

export default HomeScreen;