import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 50px;
    border-top: 1px solid ${({theme}) => theme.colors.lightGrayishBlue};
    display: grid;
    grid-template-columns: 150px 1fr 150px;
    align-items: center;
    margin-top: auto;
    font-size: 14px;
    color: ${({theme}) => theme.colors.darkGrayishBlue};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        grid-template-columns: 1fr 1fr;
        font-size: 12px;
    }
`;

export const Paragraph = styled.p`
    margin-left: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
    }
`;

export const ClearCompletedButton = styled.button`
    border: none;
    background: transparent;
    color: ${({theme}) => theme.colors.darkGrayishBlue};
    cursor: pointer;
    transition: color .3s ease-in;
    
    &:disabled {
        cursor: auto;

        &:hover {
            color: ${({theme}) => theme.colors.darkGrayishBlue};
        }
    }

    &:hover {
        color: ${({theme}) => theme.colors.veryDarkGrayishBlue};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding-right: 19px;
        margin-left: auto;
    }
`;