import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    hideDone: false,
  },
  reducers: {
    addTodo: ({ todo }, { payload: newTodo }) => {
      todo.push(newTodo);
    },
  },
});

export const {addTodo} = todoSlice.actions;

const selectTodoState = state => state.todo;

export const selectTodo = state => selectTodoState(state).todo;

export default todoSlice.reducer;