import React from 'react';
import { Link } from 'react-router-dom';

const CreateNew = () => (
<div>
  <div className="title">
    <h1>Skapa nytt schema</h1>
  </div>

  <div className="row">
    <div className="col-1-of-4">
      <p className="info">
        Fyll i egna dimensioner eller välj ett alternativ.
        Välj 2 * 1 för att gå vidare.
       </p>
       <input type="text" placeholder="Fyll i egna dimensioner" />

       <button className="btn btn--dimension-example"> 3 * 5 </button>
       <Link to="/createnewcreate"> <button className="btn btn--dimension-example u-clickable">2 * 1 </button></Link>
    </div>

    <div className="col-3-of-4">
      <button className="btn btn--create">Skapa nytt schema!</button>
    </div>
  </div>
</div>
);

export default CreateNew;
