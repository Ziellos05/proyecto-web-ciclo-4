import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import Footer from '../commons/Footer';
import UserIcon from '../commons/UserIcon';
import UserForm from '../commons/UserForm';
import RegisterUser from './RegisterUser';
import { AppContext } from '../../../context/ContextProvider';


const RegisterScreen = () => {

  const navigate = useNavigate();

  // const { setUser } = React.useContext(AppContext);


  const [openRegisterUser, setOpenRegisterUser] = React.useState(false);
  const onOpenRegisterUser = () => setOpenRegisterUser(true);
  const onCloseRegisterUser = () => setOpenRegisterUser(false);

  const refUserData = React.useRef({});

  const onHandleSubmit = (userData) => {

    console.log('userData', userData);
    refUserData.current = userData;
    return onOpenRegisterUser();
  };

  const onRegisterSuccess = () => {
    onCloseRegisterUser();
    //setUser({ type: 'LOG_IN', payload: { ...refUserData.current }})
    alert(`Usuario creado!, Ingresa con tu cuenta`);
    navigate("/", { replace: true });

    // setTimeout(() => {
    //   setAuthState({ type: 'LOG_IN', payload: true });
    // }, 500);
  };

  const onRegisterError = (error) => {
    onCloseRegisterUser();
    alert(error);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {openRegisterUser && <RegisterUser 
            userData={refUserData.current}
            isOpen={openRegisterUser} 
            onRegisterSuccess={onRegisterSuccess}
            onRegisterError={onRegisterError}
          />}
          <UserIcon />
          <Typography component="h1" variant="h5">
            Crear Cuenta
          </Typography>
          
          <UserForm isRegisterEnabled onHandleSubmit={onHandleSubmit} />
          
        </Box>
        <Footer sx={{ mt: 5 }} />
      </Container>
    </>
  );
}

export default RegisterScreen;