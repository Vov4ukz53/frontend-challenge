import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Input, StyledForm } from './styled';
import { addTodo } from '../../todoSlice';

const Form = () => {
  const [newTodoContent, setNewTodoContent] = useState("");
  const dispatch = useDispatch();

  const onTodoInputChange = ({target}) => {
    setNewTodoContent(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const trimedTodoContent = newTodoContent.trim();

    if (trimedTodoContent !== "") {
      dispatch(addTodo({
        content: trimedTodoContent,
        done: false,
        id: nanoid(),
      }));

      setNewTodoContent("");
    }
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Button />
      <Input
        type="text"
        placeholder="Create a new todo..."
        value={newTodoContent}
        onChange={onTodoInputChange}
      />
    </StyledForm>
  )
}

export default Form;