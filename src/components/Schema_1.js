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
              <div className="preview-small preview-small__item preview-small__item--selected">
                Schema 1
              </div>
            <Link to="schema_2">
              <div className="preview-small preview-small__item">
                <div>Schema 2</div>
              </div>
            </Link>
          </div>
       </div>
       <div className="col-3-of-4">
         <Link to="/schema_skapa"><button className="btn btn--create u-clickable">Skapa nytt schema</button></Link>
         <div className="preview-large">
           <h2>Förhandsvisning</h2>
           <div className="row">
             <div className="col-2-of-4 preview-large__item">
               <div className="square square-preview">
                   <img src="/images/slut2.jpg" alt="Tecknar ordet slut" />
               </div>
             </div>
             <div className="col-2-of-4 preview-large__item">
               <div className="square square-preview">
                   <img src="/images/slut2.jpg" alt="Tecknar ordet slut" />
               </div>
             </div>
           </div>
             <button className="btn" disabled>Redigera schema</button>
             <button className="btn" disabled>Använd som mall</button>
             <button className="btn" disabled>Dela</button>
         </div>
       </div>
     </div>

  </div>
);

export default Preview;
