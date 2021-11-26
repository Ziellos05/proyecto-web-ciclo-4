import LoginScreen from "../screens/users/login/Login";
import RegisterScreen from "../screens/users/register/Register";
import HomeScreen from "../screens/home/Home";

import AvancesScreen from "../screens/avances/AvancesScreen";
import ProyectosScreen from '../screens/proyectos/ProyectosScreen';
import InscripcionesScreen from '../screens/inscripciones/InscripcionesScreen';

export const publicListScreen = [
    {
        id: 'Login',
        path: '/',
        component: <LoginScreen />,
        name: 'Login',        
        //icon: <HomeIcon />,
    },
    {
        id: 'Register',
        path: '/register',
        component: <RegisterScreen />,
        name: 'Register',        
    },
];

export const privateListScreen = [
    {
        id: 'Home',
        path: '/home',
        component: <HomeScreen />,
        name: 'Home',
    },
    {
        id: 'Proyectos',
        path: '/proyectos',
        component: <ProyectosScreen />,
        name: 'Proyectos',
    },
    {
        id: 'Inscripciones',
        path: '/inscripciones',
        component: <InscripcionesScreen />,
        name: 'Inscripciones',
    },
    {
        id: 'Avances',
        path: '/avances',
        component: <AvancesScreen />,
        name: 'Avances',
    },
];