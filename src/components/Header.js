import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const Header = () => (
  <header className="header">
    <div className="header__nav">
      <Link to="/" className="header__nav header__nav-home u-clickable">Hem</Link>
      <button onClick={() => window.history.back()} className="header__nav header__nav-back u-clickable">Tillbaka</button>
    </div>

  </header>
)
export default Header;
