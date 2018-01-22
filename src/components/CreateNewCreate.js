import React from 'react';
import Square from './Square';
import { Link } from 'react-router-dom';

const CreateNewCreate = () => (
  <div>
    <div className="title">
      <h1>Skapa nytt schema: skapar</h1>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        <p className="info">
          Fyll i text i rutorna.
          Välj bild och/eller tecken.
          Om man inte vill använda exempelvis bild så trycker man på röda krysset
          och den komponenten försvinner.
          Vill man ändra ordning på komponenterna kommer det gå att göra genom drag n drop.
         </p>
      </div>
       <div className="col-1-of-3 ">
         <div className="square">
           <div className="square__component">
             <img src="./images/slut2.jpg" alt="Tecknar ordet slut" />
           </div>
           <div className="square__component">
             <button><Link to="/addsign">Ändra tecken</Link></button>
           </div>
           <div className="square__component">
             <button>Ändra text</button>
           </div>

         </div>

       </div>
        <div className="col-1-of-3">
          <button>Lägg till bild</button>
          <button><Link to="/addsign">Lägg till tecken</Link></button>
          <button>Lägg till text</button>
        </div>

     </div>
   </div>
 );

 export default CreateNewCreate;
