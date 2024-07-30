import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    hideDone: false,
  },
  reducers: {

  },
});

export default todoSlice.reducer;