import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Något har blivit knas. Gå tillbaka till startsidan</Link>
  </div>
);

export default NotFoundPage;
