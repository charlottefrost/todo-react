/**
 * CategoryItem.js
 * ------------------------------------------------------------------------------
 * Category item component file.
 *
 */
import { useDispatch } from 'react-redux';
import { categoryActions } from '../store/categories';
import { capitialiseTitle } from '../helpers/utils';

function CategoryItem(props) {
  const dispatch = useDispatch();
  const formattedTitle = capitialiseTitle(props.title);

  /**
   * Set current category
   */
  function handleNavClick() {
    dispatch(categoryActions.setCurrent(props.title));

    // Closes nav
    props.onClick();
  }

  return (
    <li className="nav__item">
      <button className="nav__btn" title={props.title} onClick={handleNavClick}>
        {formattedTitle}
      </button>
    </li>
  );
}

export default CategoryItem;
