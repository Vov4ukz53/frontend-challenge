import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Paragraph, ClearCompletedButton } from './styled'
import {
  removeCompletedTodo,
  selectDoneTodos,
  selectUndoneTodos,
} from '../../todoSlice'

const TodoListFooter = () => {
  const dispatch = useDispatch();
  const undoneTodos = useSelector(selectUndoneTodos).length;
  const doneTodos = useSelector(selectDoneTodos).length;

  return (
    <Wrapper>
      <Paragraph>{undoneTodos} items left</Paragraph>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <ClearCompletedButton
        disabled={doneTodos === 0}
        onClick={() => dispatch(removeCompletedTodo())}
      >
        Clear Completed
      </ClearCompletedButton>
    </Wrapper>
  )
}

export default TodoListFooter;