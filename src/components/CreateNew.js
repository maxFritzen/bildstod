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
        2 * 1 är förvalt, klicka på Skapa nytt schema för att gå vidare..
       </p>
       <input type="text" placeholder="Fyll i egna dimensioner" />

       <button className="btn btn--dimension-example"> 3 * 5 </button>
       <button className="btn btn--dimension-example">2 * 1 </button>
    </div>

    <div className="col-3-of-4">
      <Link to="/schema_skapa_id"> <button className="btn btn--create u-clickable">Skapa nytt schema</button></Link>
    </div>
  </div>
</div>
);

export default CreateNew;
