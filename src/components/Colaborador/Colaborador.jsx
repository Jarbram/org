import React from 'react'
import './Colaborador.css'
import {TiDelete} from 'react-icons/ti'

const Colaborador = (props) => {
    const {name, puesto, foto,id} = props.datos
    const {colorPrimario, eliminarColaborador} = props
  return (
    <div className='colaborador' >
    <TiDelete 
    className='eliminar' 
    onClick={() => eliminarColaborador(id)}
    />
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