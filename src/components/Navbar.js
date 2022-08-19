import React from 'react';
import {Link} from "react-router-dom";
import Logo from './../assets/logo.png';


export default function Navbar() {
    return (
        <nav className='nav'> 
        <Link to ="/" title='MountApp'><img src={Logo} alt='logo site My Moutain'></img></Link>
          <div className="nav-links" id="navLinks">
            <ul>
             <li> <Link to= "/"> Accueil</Link></li>
             <li> <Link to= "/Liststation"> Découvrir</Link></li>
             <li> <Link to= "/About">Nous connaître</Link></li>
            </ul>
          </div>
        </nav>
            
    )
} 