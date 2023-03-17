/**
 * UI: Input.js
 * ------------------------------------------------------------------------------
 * Input component file.
 * Combines input & label elements.
 *
 */
import { Fragment } from 'react';

function Input(props) {
  return (
    <Fragment>
      <input
        id={props.id}
        type={props.type || 'text'}
        className="form__input"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <label className="form__label" htmlFor={props.id}>
        {props.label}
      </label>
    </Fragment>
  );
}

export default Input;
