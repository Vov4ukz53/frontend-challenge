import { useDispatch } from 'react-redux';
import { TodoWrapper, ToggleButton, RemoveButton, Content } from './styled';
import { removeTodo, toggleDoneTodo } from '../../todoSlice';

const TodoItem = ({ content, done, id }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <ToggleButton
        toggledone={done ? "true" : undefined}
        onClick={() => dispatch(toggleDoneTodo(id))}
      />
      <Content done={done ? "true" : undefined}>{ content }</Content>
      <RemoveButton
        onClick={() => dispatch(removeTodo(id))}
      />
    </TodoWrapper>
  )
}

export default TodoItem;