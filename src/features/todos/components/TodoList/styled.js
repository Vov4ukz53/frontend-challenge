import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 440px;
    max-height: 440px;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.boxShadow.todoWrapper};
    margin-top: -53px;
    background: ${({theme}) => theme.colors.veryLightGray};
    display: flex;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        margin-top: -30px;
        height: 367px;
        max-height: 370px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px){
        max-width: 326px;
    }
    
    ul {
        margin: 0;
        padding: 0;
        height: 372px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
            height: 308px;
        }
    }
`;

export const TodosWrapper = styled.div`
    overflow-y: auto;
    padding: 0;
    margin: 0;
`;