import React from 'react';
import Navbar from '../components/Navbar'
import { useParams } from "react-router-dom";
import { getStation } from  '../components/DataJson';

export default function Detailstation () {
    let params = useParams(); 
    let station = getStation(parseInt(params.id, 10));

   
    return  <div className='detailstation'>
     <header className='header'>
        <div className='background'>
             <Navbar />
             <div className='textbox'>
             <h1>{station.nom}</h1>
        <p>Découvrez toutes les informations relative à la station
       </p>
       </div>
    </div>
   </header>
      
       <section className="detail_station">
   <h2>Information Station</h2>
    <div className="det_stat_info">
        <div className="det_stat_ss_element">
            <h3>Office de tourisme</h3>
            <ul>
               <li>{station.adresse}</li>
               <li>{station.telephone}</li>
            </ul>
        </div>
        <div className="det_stat_ss_element">
            <h3>Site</h3>
            <ul>
               <li><a href="{station.url}" target="_blank">Lien vers site de la station</a></li>
            </ul>
        </div>
         <div className="det_stat_ss_element">
            <h3>Webcam</h3>
            <ul>
               <li><a href="{station.url_webcam}" target="_blank"> Lien vers webcam</a></li>
            </ul>
         </div>
    </div>
    <h2>Domaine Ski Alpin</h2>
    <div className="det_stat_info">
        <div className="det_stat_ss_element">
            <h3>Hauteur domaine</h3>
            <ul>
             <li>Hauteur bas / haut</li>
              <li>{station.hauteur_min} / {station.hauteur_max}</li>
              <li>Dénivelé de {station.hauteur_max-station.hauteur_min} mètres</li>
            </ul>
         </div>
        <div className="det_stat_ss_element">
            <h3>{station.nb_km_piste} pistes</h3>
            <ul>
                  <li><i className="fas fa-circle"></i></li>
         <li>{station.nb_piste_verte} pistes vertes</li>
         <li>{station.nb_piste_bleue} pistes bleues</li>
         <li>{station.nb_piste_rouge} pistes rouges</li>
         <li>{station.nb_piste_noire} pistes noires</li>

            </ul>
         </div>
        <div className="det_stat_ss_element">
            <h3>{station.nb_remontee_meca} remontées mécaniques</h3>
            <ul>
                <li>téléphérique : {station.nb_remontee_telepherique}</li>
                <li>télécabine : {station.nb_remontee_telecabine}</li>
                <li>télésiège : {station.nb_remontee_telesiege} </li>
                <li>téléski : {station.nb_remontee_teleski} </li>
            </ul>
         </div>
        <div className="det_stat_ss_element">
            <h3>Plan des pistes</h3>
            <ul>
              <li><a href='{station.url_plan_piste}' target="_blank">Lien vers plan des pistes</a></li>
            </ul>
         </div>

   </div>
<h2>Météo</h2>
<div class="det_stat_info">
    
</div>
       <h2>Label</h2>
<div class="det_stat_info">
    <div class="det_stat_ss_element">
        <h3>Famille Plus</h3>
        <ul>
            <li></li>

        </ul>
    </div>
</div> 
 
   </section>
  </div>  
}
