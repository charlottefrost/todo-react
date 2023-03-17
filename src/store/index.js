/**
 * Store: index.js
 * ------------------------------------------------------------------------------
 * Configuration for the redux store.
 *
 */
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../store/tasks';
import categoriesReducer from '../store/categories';

const store = configureStore({
  reducer: { tasks: tasksReducer, categories: categoriesReducer },
});

export default store;
