/**
 * UI: Button.js
 * ------------------------------------------------------------------------------
 * Button component file.
 *
 */
function Button(props) {
  const cssClasses = `btn ${props.classes || ''}`;

  return (
    <button
      className={cssClasses}
      title={props.title}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
