import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Paragraph, ClearCompletedButton } from './styled';
import FilterTodos from '../FilterTodos';
import {
  removeCompletedTodo,
  selectDoneTodos,
  selectUndoneTodos,
} from '../../todoSlice';

const TodoListFooter = ({ filter, setFilter }) => {
  const dispatch = useDispatch();
  const undoneTodos = useSelector(selectUndoneTodos).length;
  const doneTodos = useSelector(selectDoneTodos).length;

  return (
    <Wrapper>
      <Paragraph>{undoneTodos} items left</Paragraph>
      <FilterTodos filter={filter} setFilter={setFilter}/>
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