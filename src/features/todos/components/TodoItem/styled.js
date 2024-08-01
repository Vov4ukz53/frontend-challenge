import styled, { css } from 'styled-components';
import iconCheck from "./images/icon-check.svg";
import iconRemove from "./images/icon-cross.svg";

export const RemoveButton = styled.button`
    scale: 0;
    transition: scale .3s ease-in;
    cursor: pointer;
    background-image: url("${iconRemove}");
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: center;
    width: 20px;
    height: 20px;
    border: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        scale: 1;
        margin-left: 5px;
        width: 12px;
        height: 11px;
    }
`;

export const TodoWrapper = styled.div`
    cursor: grab;
    height: 63px;
    display: grid;
    grid-template-columns: 70px 1fr 50px;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGrayishBlue};
    
    &:hover {
        ${RemoveButton} {
            scale: 1;
        }
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        height: 53px;
        font-size: 12px;
        grid-template-columns: 50px 1fr 35px;
    }
`;

export const ToggleButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.lightGrayishBlue};
    background: none;
    margin-left: 24px;
    cursor: pointer;
    position: relative;
    
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
    }
    
    &:hover {
        
    }

    ${({ toggledone }) => toggledone && css`
      background: ${({theme}) => theme.colors.hoverButton};
      position: relative;  
        
        &:after {
            content: "";
            background-image: url("${iconCheck}");
            background-repeat: no-repeat;
            background-position: 74% 7px;
            width: 20px;
            height: 20px;
            top: 0;
            left: 0;
            position: absolute;

            @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
                background-position: 45% 5px;
            }
        }
   `};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-left: 20px;
        width: 20px;
        height: 20px;
    }
`;

export const Content = styled.p`
    margin: 0;
    padding-right: 15px;
    max-width: 410px;
    overflow: hidden;

    ${({ done }) => done && css`
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.darkGrayishBlue};
   `}
`;

