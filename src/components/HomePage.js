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
          Knappar med rött runt sig går att klicka på.
         </p>

        <div className="preview-small">
          <Link to="/preview">
            <div className="preview-small preview-small__item u-clickable">
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
      </div>
    </div>



  </div>
);

export default HomePage;
