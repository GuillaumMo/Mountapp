import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import dataJason from '../data/dataJson.json';
import GrilleDetail from '../components/GrilleDetail';
//import FiltreStation from '../components/FiltreStation';


const Listestation = () => {
  
    // Valeur pour liste
    const region = ["Alpes du Nord", "Alpes du Sud", "Pyrénées", "Massif Central", "Jura", "Vosges","Corse"];
    const departement = ["Haute-Savoie", "Savoie","Alpes-de-Haute-Provence","Alpes-Maritimes","Hautes-Alpes","Haute-Corse","Ain","Doubs","Jura","Cantal","Loire","Puy-de-Dome","Ariège","Haute-Garonne","Hautes-Pyrénées","Pyrénées-Atlantique","Pyrénées-Orientales","Haut-Rhin","Vosges"];
    const labelListe = ["Famille Plus"];
    
    // variables
    //  const [data, setData]=useState([]);
    const [selectedRegion, setSelectedRegion]=useState([]);
    const [selectedDepartement, setSelectedDepartement]=useState([]);
    const [selectedLabel, setSelectedLabel]=useState([]);
    const [rangeRemonteeValue, setRangeRemonteeValue] = useState([1]);
    const [rangeNbPisteValue, setRangeNbPisteValue] = useState([]);
    const [rangeKmPisteValue, setRangeKmPisteValue] = useState([1]);
    const [rangeAltidueValue, setRangeAltitudeValue] = useState([1]);
    const [selectedStation, setSelectedStation]=useState([]);
     

 
    return (
        <div className='listestation'>
             <header className='header'>
                <div className='background'>
                     <Navbar />
                    <div className="textbox">
                        <h1>Découvrir</h1>
                    </div>
           
                </div>
             </header>   

             <div className='FiltreStation'>
                <h2>Filtres</h2>
                  <h3>Région</h3>
                  <ul className="region-container">
                   {region.map((region, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            name="region"
                            id={region}
                            checked={region === selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.id)}
                            />
                        <label htmlFor={region}>{region}</label>
                     </li>
                    ))}
                 </ul>
                 {selectedRegion && (
                    <button onClick={() => setSelectedRegion("")}>Annuler recherche</button>
                )}
                 <hr />
                 <h3>Département</h3>
                  <ul className="departement-container">
                      {departement.map((departement, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            name="departement"
                            id={departement}
                            checked={departement === selectedDepartement}
                            onChange={(e) => setSelectedDepartement(e.target.id)}
                            />
                        <label htmlFor={departement}>{departement}</label>
                     </li>
                    ))}
                 </ul>
                 {setSelectedDepartement && (
                    <button onClick={() => setSelectedDepartement("")}>Annuler filtre</button>
                )}
                <hr />
               <div className='groupe_Range'>
                 <h3>Remontée mécanique</h3>
                <div className='rangeNbRemonte'> 
                 <input
                    type="range"
                    min="1"
                    max="107"
                    defaultValue={rangeRemonteeValue}
                    onChange={(e) => setRangeRemonteeValue(e.target.value)}
                 />
                 <p style={{ marginBottom: "20px" }}>
                  Minimum   {rangeRemonteeValue} remontées
                 </p> 
                 </div>  
                
               <hr />
                 <h3>Altitude</h3>
                <div className='rangeAltitude'> 
                 <input
                    type="range"
                    min="0"
                    max="3500"
                    step="10"
                    defaultValue={rangeAltidueValue}
                    onChange={(e) => setRangeAltitudeValue(e.target.value)}
                 />
                 <p style={{ marginBottom: "20px" }}>
                  Minimum   {rangeAltidueValue} m
                 </p> 
                 </div>
                    
                 <hr />
                 <h3>Nombre de piste</h3>
                <div className='rangeNbPisteValue'> 
                 <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeNbPisteValue}
                    onChange={(e) => setRangeNbPisteValue(e.target.value)}
                 />
                 <p style={{ marginBottom: "20px" }}>
                  Minimum   {rangeNbPisteValue} pistes
                 </p> 
                 </div>  
                 <hr />
                 <h3>Km de piste</h3>
                <div className='rangeKmPisteValue'> 
                 <input
                    type="range"
                    min="1"
                    max="107"
                    defaultValue={rangeKmPisteValue}
                    onChange={(e) => setRangeKmPisteValue(e.target.value)}
                 />
                 <p style={{ marginBottom: "20px" }}>
                  Minimum   {rangeKmPisteValue} km
                 </p> 
                 </div> 
                 <div className='labelValue'>
                 <h3>Label</h3>
                   <ul className="labal-container">
                      {labelListe.map((labelListe, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            name="labelListe"
                            id={labelListe}
                            checked={labelListe === selectedLabel}
                            onChange={(e) => setSelectedLabel(e.target.id)}
                            />
                        <label htmlFor={labelListe}>{labelListe}</label>
                     </li>
                    ))}
                 </ul>
                  {selectedLabel && (
                    <button onClick={() => setSelectedLabel("")}>Annuler recherche</button>
                )}
                </div> 
                 </div>
                 <h3>Station</h3>
                <select className='station-container' onChange={(e) => setSelectedStation(e.target.value)}>
                 {dataJason
                            .filter ((station) => station.region.includes(selectedRegion))
                            .filter ((station) => station.departement.includes(selectedDepartement))
                            .sort  ((a,b) => (a.nom - b.nom ))
                            .map((station, index) => (
                    <option 
                            key={index} 
                            value={station.nom}
                         //   id={listSation}
                         //   name="listSation"
                              
                    >
                                {station.nom}
                       
                     </option>
                    ))}
                 </select>
                 {selectedStation && (
                    <button onClick={() => setSelectedStation("")}>Annuler recherche</button>
              )} 
              </div>
            <div className='detail_lststation'>
                           
                 <h2>Liste des Stations</h2>
   
                <section className='grilleStation'>
                    {dataJason
                    .filter ((station) => station.region.includes(selectedRegion))
                    .filter ((station) => station.departement.includes(selectedDepartement))                
                    .filter ((station) => station.nom.includes(selectedStation))                
                    .filter ((station) => station.nb_remontee_meca >=rangeRemonteeValue )
                    .filter ((station) => station.hauteur_min >=rangeAltidueValue )
                    .filter ((station) => station.nb_piste >=rangeNbPisteValue )
                    .filter ((station) => station.label_station.includes(selectedLabel)) 
                    .sort  ((a,b) => (a.nom - b.nom ))
                    .map((station) => (
                        <GrilleDetail station={station} key={station.id} />
            
                    ))}   
                </section>           
          </div>                      
        </div>

   );    


}; 

export default Listestation;