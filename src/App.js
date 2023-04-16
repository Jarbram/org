import React from 'react';
import './App.css';
import Formulario from './components/formulario/Formulario';
import Header from './components/header/Header';
import MiOrg from './components/MiOrg/MiOrg';
import { useState } from 'react';
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';  
import {v4 as uuidv4} from 'uuid';

function App() {
  const [showForm, setShowForm] = useState(true)
  const [colaboradores, setColaboradores] = useState([])

  //mostrar formulario
  const changeShowForm = () => {
    setShowForm(!showForm)
  };
  //registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador",colaborador)
    //spreed Operator
    setColaboradores([...colaboradores, colaborador])
  }
  
  //eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  //Equipo

  const equipos =[

    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278 ",  
      colorSecundario:"#d9f7e9",
    },
    {
      id: uuidv4(),
      titulo:"Front-end",
      colorPrimario:"#82cffa",
      colorSecundario:"#e8f8ff",

    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#a6d157",
      colorSecundario:"#f0f8e2",
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },


  ]


  return (
    <div>
      <Header />
    { showForm  && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador={registrarColaborador}
      /> }
      <MiOrg changeShowForm={changeShowForm} />
      {
        equipos.map((equipo) => 
          <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador=> colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          />
        
        )
      }
      <Footer />

    </div>
  );
}

export default App;
