import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './pruebas/firstApp.jsx';
import { HelloWord } from './pruebas/helloWord.jsx';
import { Proptipos } from './pruebas/propTypes.jsx';
import './estilos/index.css';
import { CounterApp } from './pruebas/counterApp.jsx';


ReactDOM.createRoot(document.getElementById('cont1')).render(
  <React.StrictMode>
    <HelloWord titulo="HELLO WORD" anio={1998}/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('cont2')).render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('cont3')).render(
  <React.StrictMode>
    <Proptipos subtitulo = "aprendiendo a usarlos" tiempo = {2022}/>
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('cont4')).render(
  <React.StrictMode>
    <CounterApp value= {2020}/>
  </React.StrictMode>
)
