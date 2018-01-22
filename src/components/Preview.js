import React from 'react';
import { Link } from 'react-router-dom';
import Square from './Square';

const Preview = () => (
  <div>
     <div className="title">
       <h1>Startsida: förhandsvisning</h1>
     </div>

     <div className="row">
       <div className="col-1-of-4">
         <p className="info">
           Valt schema 1.
           Får en förhandsvisning.
           Kan här välja att använda som mall till nytt schema, eller ändra schemat.
          </p>
          <div className="preview-small">
            <Link to="/preview">
              <div className="preview-small preview-small__item preview-small__item--selected">
                Schema 1
              </div>
            </Link>
            <div className="preview-small preview-small__item">
              <div>Schema 2</div>
            </div>

          </div>
       </div>
       <div className="col-3-of-4">
         <button className="btn btn--create u-clickable"><Link to="/createnew">Skapa nytt schema!</Link></button>
         <div className="preview-large">
           <h2>Förhandsvisning</h2>
           <div className="row">
             <div className="col-2-of-4 preview-large__item">
               <Square />
             </div>
             <div className="col-2-of-4 preview-large__item">
               <Square />
             </div>
           </div>

             <button className="btn btn--blue-light" >Redigera schema</button>
             <button className="btn btn--green-light" >Använd som mall</button>




         </div>
       </div>
     </div>

  </div>
);

export default Preview;
