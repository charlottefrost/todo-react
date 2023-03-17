/**
 * Layout: Header.js
 * ------------------------------------------------------------------------------
 * Header component file.
 *
 */
import { useState, useRef, useEffect, Fragment } from 'react';
import { appName } from '../../helpers/config';
import Categories from '../Categories';

function Header() {
  const [height, setHeight] = useState();
  const ref = useRef();
  const date = new Date();
  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  };
  const currentDate = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(date);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navBtnlabel = navIsVisible ? 'Close navigation' : 'Open navigation';

  /**
   * Set height of header
   */
  function handleResize() {
    setHeight(ref.current.clientHeight);
  }

  /**
   * Toggle nav
   */
  function handleNavBtn() {
    setNavIsVisible(!navIsVisible);
  }

  /**
   * Close nav
   */
  function closeNav() {
    if (!navIsVisible) {
      return;
    }

    setNavIsVisible(false);
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight);

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Fragment>
      <header className="header" ref={ref}>
        <button
          className={`header__nav-btn ${navIsVisible ? 'open' : ''}`}
          aria-label={navBtnlabel}
          aria-live="polite"
          onClick={handleNavBtn}
        >
          &nbsp;
        </button>
        <h1 className="header__title">{appName}</h1>
        <p className="header__date">{currentDate}</p>
      </header>
      <Categories show={navIsVisible} offset={height} onClick={closeNav} />
    </Fragment>
  );
}

export default Header;
