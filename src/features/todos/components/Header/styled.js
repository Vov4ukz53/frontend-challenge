import styled from 'styled-components';
import backgroundDesktopImage from "./images/bg-desktop-light.jpg";
import backgroundMobileImage from "./images/bg-mobile-light.jpg";
import { ReactComponent as MoonIcon } from './images/icon-moon.svg';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 300px;
    background-image: url(${backgroundDesktopImage});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 200px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        background-image: url(${backgroundMobileImage});
        height: 200px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 76px;
    margin-bottom: 38px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding-top: 45px;
        margin-bottom: 35px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px){
        margin-bottom: 32px;
    }
`;

export const Title = styled.h1`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.43em;
    color: ${({theme}) => theme.colors.veryLightGray};
    font-size: 38px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 26px;
        letter-spacing: 0.4em;
    }
`;

export const StyledMoonIcon = styled(MoonIcon)`
    margin-top: -5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        scale: 0.8;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px){
        margin-right: 15px;
    }
`;
