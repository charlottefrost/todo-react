/**
 * TaskItem.js
 * ------------------------------------------------------------------------------
 * Task item component file.
 *
 */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/tasks';
import { categoryActions } from '../store/categories';

function TaskItem(props) {
  const [taskText, setTaskText] = useState(props.task);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  /**
   * Set task input value
   */
  function handleInputChange(event) {
    setTaskText(event.target.value);
  }

  /**
   * Update task content in state
   */
  function handleInputBlur() {
    dispatch(taskActions.editTask({ id: props.id, content: taskText }));
  }

  /**
   * Delete task from state
   * Also delete category if not in use
   */
  function deleteTaskHandler() {
    // Check if this category is used by other tasks
    const categoryInUse = tasks.find(
      (task) => task.category === props.category && task.id !== props.id
    );

    dispatch(taskActions.deleteTask(props.id));

    if (!categoryInUse) {
      dispatch(categoryActions.deleteCategory(props.category));
    }
  }

  return (
    <li className="task">
      <button className="task__btn" onClick={deleteTaskHandler}>
        <span className="visually-hidden">Mark done</span>
      </button>
      <input
        className="task__desc no-focus-border"
        type="text"
        value={taskText}
        aria-label="task"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <span className={`task__label task__label--${props.priority}`}>
        {props.priority}
      </span>
    </li>
  );
}

export default TaskItem;
