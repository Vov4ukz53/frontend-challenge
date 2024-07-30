import { TodoWrapper, ToggleButton, RemoveButton, Content } from './styled';

const TodoItem = ({content, done}) => {

  return (
    <TodoWrapper>
      <ToggleButton toggleDone={done}/>
      <Content>{content}</Content>
      <RemoveButton />
    </TodoWrapper>
  )
}

export default TodoItem;