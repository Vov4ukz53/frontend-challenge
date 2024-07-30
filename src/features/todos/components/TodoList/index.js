import { useSelector } from 'react-redux'
import Container from '../../../../common/Container'
import { selectTodo } from '../../todoSlice'
import { TodosWrapper } from './styled'
import TodoItem from '../TodoItem'

const TodoList = () => {
  const todos = useSelector(selectTodo);

  return (
    <main>
      <Container>
        <TodosWrapper>
          {todos.map(todo =>
            <TodoItem {...todo} key={todo.id}/>
          )}
        </TodosWrapper>
      </Container>
    </main>
  )
};

export default TodoList;