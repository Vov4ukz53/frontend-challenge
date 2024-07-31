import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reorder } from 'framer-motion';
import Container from '../../../../common/Container';
import { TodosWrapper, Wrapper } from './styled';
import TodoItem from '../TodoItem';
import TodoListFooter from '../TodoListFooter';
import { Paragraph } from '../TodoListFooter/styled';
import FilterTodos from '../FilterTodos';
import { saveProductsInLocaleStorage } from '../../useLocaleStorage';
import {
  selectDoneTodos,
  selectTodo,
  selectUndoneTodos,
  updateTodoOrder,
} from '../../todoSlice';

const TodoList = () => {
  const [filterTodos, setFilterTodos] = useState('all');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const doneTodos = useSelector(selectDoneTodos);
  const unDoneTodos = useSelector(selectUndoneTodos);
  let noTodosAdded = false;

  useEffect(() => {
    saveProductsInLocaleStorage(todos);
  }, [todos]);

  const handleReorder = (newOrder) => {
    dispatch(updateTodoOrder(newOrder));
  };

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
            <Reorder.Group axis="y" onReorder={handleReorder} values={todos}>
              {noTodosAdded && <Paragraph>No tasks added, add some...</Paragraph>}
              {filteredTodos.map(todo =>
                <Reorder.Item key={todo.id} value={todo}>
                  <TodoItem {...todo} />
                </Reorder.Item>
              )}
            </Reorder.Group>
          </TodosWrapper>
          <TodoListFooter filter={filterTodos} setFilter={setFilterTodos} />
        </Wrapper>
        <FilterTodos mobile="true" filter={filterTodos} setFilter={setFilterTodos}/>
      </Container>
    </main>
  )
};

export default TodoList;