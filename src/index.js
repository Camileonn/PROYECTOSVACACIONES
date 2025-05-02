import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CharacterContextProvider } from './context/personaje'; // ✅ NOMBRE CORRECTO
import { LikeProvider } from './context/contexto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeProvider>
        <CharacterContextProvider> {/* ✅ NO CAMBIES EL NOMBRE */}
          <App />
        </CharacterContextProvider>
      </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
