import { useState } from 'react';
import Formulario from '../Componentes/Formulario';
import PersonajesCard  from '../Componentes/PersonajesCard';

const Search = () => {
  const [filters, setFilters] = useState({ name: '', status: '', species: '', type: '', gender: '' });
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(filters);
    fetch(`https://rickandmortyapi.com/api/character/?${params}`)
      .then(res => res.json())
      .then(data => setCharacters(data.results || []));
  };

  return (
    <div>
      <Formulario filters={filters} handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="characterlist">
        {characters.map(character => (
          < PersonajesCard  key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Search;
