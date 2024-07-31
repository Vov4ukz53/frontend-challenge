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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        height: 49px;
        font-size: 12px;
        padding: 0 50px;
    }
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
    transition: all .3s ease;
    
    &:hover:before {
        content: '';
        width: 100%;
        height: 100%;
        border-top: 1px solid hsl(192, 100%, 67%);
        border-bottom: 1px solid hsl(280, 87%, 65%);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .3s ease;
    }
    
    &:active {
        scale: 0.8;
        background: ${({theme}) => theme.colors.hoverButton};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        top: 15px;
        left: 20px;
        width: 20px;
        height: 20px;
    }
`;