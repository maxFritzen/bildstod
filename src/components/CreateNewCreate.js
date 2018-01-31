import React from 'react';
import Square from './Square';
import { Link } from 'react-router-dom';

const CreateNewCreate = () => (
  <div>
    <div className="title">
      <h1>Skapa nytt schema: skapar</h1>
    </div>
    <div className="nav-top">


    </div>
    <div className="row ">
      <div className="nav-top">
        <div className="col-1-of-3 u-invisible">col-1-of-3</div>
        <div className="col-1-of-3 u-invisible">col-1-of-3</div>
        <div className="col-1-of-3">
          <button className="btn" disabled>Spara</button>
          <Link to="/schema_forhandsgranska_id"><button className="btn btn--blue-light u-clickable">Förhandsgranska</button></Link>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-1-of-3">
        <p className="info">
          Fyll i text i rutorna.
          Välj bild och/eller tecken.
          Om man inte vill använda exempelvis bild så tar man bort den genom att
          klicka på "Ta bort komponent".
          Vill man ändra ordning på komponenterna kommer det gå att göra genom drag n drop.
         </p>
      </div>
       <div className="col-1-of-3 ">
         <div className="square">

             <img src="./images/slut2.jpg" alt="Tecknar ordet slut" />


             <Link to="/addsign"><button className="btn btn--blue-light u-clickable">Ändra tecken</button></Link>


             <button disabled>Ändra text</button>


         </div>
       </div>

        <div className="col-1-of-3">
          <div className="square">
            <div className="square__component">
              <button className="btn" disabled>Lägg till bild</button>
              <button disabled>Ta bort komponent</button>
            </div>
            <div className="square__component">
              <Link to="/addsign"><button className="btn btn--blue-light u-clickable">Lägg till tecken</button></Link>
              <button disabled>Ta bort komponent</button>
            </div>
            <div className="square__component">
              <button className="btn" disabled>Lägg till text</button>
              <button disabled>Ta bort komponent</button>
            </div>
          </div>



        </div>

     </div>
   </div>
 );

 export default CreateNewCreate;
