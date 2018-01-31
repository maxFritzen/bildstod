import React from 'react';
import { Link } from 'react-router-dom';

const AddSign = () => (
  <div>
    <div className="title">
      <h1>Lägg till tecken</h1>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        <p className="info">
          Sök efter tecken eller ladda upp egen.
          Tecken som matchar sökningen visas till höger.
          Kan vara likadant om man söker efter bild.
         </p>
         <div>
           <input type="text" placeholder="Sök bild/tecken" />
           <button disabled>Ladda upp egen bild</button>
         </div>
      </div>
      <div className="col-3-of-4">
        <div>
           <img src="./images/slutBaraBild.jpg" alt="teckenbild" />
        </div>
      </div>
    </div>
     <div>
       <Link to="/schema_skapa_id"><button className="btn btn--large btn--blue-light u-clickable"> Klar </button></Link>
     </div>
   </div>
 );

 export default AddSign;
