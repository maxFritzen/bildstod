import React from 'react';

const AddSign = () => (
  <div>
    <h1>Lägg till tecken</h1>
    <p className="info">
      Sök efter tecken eller ladda upp egen.
      Tecken som matchar sökningen visas till höger.
      Kan vara likadant om man söker efter bild.
     </p>
     <div>
       <input type="text" placeholder="Sök bild/tecken" />
       <button>Ladda upp egen bild</button>
     </div>
     <div>
        <img src="./images/slutBaraBild.jpg" alt="teckenbild" />
     </div>
   </div>
 );

 export default AddSign;
