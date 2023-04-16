import React from 'react'
import './MiOrg.css'
import {BiAddToQueue} from 'react-icons/bi'

const MiOrg = (props) => {
  return (
    <div className='org-container'>
        <h3> Mi Organización</h3>
        <BiAddToQueue className='add' onClick={props.changeShowForm} />
    </div>
  )
}

export default MiOrg