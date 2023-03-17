/**
 * Store: Categories.js
 * ------------------------------------------------------------------------------
 * Contains a state slice for the categories functionality.
 *
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { categories: [], currentCategory: 'all' };

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    updateCategories(state, action) {
      state.categories = [...action.payload.categories];
      state.currentCategory = action.payload.current;
      // return [...state, ...action.payload];
    },
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    deleteCategory(state, action) {
      const updatedCategories = state.categories.filter(
        (category) => category !== action.payload
      );
      state.categories = [...updatedCategories];
    },
    setCurrent(state, action) {
      state.currentCategory = action.payload;
    },
  },
});

export const categoryActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
