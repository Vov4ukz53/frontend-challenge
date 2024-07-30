import styled from 'styled-components';

export const StyledForm = styled.form`
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 65px;
    border-radius: 5px;
    border: none;
    padding: 0 73px;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
`;

export const Button = styled.button`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.lightGrayishBlue};
    z-index: 1;
    background: none;
    top: 19px;
    left: 24px;
    overflow: hidden;
    cursor: pointer;
    transition: border, scale .3s ease;
    
    &:hover {
        border: 1px solid ${({theme}) => theme.colors.veryDarkGrayishBlue};
    }
    
    &:active {
        scale: 0.8;
    }
`;