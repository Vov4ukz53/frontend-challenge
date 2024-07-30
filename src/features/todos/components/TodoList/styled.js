import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 400px;
    max-height: 450px;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.boxShadow.todoWrapper};
    margin-top: -53px;
    background: ${({theme}) => theme.colors.veryLightGray};
    display: flex;
    flex-direction: column;
`;

export const TodosWrapper = styled.ul`
    overflow-y: auto;
    padding: 0;
    margin: 0;
`;