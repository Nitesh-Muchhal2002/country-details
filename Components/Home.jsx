import React, { useState } from 'react'
import Searchbar from './Searchbar'
import SelectMenu from './SelectMenu'
import Countries from './Countries'
import { useTheme } from '../hooks/useTheme'


function Home() {
    const[query,setQuery]=useState('')
  
  const [isDark] = useTheme()
   
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
     
      <Countries query={query} />
    </main>
  )
}

export default Home