import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountrySimmer from './CountrySimmer'

function Countries({query}) {
    const[countryData,setCountryData]=useState([])
     
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then((res)=>res.json())
      .then((data)=>{
        setCountryData(data)
      })
      .catch((err)=>{
       console.log(err)
      })
    },[])
   if(!countryData.length)
   {
    return <CountrySimmer/>
   }
  return (
    <> 
   
    <div className="countries-container">
      {
        countryData
        .filter((country)=>
         country.name.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query)
      )
        .map((country)=>{
          return (
              <CountryCard
               key={country.name.common}
               name={country.name.common}
               flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
              />
          )
        })
      }
      
    </div>
    </>
  )
}

export default Countries