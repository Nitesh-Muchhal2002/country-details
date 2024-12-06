import React from 'react'

function Searchbar({setQuery}) {
  return (
    <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" 
           onChange={(e)=>setQuery(e.target.value.toLowerCase())}
          placeholder="Search for a Country......."/>
        </div>
  )
}

export default Searchbar