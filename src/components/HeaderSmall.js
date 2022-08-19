import React from 'react';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

const Header = () => {
    return (

  <header className='header'>
    <div className='background'>
      <Navbar />
      <div className='textbox'>
        <h1>Bienvenue sur MountApp</h1>
        <p>Avec près de 300 stations de ski en France, il est parfois compliqué de s'y retrouver.
          <br /> MountApp est là pour vous aider à trouver VOTRE station,
          <br /> quelques soit vos critères, parce que chacun à sa propre manière de voir les vacances à la montagne !
        </p>
        <Link to= "/Liststation" className="hero-btn"> Commencer à découvrir</Link>
      </div>
    </div>

   </header>
  );


};

export default Header;