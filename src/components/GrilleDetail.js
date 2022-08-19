import React  from 'react';
import { Link, Outlet } from 'react-router-dom';
import photo_alpes from './../assets/img_liste_station/alpes.jpeg';
import photo_alpes_sud from './../assets/img_liste_station/alpes sud.jpeg';
import photo_corse from './../assets/img_liste_station/corse.jpeg';
import photo_massif from './../assets/img_liste_station/massif central.jpeg';
import photo_vosges from './../assets/img_liste_station/vosges2.jpeg';
import photo_pyrenees from './../assets/img_liste_station/pyrenees.jpeg';
import photo_jura from './../assets/img_liste_station/pyrenees.jpeg';
import photo_defaut from './../assets/img_liste_station/region1.jpeg';
import icon_mountain from './../assets/icon/mountains.png'
import icon_ski_lift from './../assets/icon/ski-lift.png'
import icon_ski from './../assets/icon/ski.png'


const GrilleDetail = (props) => {
    const { station } = props ; 
   
  function DynamicFont(props)  {
    switch(props){
        case 'Alpes du Nord':
            return photo_alpes
        case 'Alpes du Sud':
            return photo_alpes_sud
        case 'Pyrénées':
            return photo_pyrenees
        case 'Massif Central':
            return photo_massif
        case 'Jura':
            return photo_jura
        case 'Vosges':
            return photo_vosges
        case 'Corse':
            return photo_corse
        default:
            return photo_defaut
    }

  };
    
    return (
    <div className="grille_detail">
           <div className='top_grille'> 
            <img src={DynamicFont(station.region)} alt='panorama montagne' className='photo_station' ></img>
           </div>
           
           <span> 
            {station.region} {station.departement}
           </span>
           <span className="grille_station">
                <Link to={`/DetailStation/${station.id}`}
                      key={station.id}
                 >     
                {station.nom}
                </Link>
           </span>
                       
            <span className="grille_hauteur">
                <img src={icon_mountain} alt='icone montagne' className='icon_moutain' ></img>
                    {station.hauteur_min} m - 
                                     {station.hauteur_max} m</span>
            <span className="grille_station_km">
                <img src={icon_ski} alt='icone skieur' className='icon_ski' ></img>
                {station.nb_km_piste} km  
                - {station.nb_piste} pistes     
            </span>

            <span className="grille_nb_meca">
                 <img src={icon_ski_lift} alt='icone remontee mecanique' className='icon_ski_lift' ></img>
                {station.nb_remontee_meca} remontées</span>
            
            {station.label_station &&
            <div className='label_groupe'>
                <span className="grille_label">
                    <i>
                        <img src="https://s2.qwant.com/thumbr/0x380/d/e/f2b6038bcb1fa9635bfb19286372a7c3e4c142b9e7c1fee8661eee099a3a2a/Logo_LABEL_FamillePlus_RVB_2012.jpg?u=https%3A%2F%2Fwww.anmsm.fr%2Fsites%2Fdefault%2Ffiles%2Finline-images%2FLogo_LABEL_FamillePlus_RVB_2012.jpg&q=0&b=1&p=0&a=0" alt='logo association famille plus'/> 
                    </i> 
                </span> 
            </div>
            }
            {station.domaine &&
            <div className="domaine_groupe" >
            <hr />
                <span className="grille_domaine">
                <a href="">{station.domaine}</a></span>
                <span className="grille_domaine_km">{station.domaine_nb_km_piste} kms piste domaine</span>
                <span className="grille_type_liaison">Liaison à {station.domaine_liaison}</span>
             </div> 
            }    
               
           
            <Outlet /> 
        </div> 
    );
};

export default GrilleDetail;