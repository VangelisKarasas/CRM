import React from 'react'
import HomeIcon from '@material-ui/icons/Home'; 
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ConstructionIcon from '@mui/icons-material/Construction';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export const  NavBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Clients",
        icon: <AccessibilityIcon />,
        link: "/"
    },
    {
        title: "Settings",
        icon: <ConstructionIcon />,
        link: "/Add"
    },
    {
        title: "Log-Off",
        icon: <MeetingRoomIcon />,
        link: "/LogOut"
    }


]