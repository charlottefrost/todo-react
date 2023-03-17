/**
 * UI: IconButton.js
 * ------------------------------------------------------------------------------
 * Icon button component file.
 *
 */
function IconButton(props) {
  const cssClasses = `btn btn--primary btn--icon ${props.classes}`;

  return (
    <button className={cssClasses} title={props.text} onClick={props.onClick}>
      {props.icon}
      <span className="visually-hidden">{props.text}</span>
    </button>
  );
}

export default IconButton;
