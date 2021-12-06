import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Footer = (props) => {
    return (
        <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center" 
            {...props}
        >
            {'MinTIC UdeA: Ciclo 4 WEB - '}
            <Link 
                target="_blank" 
                rel="noreferrer" 
                color="inherit" 
                href="https://github.com/GiovanniGal/proyecto-web-ciclo-4.git"
            >
                Los REACTivos
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;