import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';
import Card from '@mui/joy/Card'
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material'
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import IconButton from '@mui/joy/IconButton';
import CardActions from '@mui/joy/CardActions';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const FadeIn = styled.div`animation: 6s; animation-name: ${keyframes`${fadeIn}`}; animation-iteration-count: 1`;

export default class ContentCard extends Component {
    render() {
        return (
            <FadeIn>
                <Card variant='plain'
                    sx={{
                        width: '120',
                        overflow: 'auto',
                        color: '#e09d82',
                        backgroundColor: 'inherit',
                        borderColor: '#e09d82',
                        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                    }}
                >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Avatar src="/images/av.jpg" sx={{width: 48, height: 48}} />
                </Box>
                <CardContent>
                    <h2>Hi, I'm Nick Diaz!</h2>
                    <Typography level="body-sm" fontFamily={"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}>
                        I graduated from Winthrop University in 2023 with a B.S. in Computer Science. <br/>
                        I hold the following certifications: CompTIA Security+, AWS Certified Cloud Practitioner, and IBM Cybersecurity Analyst Professional Certification.
                        Validate them above!
                        <br/>My current tech stack includes Java, C#, C++, Python, HTML, CSS, JavaScript, & SQL.<br/>
                        I'm also knowledgeable of the following libraries & frameworks: 
                        Spring, Javalin, JDBC, JUnit, AWS, & (some) React. <br/>
                        I am open to work as a Software Developer or a Security Analyst/Engineer/Architect. <br/>
                        Check out the links below to contact me & to see some of my projects!
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton component='a' href='https://linkedin.com/in/diaz-nicholas'  sx={{marginLeft: 'auto', marginRight:'auto', color: '#da7249', backgroundColor: "transparent" ,":hover": {color: "#49acda", background:"transparent"} }}>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton component='a' href='https://github.com/nickdiaz4' sx={{marginLeft: 'auto', marginRight:'auto', color: '#da7249', ":hover": {color: "#49acda", background:"transparent"}}}>
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton component='a' href='mailto:nickjimenez2014@gmail.com' sx={{marginLeft: 'auto', marginRight:'auto', color: '#da7249', ":hover": {color: "#49acda", background:"transparent"}}}>
                        <EmailIcon/>
                    </IconButton>
                </CardActions>
                </Card>            
            </FadeIn>
        );
    }
       
}