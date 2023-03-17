/**
 * AddTaskForm.js
 * ------------------------------------------------------------------------------
 * Add task form component file.
 *
 */
import { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../store/tasks';
import { categoryActions } from '../store/categories';

import IconButton from './ui/buttons/IconButton';
import FormGroup from './ui/FormGroup';
import Button from './ui/buttons/Button';
import Input from './ui/Input';

function AddTaskForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );

  /**
   * Reset form if the current category changes
   */
  useEffect(() => {
    resetForm();
  }, [currentCategory]);

  /**
   * Toggle form
   */
  function handleAddTaskBtn() {
    setFormVisible(!formVisible);
  }

  /**
   * Set task input value
   * @param {Object} - event
   */
  function handleTaskInput(event) {
    setTask(event.target.value);
  }

  /**
   * Set category input value
   * @param {Object} - event
   */
  function handleCategoryInput(event) {
    setCategory(event.target.value);
  }

  /**
   * Set priority input value
   * @param {Object} - event
   */
  function handlePriorityInput(event) {
    setPriority(event.target.value);
  }

  /**
   * Submit form
   * @param {Object} - event
   */
  function submitHandler(event) {
    event.preventDefault();
    let sanitisedCategory = category.toLowerCase().trim();
    if (sanitisedCategory === '') sanitisedCategory = 'uncategorised';

    // Add task to state
    dispatch(
      taskActions.addTask({
        content: task,
        category: sanitisedCategory,
        priority,
      })
    );

    // Add category to state if it doesn't already exist
    if (!categories.categories.includes(sanitisedCategory)) {
      dispatch(categoryActions.addCategory(sanitisedCategory));
    }

    resetForm();
  }

  /**
   * Reset form
   */
  function resetForm() {
    setTask('');
    setCategory('');
    setPriority('');
    setFormVisible(false);
  }

  /**
   * Reset form on cancel
   */
  function handleCancelBtn() {
    resetForm();
  }

  return (
    <Fragment>
      <IconButton
        classes="task-view__btn"
        text="Add a task"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 40 40"
            fill="#1a1a1a"
          >
            <path d="M18.625 31.667V21.375H8.333v-2.75h10.292V8.333h2.75v10.292h10.292v2.75H21.375v10.292Z" />
          </svg>
        }
        onClick={handleAddTaskBtn}
      />

      <form
        className={`form form--2-col ${
          !formVisible ? 'form--init-hidden' : ''
        }`}
        onSubmit={submitHandler}
      >
        <FormGroup classes="form__group--full-width">
          <Input
            id="task"
            name="task"
            placeholder="Task..."
            label="Task"
            value={task}
            onChange={handleTaskInput}
          />
        </FormGroup>

        <FormGroup>
          <Input
            id="category"
            name="category"
            placeholder="Category"
            label="Category"
            value={category}
            onChange={handleCategoryInput}
          />
        </FormGroup>

        <FormGroup>
          <select
            id="priority"
            className="form__select"
            name="priority"
            value={priority}
            onChange={handlePriorityInput}
            required
          >
            <option value="" disabled hidden>
              Priority
            </option>
            <option value="urgent">Urgent</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <label className="form__label visually-hidden" htmlFor="priority">
            Priority
          </label>
        </FormGroup>

        <Button classes="btn--primary" title="Add" type="submit">
          Add
        </Button>

        <Button classes="btn--cancel" title="Cancel" onClick={handleCancelBtn}>
          Cancel
        </Button>
      </form>
    </Fragment>
  );
}

export default AddTaskForm;
