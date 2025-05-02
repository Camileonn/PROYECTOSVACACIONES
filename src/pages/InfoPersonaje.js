import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; // ✅ IMPORTANTE
import { CharacterContext } from '../context/personaje';
import '../assets/styles/infopersonaje.css';

export default function InfoPersonaje() {
  const { id } = useParams(); 
  const { currentCharacter, setCurrentCharacter } = useContext(CharacterContext);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setCurrentCharacter(data);
      } catch (error) {
        console.error('Error al obtener personaje:', error);
      }
    };

    fetchCharacter();
  }, [id, setCurrentCharacter]);

  if (!currentCharacter) return <p>Cargando personaje...</p>;

  return (
    <div className="characterDetail">
      <img src={currentCharacter.image} alt={currentCharacter.name} />
      <div className="characterInfo">
        <h1>{currentCharacter.name}</h1>
        <p><strong>Origin:</strong> {currentCharacter.origin.name}</p>
        <p><strong>Location:</strong> {currentCharacter.location.name}</p>
        <p><strong>Species:</strong> {currentCharacter.species}</p>
        <p><strong>Gender:</strong> {currentCharacter.gender}</p>
        <p><strong>Type:</strong> {currentCharacter.type || 'Unknown'}</p>
        <p><strong>Status:</strong> {currentCharacter.status}</p>
      </div>
    </div>
  );
}
