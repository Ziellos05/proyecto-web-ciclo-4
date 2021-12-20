import React from 'react';
// import Button from '@mui/material/Button';
// import GetUser from './GetUser';



// const HomeScreen = () => {
  
//   const [openGetUser, setOpenGetUser] = React.useState(true);

//   const onOpenGetUser = () => setOpenGetUser(true);
//   const onCloseGetUser = () => setOpenGetUser(false);

//   const onGetUserSuccess = () => {
//     onCloseGetUser();
//   }

//   const onGetUserError = (error) => {
//     onCloseGetUser();
//     alert(error);
//   }

//   React.useEffect(() => {
//     const token = localStorage.getItem('token');
//     console.log('token', token);

//     const user = localStorage.getItem('user');
//     console.log('current user', JSON.parse(user));
//   }, [])

//   return (
//     <>
//       <Button variant="contained">Los REACTivos</Button>
//       {/* {openGetUser && <GetUser 
//             isOpen={openGetUser} 
//             onGetUserSuccess={onGetUserSuccess}
//             onGetUserError={onGetUserError}
//       />} */}
//     </>
//   );
// }

// export default HomeScreen;