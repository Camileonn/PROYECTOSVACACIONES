import '../assets/styles/personajecard.css';
import { useContext } from 'react';
import { LikeContext } from '../context/contexto';
import { Link } from 'react-router-dom';

const PersonajesCard = ({ character }) => {
  const { likeCharacter, votes } = useContext(LikeContext);

  if (!character) return <p>Character not found</p>;

  const voteCount = votes[character.id] || 0;

  return (
    <div className="characterCard">
      <div className="characterCardInfo">
        <h3>{character.name}</h3>
        <p><strong>Estatus:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>

        <div className="characterCardButtons">
          <Link to={`/personaje/${character.id}`}>
            <button>Ver Detalle</button>
          </Link>
          <button onClick={() => likeCharacter(character.id)}>Like</button>
        </div>

        <p className="voteCount">Votos: {voteCount}</p>
      </div>

      <div className="characterCardImage">
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default PersonajesCard;
