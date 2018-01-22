import React from 'react';
import { Link } from 'react-router-dom';

const CreateNew = () => (
<div>
  <h1>Skapa nytt schema</h1>
  <p className="info">
    Fyll i egna dimensioner eller välj ett alternativ.
    Välj 2 * 1 för att gå vidare.
   </p>
   <input type="text" placeholder="Fyll i egna dimensioner"></input>
   <button> 3 * 5 </button>
   <button><Link to="/createnewcreate"> 2 * 1 </Link></button>
   <button>Skapa nytt schema!</button>

</div>
);

export default CreateNew;
