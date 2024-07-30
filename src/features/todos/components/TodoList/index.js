import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../../common/Container';
import { selectDoneTodos, selectTodo, selectUndoneTodos } from '../../todoSlice';
import { TodosWrapper, Wrapper } from './styled';
import TodoItem from '../TodoItem';
import TodoListFooter from '../TodoListFooter';

const TodoList = () => {
  const [filterTodos, setFilterTodos] = useState('all');
  const todos = useSelector(selectTodo);
  const doneTodos = useSelector(selectDoneTodos);
  const unDoneTodos = useSelector(selectUndoneTodos);

  const filteredTodos = filterTodos === 'all'
    ? todos
    : filterTodos === 'done'
      ? doneTodos
      : unDoneTodos;

  return (
    <main>
      <Container>
        <Wrapper>
          <TodosWrapper>
            {filteredTodos.map(todo =>
              <TodoItem {...todo} key={todo.id}/>
            )}
          </TodosWrapper>
          <TodoListFooter filter={filterTodos} setFilter={setFilterTodos} />
        </Wrapper>
      </Container>
    </main>
  )
};

export default TodoList;