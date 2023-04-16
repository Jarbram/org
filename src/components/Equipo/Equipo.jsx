import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import './Equipo.css'

const Equipo = (props) => {
  const {colaboradores, eliminarColaborador} = props
  
  return (
    <>
    {
      colaboradores.length > 0 &&
    <div 
    className='equipo'
    style={{backgroundColor: props.datos.colorSecundario}}>
        <h3 
        style = {{borderColor: props.datos.colorPrimario}}>{props.datos.titulo}
        </h3>
        <div className='colaboradores'>
          {
            colaboradores.map((colaborador,index) => 
              <Colaborador 
              datos={colaborador}  
              key={index}
              colorPrimario={props.datos.colorPrimario}
              eliminarColaborador={eliminarColaborador}
              />
            )
          }
        </div>
    </div>}
    </>
  )
  
}

export default Equipo