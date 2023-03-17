/**
 * App.js
 * ------------------------------------------------------------------------------
 * Main component file.
 *
 */
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from './store/tasks';
import { categoryActions } from './store/categories';
import { persist, getStorageItem } from './helpers/storage';
import {
  STORAGE_KEY_TASKS,
  STORAGE_KEY_CAT,
  STORAGE_KEY_CURRENT_CAT,
} from './helpers/config';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import TaskView from './components/TaskView';
import './styles/App.scss';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const categories = useSelector((state) => state.categories);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  /**
   * Get items from local storage
   */
  useEffect(() => {
    const storageTasks = getStorageItem(STORAGE_KEY_TASKS);
    const storageCategories = getStorageItem(STORAGE_KEY_CAT);
    const storageCurrentCat = getStorageItem(STORAGE_KEY_CURRENT_CAT);

    if (!storageTasks || !storageCategories) {
      return;
    }

    dispatch(taskActions.updateTasks(storageTasks));
    dispatch(
      categoryActions.updateCategories({
        categories: storageCategories,
        current: storageCurrentCat,
      })
    );
  }, [dispatch]);

  /**
   * Set local storage
   */
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    persist(STORAGE_KEY_TASKS, tasks);
    persist(STORAGE_KEY_CAT, categories.categories);
    persist(STORAGE_KEY_CURRENT_CAT, currentCategory);
  }, [tasks, categories, currentCategory]);

  return (
    <Fragment>
      <Header />
      <main>
        <TaskView />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
