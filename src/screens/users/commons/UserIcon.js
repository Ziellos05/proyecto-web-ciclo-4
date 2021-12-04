import * as React from 'react';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Avatar from '@mui/material/Avatar';

const UserIcon = () => {
    return (
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccessibilityNewIcon />
        </Avatar>
    )
};

export default UserIcon;