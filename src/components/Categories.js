/**
 * Categories.js
 * ------------------------------------------------------------------------------
 * Categories component file.
 * Outputs a navigation element.
 *
 */
import { useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';

function Categories(props) {
  const tasks = useSelector((state) => state.tasks);
  const tasksAdded = tasks.length >= 1;
  const categories = useSelector((state) => state.categories);
  const categoriesAdded = categories.categories;

  return (
    <nav
      className={`nav ${props.show ? 'open' : ''}`}
      style={{ top: props.offset }}
    >
      <ul className="nav__list">
        {tasksAdded && <CategoryItem title="all" onClick={props.onClick} />}

        {categoriesAdded &&
          categoriesAdded.map((category) => (
            <CategoryItem
              key={category}
              title={category}
              onClick={props.onClick}
            />
          ))}
      </ul>
    </nav>
  );
}

export default Categories;
