import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './context/Themecontext'

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App