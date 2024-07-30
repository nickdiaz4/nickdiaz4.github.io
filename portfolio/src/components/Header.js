import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const FadeIn = styled.div`animation: 2.7s; animation-name: ${keyframes`${fadeIn}`}; animation-iteration-count: 1`;

export default class Header extends Component {
    render() {
        return (
            <FadeIn>
                <AppBar position="static">
                    <Toolbar sx={{
                        backgroundColor:'black',
                        color: '#e09d82',
                        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                        fontSize: '20px'
                    }}>
                        <Link to='/'><Button sx={{
                            color:"inherit",
                            fontFamily: 'inherit',
                            fontSize:'inherit'
                        }}>Home</Button></Link>
                        <Link to='/certifications'><Button sx={{
                            color:"inherit",
                            fontFamily: 'inherit',
                            fontSize:'inherit'                            
                        }}>Certifications</Button></Link>
                    </Toolbar>
                </AppBar> 
            </FadeIn>
        );
    }
       
}