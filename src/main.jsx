import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWord} from './pruebas/helloWord.jsx'

ReactDOM.createRoot( document.getElementById('cont1') ).render(
  <React.StrictMode>
    <HelloWord />
  </React.StrictMode>
)
