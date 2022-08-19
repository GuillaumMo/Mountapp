import React, { useState} from 'react';

const FiltreStation = () => {
    const region = ["Alpes du Nord", "Alpes du Sud", "Pyrénées",  "Jura", "Corse"];
    const [selectedRegion, setSelectedRegion]=useState([]);
    const departement = ["Haute-Savoie", "Savoie","Alpes-de-Haute-Provence","Alpes-Maritimes","Hautes-Alpes","Haute-Corse"
    ,"Ain","Doubs","Jura","Cantal","Loire","Puy-de-Dome","Ariège","Haute-Garonne","Hautes-Pyrénées","Pyrénées-Atlantique","Pyrénées-Orientales","Haut-Rhin","Vosges"];
    const [selectedDepartement, setSelectedDepartement]=useState([]);
    const [rangePisteValue, setRangePisteValue] = useState([]);
 
    return (
        <div className='FiltreStation'>
                <h2>Filtres</h2>
                  <ul className="region-container">
                      {region.map((region, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            name="region"
                            id={region}
                            checked={region === selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.id)}
                            />
                        <label htmlFor={region}>{region}</label>
                     </li>
                    ))}
                 </ul>
                  <ul className="departement-container">
                      {departement.map((departement, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            name="departement"
                            id={region}
                            checked={region === selectedDepartement}
                            onChange={(e) => setSelectedDepartement(e.target.id)}
                            />
                        <label htmlFor={departement}>{departement}</label>
                     </li>
                    ))}
                 </ul>
                {selectedRegion && (
                    <button onClick={() => setSelectedRegion("")}>Annuler recherche</button>
                )}
                <div className='rangeNbRemonte'> 
                 <input
                    type="range"
                    min="1"
                    max="107"
                    defaultValue={rangePisteValue}
                    onChange={(e) => setRangePisteValue(e.target.value)}
                 />
                 <p style={{ marginBottom: "20px" }}>
                    {rangePisteValue} remontées
                 </p> 
                 </div>  
        </div>
    );
};

export default FiltreStation;