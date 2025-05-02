import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Buscar from '../pages/Buscar';
import StaticPage from '../pages/StaticPage';
import EpisodiosDetalles from '../pages/EpisodiosDetalles';
import InfoPersonaje from '../pages/InfoPersonaje';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/episode/:id" element={<EpisodiosDetalles />} />
      <Route path="/Buscar" element={<Buscar />} />
      <Route path="/StaticPage" element={<StaticPage />} />
      <Route path="/personaje/:id" element={<InfoPersonaje />} /> 
    </Routes>
  );
};

export default AppRouter;

