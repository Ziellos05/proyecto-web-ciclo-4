import LoginScreen from "../screens/users/login/Login";
import RegisterScreen from "../screens/users/register/Register";
import HomeScreen from "../screens/home/Home";

import AvancesScreen from "../screens/avances/AvancesScreen";
import EditAvance from "../screens/avances/EditAvance";
import ProyectosScreen from '../screens/proyectos/ProyectosScreen';
import InscripcionesScreen from '../screens/inscripciones/InscripcionesScreen';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const publicListScreen = [
    {
        id: 'Login',
        path: '/',
        component: <LoginScreen />,
        name: 'Login',        
        icon: <></>,
    },
    {
        id: 'Register',
        path: '/register',
        component: <RegisterScreen />,
        name: 'Register', 
        icon: <></>,       
    },
];

export const privateListScreen = [
    {
        id: 'Home',
        path: '/home',
        component: <HomeScreen />,
        name: 'Home',
        icon: <ArrowForwardIosIcon />,
    },
    {
        id: 'Proyectos',
        path: '/proyectos',
        component: <ProyectosScreen />,
        name: 'Proyectos',
        icon: <ArrowForwardIosIcon />,
    },
    {
        id: 'Inscripciones',
        path: '/inscripciones',
        component: <InscripcionesScreen />,
        name: 'Inscripciones',
        icon: <ArrowForwardIosIcon />,
    },
    {
        id: 'Avances',
        path: '/avances',
        component: <AvancesScreen />,
        name: 'Avances',
        icon: <ArrowForwardIosIcon />,
    },
        {
        id: 'EditAvance',
        path: '/editaravance/:id',
        component: <EditAvance />,
    },
];