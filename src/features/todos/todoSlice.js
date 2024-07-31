import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
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
    removeCompletedTodo: (state) => {
      state.todo = state.todo.filter(todo => !todo.done);
    },
    updateTodoOrder: (state, { payload: newOrder }) => {
      state.todo = newOrder;
    },
  },
});

export const {
  addTodo,
  toggleDoneTodo,
  removeTodo,
  removeCompletedTodo,
  updateTodoOrder,
} = todoSlice.actions;

const selectTodoState = state => state.todo;

export const selectTodo = state => selectTodoState(state).todo;

export const selectUndoneTodos = state => state.todo.todo.filter(todo => !todo.done);
export const selectDoneTodos = state => state.todo.todo.filter(todo => todo.done);

export default todoSlice.reducer;