import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Startsida</h1>
    <p className="info">Gamla scheman visas med bild i litet format. Går att välja schema.
       Kan därefter ändra, skriva ut, eller använda som mall.
     </p>
     <Link to="/preview">Schema 1</Link>
     <div>Schema 2</div>
     <button><Link to="/createnew">Skapa nytt schema!</Link></button>
  </div>
);

export default HomePage;
