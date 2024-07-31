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
        margin-top: -28px;
        height: 370px;
        max-height: 370px;
    }
`;

export const TodosWrapper = styled.ul`
    overflow-y: auto;
    padding: 0;
    margin: 0;
`;