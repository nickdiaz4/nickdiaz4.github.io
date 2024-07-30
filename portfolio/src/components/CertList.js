import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';


const FadeIn = styled.div`animation: 6s; animation-name: ${keyframes`${fadeIn}`}; animation-iteration-count: 1`;

export default function CertList() {
  return (
    <FadeIn>
        <Box 
            sx={{ 
                width: '100%', 
                maxWidth: 360, 
                bgcolor: '#1a1b1c',
                color:'#e09d82',
                marginTop:'7%',
                marginLeft:'auto',
                marginRight:'auto',
                borderRadius:2,
                fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}>
        <nav aria-label="main mailbox folders">
            <List>
            <ListItem disablePadding>
                <ListItemButton  a href='/certs/CompTIA Security+ ce certificate.pdf' target='_blank'>
                <ListItemText primary="CompTIA Security+" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton a href='/certs/AWS Certified Cloud Practitioner certificate.pdf' target='_blank'>
                <ListItemText primary="AWS Certified Cloud Practitioner" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton a href='/certs/IBM CyS Analyst certification.pdf' target='_blank'>
                <ListItemText primary="IBM Cybersecurity Analyst" />
                </ListItemButton>
            </ListItem>
            </List>
        </nav>
        <Divider />
        </Box>
    </FadeIn>
  );
}
