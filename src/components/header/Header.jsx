import React from 'react'
import './Header.css'
import {GiOrganigram} from 'react-icons/gi'

const Header = () => {
  return (
    <div className='header'>
    <div className='titulo'><h1>Personas y Equipos</h1> 
      <GiOrganigram className='logo' />
    </div>
    <h3 className='subtitulo'>organizados en un solo lugar</h3>
   
    </div>
  )
}

export default Header