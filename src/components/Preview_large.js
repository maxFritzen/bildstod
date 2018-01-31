import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <div className="title">
      <h1>Förhandsgranskar schema</h1>
    </div>
    <div className="row ">
      <div className="nav-top">
        <div className="col-1-of-3">&nbsp;</div>
        <div className="col-1-of-3">&nbsp;</div>
        <div className="col-1-of-3">
          <button className="btn" disabled>Ändra schema</button>
          <button className="btn" disabled>Spara</button>
          <button className="btn" disabled>Skriv ut</button>
          <button className="btn" disabled>Dela</button>
        </div>
      </div>
    </div>




    <div className="row">
      <div className="col-1-of-3">
        <p className="info u-margin-bottom-small">
          Här kan man välja att ändra, skriva ut eller dela schemat.
          Personen man delar schemat kan då kolla på schemat från sin
          enhet(dator,ipad,telefon) men utan att kunna göra ändringar.
          Vill den göra ändringar kan den välja att spara schemat och sedan ändra.
        </p>
        <p className="info">
          Exempel: Mamma skapar schema. När klar delar hon det med Wilmer.
          Han kan kolla på det på sin ipad, men inte ändra något.

         </p>
      </div>

      <div className="col-1-of-3">
        <div className="square square-preview">
            <img src="./images/slut2.jpg" alt="Tecknar ordet slut" />
        </div>
      </div>
      <div className="col-1-of-3">
        <div className="square square-preview">
            <img src="./images/slut2.jpg" alt="Tecknar ordet slut" />
        </div>
      </div>
    </div>



  </div>
);

export default HomePage;
