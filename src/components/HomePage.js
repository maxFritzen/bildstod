import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <div className="title">
      <h1>Startsida</h1>
    </div>

    <div className="row">
      <div className="col-1-of-4">
        <p className="info">
          Gamla scheman visas med bild i litet format. Går att välja schema.
          Kan därefter ändra, skriva ut, eller använda som mall.
         </p>

        <div className="preview-small">
          <Link to="/schema_1">
            <div className="preview-small preview-small__item u-clickable">
              Schema 1
            </div>
          </Link>
          <Link to="/schema_2">
            <div className="preview-small preview-small__item u-clickable">
              Schema 2
            </div>
          </Link>
        </div>
      </div>
      <div className="col-3-of-4">
        <Link to="/schema_skapa"><button className="btn btn--create u-clickable">Skapa nytt schema</button></Link>
      </div>
    </div>



  </div>
);

export default HomePage;
