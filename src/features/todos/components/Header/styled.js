import styled from 'styled-components';
import backgroundDesktopImage from "./images/bg-desktop-light.jpg";
import backgroundMobileImage from "./images/bg-mobile-light.jpg";

export const HeaderWrapper = styled.header`
    background-image: url(${backgroundDesktopImage});
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    min-height: 300px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        background-image: url(${backgroundMobileImage});
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 73px;
    margin-bottom: 42px;
`;

export const Title = styled.h1`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.45em;
    color: ${({theme}) => theme.colors.veryLightGray};
    font-size: 38px;
`;