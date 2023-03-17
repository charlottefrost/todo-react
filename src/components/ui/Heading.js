/**
 * UI: Heading.js
 * ------------------------------------------------------------------------------
 * Heading component file.
 *
 */
function Heading(props) {
  const cssClasses = `heading ${props.classes}`;
  return <h2 className={cssClasses}>{props.children}</h2>;
}

export default Heading;
