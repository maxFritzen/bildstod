import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

const Header = () => (
  <header>
    <Link to="/">Hem</Link>
    <button onClick={() => window.history.back()}>Tillbaka</button>
  </header>
)
export default Header;
