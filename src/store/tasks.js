/**
 * Store: Tasks.js
 * ------------------------------------------------------------------------------
 * Contains a state slice for the tasks functionality.
 *
 */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const tasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {
    updateTasks(state, action) {
      return [...state, ...action.payload];
    },
    addTask(state, { payload: newTask }) {
      state.push({
        content: newTask.content,
        category: newTask.category,
        priority: newTask.priority,
        dateAdded: new Date().toISOString(),
        id: uuidv4(),
      });
    },
    editTask(state, action) {
      const taskToEdit = state.find((task) => task.id === action.payload.id);
      taskToEdit.content = action.payload.content;
    },
    deleteTask(state, action) {
      const updatedTasks = state.filter((task) => task.id !== action.payload);
      return [...updatedTasks];
    },
  },
});

export const taskActions = tasksSlice.actions;
export default tasksSlice.reducer;
