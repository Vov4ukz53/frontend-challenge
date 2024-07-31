import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../../../common/Container';
import { selectDoneTodos, selectTodo, selectUndoneTodos } from '../../todoSlice';
import { TodosWrapper, Wrapper } from './styled';
import TodoItem from '../TodoItem';
import TodoListFooter from '../TodoListFooter';
import { Paragraph } from '../TodoListFooter/styled';
import FilterTodos from '../FilterTodos'

const TodoList = () => {
  const [filterTodos, setFilterTodos] = useState('all');
  const todos = useSelector(selectTodo);
  const doneTodos = useSelector(selectDoneTodos);
  const unDoneTodos = useSelector(selectUndoneTodos);
  let noTodosAdded = false;

  const filteredTodos = filterTodos === 'all'
    ? todos
    : filterTodos === 'done'
      ? doneTodos
      : unDoneTodos;

  if (todos.length === 0) {
    noTodosAdded = true;
  }

  return (
    <main>
      <Container>
        <Wrapper>
          <TodosWrapper>
            {noTodosAdded && <Paragraph>No tasks added, add some...</Paragraph>}
            {filteredTodos.map(todo =>
              <TodoItem {...todo} key={todo.id}/>
            )}
          </TodosWrapper>
          <TodoListFooter filter={filterTodos} setFilter={setFilterTodos} />
        </Wrapper>
        <FilterTodos mobile="true" filter={filterTodos} setFilter={setFilterTodos}/>
      </Container>
    </main>
  )
};

export default TodoList;