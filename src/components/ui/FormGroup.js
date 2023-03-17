/**
 * UI: FormGroup.js
 * ------------------------------------------------------------------------------
 * Form group component file.
 * Acts as a wrapper element for form elements such as inputs & buttons.
 *
 */
function FormGroup(props) {
  const cssClasses = `form__group ${props.classes || ''}`;

  return <div className={cssClasses}>{props.children}</div>;
}

export default FormGroup;
