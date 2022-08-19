 import React from 'react';
 import Navbar from '../components/Navbar';
 import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notfound'>
    <header className='header'>
     <div className='background'>
      <Navbar />
      <div className='textbox'>
        <h1>Attention sortie de piste !!!!!</h1>
        <p> Voilà le risque lorsque l'on s'aventure hors des sentiers
         <br />
          <br /> On se prend une ERREUR 404
      </p>
        <Link to= "/" className='hero-btn'> Retour à l'accueil</Link>
      </div>
    </div>
   </header>
              

            <h1>Erreur 404</h1>
        </div>
    );
};

export default NotFound;