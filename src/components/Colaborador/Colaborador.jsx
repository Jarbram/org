import React from 'react'
import './Colaborador.css'

const Colaborador = (props) => {
    const {name, puesto, foto, equipo} = props.datos
    const {colorPrimario} = props
  return (
    <div className='colaborador' >
        <div className='encabezado' style={{backgroundColor:colorPrimario}}>
        <img src={foto} alt={name} />
        </div>
        <div className='info'>
            <h4>{name}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
  )
}

export default Colaborador