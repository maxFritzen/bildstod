import React from 'react';
import Square from './Square';
import { Link } from 'react-router-dom';

const CreateNewCreate = () => (
  <div>
    <h1>Skapa nytt schema: skapar</h1>
    <p className="info">
      Fyll i text i rutorna.
      Välj bild och/eller tecken.
      Om man inte vill använda exempelvis bild så trycker man på röda krysset
      och den komponenten försvinner.
      Vill man ändra ordning på komponenterna går det att göra genom drag n drop.
     </p>
     <div>
       <div>
         <Square />
         <button><Link to="/addsign">Ändra tecken</Link></button>
         <button>Ändra text</button>
       </div>
        <div>
          <button>Lägg till bild</button>
          <button><Link to="/addsign">Lägg till tecken</Link></button>
          <button>Lägg till text</button>
        </div>

     </div>
   </div>
 );

 export default CreateNewCreate;
