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
    width: 20px;
    height: 20px;
    border: none;
`;

export const TodoWrapper = styled.li`
    height: 65px;
    display: grid;
    grid-template-columns: 70px 1fr 50px;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGrayishBlue};
    
    &:hover {
        ${RemoveButton} {
            scale: 1;
        }
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
        }
   `}
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

