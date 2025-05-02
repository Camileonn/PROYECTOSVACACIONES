import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/StaticPage">static</Link></li>
          <li><Link to="/Buscar">Búsqueda de Personaje</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;