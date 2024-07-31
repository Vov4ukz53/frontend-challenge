import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
    margin-left: 40px;

    ${({ desktop }) => desktop && css`
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
            display: none;
        }
    `}

    ${({ mobile }) => mobile && css`
        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
            background: ${({ theme }) => theme.colors.veryLightGray}px;
            box-shadow: ${({theme}) => theme.boxShadow.todoWrapper};
            height: 50px;
            width: 100%;
            margin-left: 0;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 16px;
        }

        @media(min-width: ${({ theme }) => theme.breakpoints.mobile}px){
            display: none;
        }
    `}
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    cursor: pointer;
    transition: color .3s ease-in;
    font-weight: 700;
    margin: 0 2px;

    &:hover {
        color: ${({ theme }) => theme.colors.veryDarkGrayishBlue};
    }

    ${({ active }) => active && css`
        color: ${({theme}) => theme.colors.brightBlue};
   `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
    }
`;