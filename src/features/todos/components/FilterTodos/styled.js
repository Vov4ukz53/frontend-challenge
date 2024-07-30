import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
    margin-left: 40px;
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    cursor: pointer;
    transition: color .3s ease-in;
    font-weight: 700;

    &:hover {
        color: ${({theme}) => theme.colors.veryDarkGrayishBlue};
    }

    ${({ active }) => active && css`
        color: ${({theme}) => theme.colors.brightBlue};
   `}
`;