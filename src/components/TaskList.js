/**
 * TaskList.js
 * ------------------------------------------------------------------------------
 * Task list component file.
 *
 */
import TaskItem from './TaskItem';

function TaskList({ tasks }) {
  let taskList = (
    <p className="message">You don't seem to have any tasks yet.</p>
  );

  if (tasks.length >= 1) {
    taskList = (
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            task={task.content}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </ul>
    );
  }

  return <article className="task-view__tasks">{taskList}</article>;
}

export default TaskList;
