import React from 'react';
import './Country.css'
const Country = ({country}) => {

    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h1>name:{country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
        </div>
    );
};

export default Country;
