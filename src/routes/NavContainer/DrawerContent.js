import React from 'react';
import { useNavigate } from 'react-router-dom';
import { privateListScreen } from '../screenList';
import { ListItem, ListItemIcon, ListItemText, Divider, List } from '@material-ui/core';
import Portrait from './Portrait';
import Button from '@mui/material/Button';
import { AppContext } from '../../context/ContextProvider';

const DrawerContent = ({ isDrawerOpen, toggleDrawer }) => {

    const navigate = useNavigate();
    const { setAuthState, setToken } = React.useContext(AppContext);

    const handleOnClick = (route) => {
        navigate(route);
        if (isDrawerOpen === true) {
            return toggleDrawer();
        }
    };

    const onPressLogOut = () => {
        localStorage.removeItem('token')
        setToken({ type: 'DELETE_TOKEN' });
        setAuthState({ type: 'LOG_OUT', payload: false });
    }
    
    return (
        <>                         
            <Portrait />
            <Divider />
            <List>
                {
                    privateListScreen.map((item, index) => (
                        <ListItem button key={item.id} onClick={() => handleOnClick(item.path)}> 
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))
                }
            </List>
            <Divider />     
            <Button variant='outlined' onClick={onPressLogOut} style={{width: 155, marginTop: 15, alignSelf: 'center'}} >Cerrar Sesión</Button>      
        </>
    );
};
export default DrawerContent;