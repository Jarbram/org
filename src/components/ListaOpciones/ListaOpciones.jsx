import React from 'react'
import './ListaOpciones.css'
const ListaOpciones = (props) => {

    

    const handleChange = (e) => {
        props.updateValue(e.target.value)
    }

  return (
    <div className='lista-opciones'>
        <label>Equipos</label>
        <select
        value={props.value}
        onChange={handleChange}
        >
        <option
        value="" 
        disabled
        defaultValue=""
        hidden
        >Seleccionar equipo</option>
            {
                props.equipos.map((equipo, index) => {
                    return <option key={index}>{equipo}</option>
            }, this)}
        </select>
    </div>
  )
}

export default ListaOpciones