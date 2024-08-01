import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
    margin-left: 34px;

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

        @media(max-width: ${({ theme }) => theme.breakpoints.small}px){
            max-width: 326px;
            padding: 2px 0 0 1px;
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
        font-size: 14px;
        margin: 0 3px;
    }
`;