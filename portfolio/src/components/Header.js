import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 2.7s; animation-name: ${keyframes`${fadeIn}`}; animation-iteration-count: 1`;

export default class Header extends Component {
    render() {
        return (
            <FadeIn>
                <h1>Welcome!</h1>  
            </FadeIn>
        );
    }
       
}