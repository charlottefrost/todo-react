/**
 * TaskView.js
 * ------------------------------------------------------------------------------
 * Task view component file.
 * Outputs the main page view - including filters, task list, add task form.
 *
 */
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Filters from './Filters';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

function TaskView() {
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const initialTasks = useSelector((state) => state.tasks);
  const [tasks, setTasks] = useState(initialTasks);

  /**
   * Set tasks to show
   */
  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  /**
   * Update tasks to show depending on the selected category
   */
  useEffect(() => {
    if (currentCategory !== 'all') {
      const matchingTasks = initialTasks.filter(
        (task) => task.category === currentCategory
      );
      setTasks(matchingTasks);
    } else {
      setTasks(initialTasks);
    }
  }, [currentCategory, initialTasks]);

  /**
   * Set tasks to sorted list from filters
   */
  function handleFilter(sortedTasks) {
    setTasks(sortedTasks);
  }

  return (
    <Fragment>
      <Filters tasks={tasks} onFilter={handleFilter} />
      <section className="task-view">
        <TaskList tasks={tasks} />
        <AddTaskForm />
      </section>
    </Fragment>
  );
}

export default TaskView;
