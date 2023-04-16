import React from 'react'
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react'
import './Formulario.css'
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const[name, setName] = useState('')
    const[puesto, setPuesto] = useState('')
    const[foto, setFoto] = useState('')
    const[equipo, setEquipo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado');
        let data = {
            id: uuidv4(),
            name: name,
            puesto: puesto,
            foto: foto, 
            equipo: equipo
        }
        props.registrarColaborador(data);        
    }
    
    return (
        <div className='formulario'>
            <form
            onSubmit={handleSubmit}>
            <h1>Rellenar el formulario para crear el colaborador</h1>
            <CampoTexto 
            titulo="Nombre" placeholder="Ingresar Nombre"
            required
            value={name}
            updateValue={setName}
            />
            <CampoTexto 
            titulo="Puesto" placeholder="Ingresar Puesto"
            required
            value={puesto}
            updateValue={setPuesto}
            />
            <CampoTexto 
            titulo="Foto" placeholder="Ingresar enlace de foto"
            required
            value={foto}
            updateValue={setFoto}
            />
            <ListaOpciones
            equipos={props.equipos}
            value={equipo}
            updateValue={setEquipo}
            />
            <Boton 
            texto="Crear"
            />
            </form>
        </div>
  )
}

export default Formulario