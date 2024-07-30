import { useSelector } from 'react-redux'
import Container from '../../../../common/Container'
import { selectTodo } from '../../todoSlice'
import { TodosWrapper, Wrapper } from './styled'
import TodoItem from '../TodoItem'
import TodoListFooter from '../TodoListFooter'

const TodoList = () => {
  const todos = useSelector(selectTodo);

  return (
    <main>
      <Container>
        <Wrapper>
          <TodosWrapper>
            {todos.map(todo =>
              <TodoItem {...todo} key={todo.id}/>
            )}
          </TodosWrapper>
          <TodoListFooter />
        </Wrapper>
      </Container>
    </main>
  )
};

export default TodoList;