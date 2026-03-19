import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
    //    visited?setVisited(false):setVisited(true);
     //setVisited(visited?false:true)
     setVisited(!visited);
     handleVisitedCountries(country)
    }
    return (
        //<div className={`country ${visited ? 'country-visit' : 'country-not-visit'}`}> optional
        <div className={`country ${visited && 'country-visit'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h1>name:{country.name.common}</h1>
            <p>Population: {country.population.population ?country.population.population :'Not Found' }</p>
            <p>Capital: {country.capital.capital ?country.capital.capital : 'Not Found'}</p>
            <p>Area: {country.area.area} {country.area.area > 300000?'Big Country' : 'Small Country'}</p>
            <p>Region: {country.region.region}</p>
            <button className='btn' onClick={handleVisited}>
                {
                  visited?'Visit Done' : 'Not Visit'
                }
            </button>
            <button onClick={()=>{handleVisitedFlags(country?.flags?.flags?.png)}} className='btn'>Add Visited Flag</button>
        </div>
    );
};

export default Country;
