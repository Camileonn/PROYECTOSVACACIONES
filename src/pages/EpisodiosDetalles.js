import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PersonajesCard from '../Componentes/PersonajesCard';
import '../assets/styles/Detallesepisodios.css'; // Asegúrate de tener este archivo creado

const EpisodiosDetalles = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch episode');
        return res.json();
      })
      .then(async (data) => {
        setEpisode(data);

        const characterUrls = data.characters.length >= 4
          ? [...data.characters.slice(0, 2), ...data.characters.slice(-2)]
          : data.characters;

        const characterData = await Promise.all(
          characterUrls.map(url => fetch(url).then(res => res.json()))
        );

        setCharacters(characterData);
      })
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!episode) return <p>Cargando episodio...</p>;

  return (
    <div className="episode-detail">
      <div className="episode-info">
        <h1>{episode.name}</h1>
        <p><strong>Fecha de emisión:</strong> {episode.air_date}</p>
        <p><strong>Código del episodio:</strong> {episode.episode}</p>
        <p><strong>Total de personajes:</strong> {episode.characters.length}</p>
      </div>

      <h2>Personajes en este episodio:</h2>

      <div className="character-list">
       
        <div className="characters-grid">
          {characters.length === 0 ? (
            <p>Cargando personajes...</p>
          ) : (
            characters.map(character => (
              <PersonajesCard key={character.id} character={character} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodiosDetalles;
