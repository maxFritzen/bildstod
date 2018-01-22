import React from 'react';
import { Link } from 'react-router-dom';

const CreateNew = () => (
<div>
  <h1>Skapa nytt schema</h1>
  <p className="info">
    Fyll i egna dimensioner eller välj ett alternativ.
    När klar, tryck på “Skapa nytt schema”
   </p>
   <input type="text" placeholder="Fyll i egna dimensioner"></input>
   <button> 3 * 5 </button>
   <button><Link to="/createnewcreate"> 2 * 1 </Link></button>

</div>
);

export default CreateNew;
