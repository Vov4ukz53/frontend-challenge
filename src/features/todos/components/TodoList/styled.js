import styled from 'styled-components';

export const TodosWrapper = styled.ul`
    height: 400px;
    max-height: 450px;
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.boxShadow.todoWrapper};
    margin-top: -53px;
    background: ${({theme}) => theme.colors.veryLightGray};
    overflow-y: auto;
`;