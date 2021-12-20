import React, { useState } from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import DrawerContent from './DrawerContent';
import BarNavigator from './BarNavigator';
import { useTheme } from '@mui/material/styles';


const drawerWidth = 205;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth, 
        }, 
    },
}));


// ------------------
// Component
// ------------------

const NavigationContainer = (props) => {

    const theme = useTheme();
    const { window } = props;
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <BarNavigator toggleDrawer={toggleDrawer} />

            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={openDrawer}
                        onClose={toggleDrawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <DrawerContent isDrawerOpen={openDrawer} toggleDrawer={toggleDrawer}/>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        <DrawerContent isDrawerOpen={openDrawer} toggleDrawer={toggleDrawer}/>
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
};
export default NavigationContainer;