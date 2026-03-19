import React, { use, useState } from 'react';
import Country from './Country/Country';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries]=useState([]);
    const [visitedFlag, setVisitedFlag]=useState([]);
    const handleVisitedCountries=(country)=>{
       const newVisitedCountries=[...visitedCountries,country];
       setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags=(flag)=>{
      const newVisitedFlag=[...visitedFlag,flag];
      setVisitedFlag(newVisitedFlag)        
    }
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries
    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h3>Total country visited:{visitedCountries.length}</h3>
            <h3>Total visited flag: {visitedFlag.length}</h3>
            <ol>
                {visitedCountries.map(country => <li key= {country.ccn3.ccn3}> {country.name.common}</li>)}
            </ol>
            <div className='visited-flag-container'>
                {visitedFlag.map((flag,index)=> <img key={index} src={flag}></img>)}
            </div>
            <div className='countries'>
            {
            countries.map(country => <Country key={country.ccn3.ccn3} country={country} 
         handleVisitedCountries={handleVisitedCountries}
         handleVisitedFlags={handleVisitedFlags}
         ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;