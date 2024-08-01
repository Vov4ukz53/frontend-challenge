import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    text-align: center;
    font-size: 14px;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    margin-top: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: 22px;
    }
`;

export const FooterText = styled.p`
    margin: 0;
    padding: 20px;
    margin-right: -3px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 14px;
        padding-left: 5px;
        margin-right: 0;
    }
`;