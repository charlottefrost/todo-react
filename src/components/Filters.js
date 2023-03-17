/**
 * Filters.js
 * ------------------------------------------------------------------------------
 * Filters component file.
 * Contains sorting functionality.
 *
 */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PRIORITIES } from '../helpers/config';
import { capitialiseTitle } from '../helpers/utils';
import Heading from './ui/Heading';
import FormGroup from './ui/FormGroup';

function Filters({ tasks, onFilter }) {
  const [filter, setFilter] = useState();
  const [disabled, setDisabled] = useState(true);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  const title = capitialiseTitle(currentCategory);

  /**
   * Reset filter value if the current category changes
   */
  useEffect(() => {
    setFilter('');
  }, [currentCategory]);

  /**
   * Disable filter if there is only one task / no tasks
   */
  useEffect(() => {
    if (tasks.length > 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [tasks]);

  /**
   * Sort tasks
   * @param {Object} - event
   */
  function handleInputChange(event) {
    let sortedArr = [];
    const filterValue = event.target.value;

    setFilter(filterValue);

    if (filterValue === 'priority') {
      sortedArr = [...tasks].sort(
        (a, b) => PRIORITIES[a[filterValue]] - PRIORITIES[b[filterValue]]
      );
    } else {
      sortedArr = [...tasks].sort(
        (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
      );
    }

    // Updates task list
    onFilter(sortedArr);
  }

  return (
    <section className="filters">
      <Heading classes="heading--primary">{title}</Heading>

      <form className="filters__form form form--thin">
        <FormGroup>
          <select
            id="sortby"
            className="form__select"
            name="priority"
            value={filter}
            disabled={disabled}
            onChange={handleInputChange}
          >
            <option value="sort by" hidden>
              Sort by
            </option>
            <option value="date">Date added</option>
            <option value="priority">Priority</option>
          </select>
          <label className="form__label visually-hidden" htmlFor="sortby">
            Sort by
          </label>
        </FormGroup>
      </form>
    </section>
  );
}

export default Filters;
