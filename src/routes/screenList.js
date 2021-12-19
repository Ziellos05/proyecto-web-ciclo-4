import LoginScreen from "../screens/users/login/Login";
import RegisterScreen from "../screens/users/register/Register";
import HomeScreen from "../screens/home/Home";

import AvancesScreen from "../screens/avances/AvancesScreen";
import AvancesProyecto from "../screens/avances/AvancesProyecto";

import ProyectosScreen from '../screens/proyectos/ProyectosScreen';
import GestionProyectos from "../screens/proyectos/gestion/GestionProyectos";
import RegistroProyectos from "../screens/proyectos/registro/RegistroProyectos";
import EditarProyectos from "../screens/proyectos/gestion/EditarProyectos";

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
        id: 'RegistroProyectos',
        path: '/proyectos/registro',
        component: <RegistroProyectos />,
        name: 'Registro Proyectos',
        icon: <ArrowForwardIosIcon />,
    },
    {
        id: 'GestionProyectos',
        path: '/proyectos/gestion',
        component: <GestionProyectos />,
        name: 'Gestión Proyectos',
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
        id: 'AvanceProyecto',
        path: '/avances/proyecto/:id',
        component: <AvancesProyecto />,
    },
    {
        id: 'EditarProyectos',
        path: '/proyectos/gestion/editar/:_id',
        component: <EditarProyectos />,
    },
];