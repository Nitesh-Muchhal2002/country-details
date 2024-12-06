import React from 'react'
import "./CountriesListShimmer.css"
function CountrySimmer() {
   
  return (
    <div className='countries-container'>
     {Array.from({length:10}).map((el,index)=>{
        return <div key={index} className='country-card shimmer-card'>
           <div className='flag-container'></div>
           <div className='card-text'></div>
           <h3 className='card-title'></h3>
           <p></p>
           <p></p>
           <p></p>
            
        </div>
    })}
    </div>
  )
}

export default CountrySimmer