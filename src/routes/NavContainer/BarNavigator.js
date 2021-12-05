import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
//import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
                     
        },               
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));


const BarNavigator = ({ toggleDrawer }) => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} color='primary' style={{marginBottom:0}}>
            <Toolbar style={{minHeight: 44}} >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleDrawer}
                    className={classes.menuButton}
                >
                   {/*  <MenuIcon /> */}
                </IconButton>                               
            </Toolbar>
        </AppBar>
    )
};
export default BarNavigator;