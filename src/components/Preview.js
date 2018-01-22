import React from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';

const Preview = () => (
  <div>
    <h1>Startsida: förhandsvisning</h1>
    <p className="info">
      Valt schema 1.
      Får en förhandsvisning.
      Kan här välja att använda som mall till nytt schema, eller ändra schemat.
     </p>
     <div>Schema 1</div>
     <div>Schema 2</div>
     <button><Link to="/createnew">Skapa nytt schema!</Link></button>
     <div>
       <h2>Förhandsvisning</h2>
       <Square />
       <Square />
       <button>Redigera schema</button>
       <button>Använd som mall</button>
     </div>
  </div>
);

export default Preview;
