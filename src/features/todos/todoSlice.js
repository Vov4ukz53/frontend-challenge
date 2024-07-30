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
    toggleDoneTodo: ({ todo }, { payload: productId}) => {
      const index = todo.findIndex(todo => todo.id === productId);
      todo[index].done = !todo[index].done;
    },
    removeTodo: ({ todo }, { payload: todoId }) => {
      const index = todo.findIndex(todo => todo.id === todoId);
      todo.splice(index, 1);
    },
  },
});

export const {
  addTodo,
  toggleDoneTodo,
  removeTodo
} = todoSlice.actions;

const selectTodoState = state => state.todo;

export const selectTodo = state => selectTodoState(state).todo;

export default todoSlice.reducer;