import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    text-align: center;
    font-size: 14px;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    margin-top: 30px;
`;

export const FooterText = styled.p`
    margin: 0;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
    }
`;