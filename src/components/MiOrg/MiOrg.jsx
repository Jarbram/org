import React from 'react'
import './MiOrg.css'

const MiOrg = (props) => {
  return (
    <div className='org-container'>
        <h3> Mi Organización</h3>
        <img src="img/add.png" alt="add" onClick={props.changeShowForm} />
    </div>
  )
}

export default MiOrg