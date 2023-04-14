import React from 'react'
import './Campotexto.css'

const CampoTexto = (props) => {

  const handleChange = (e) => {
    props.updateValue(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{props.titulo}</label>
      <input 
      type='text' 
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      onChange={handleChange}
      />
    </div>
  )
}

export default CampoTexto