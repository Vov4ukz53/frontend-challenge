import { useDispatch } from 'react-redux';
import { TodoWrapper, ToggleButton, RemoveButton, Content } from './styled';
import { removeTodo, toggleDoneTodo } from '../../todoSlice';

const TodoItem = ({ content, done, id }) => {
  const dispatch = useDispatch();

  return (
    <TodoWrapper>
      <ToggleButton
        toggleDone={done}
        onClick={() => dispatch(toggleDoneTodo(id))}
      />
      <Content done={done}>{ content }</Content>
      <RemoveButton
        onClick={() => dispatch(removeTodo(id))}
      />
    </TodoWrapper>
  )
}

export default TodoItem;