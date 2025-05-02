import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LikeContext } from '../context/contexto';
import episodeCardImg from '../assets/img/imagen.webp';
import '../assets/styles/Episodes.css';

const EpisodeCard = ({ episode: { id, name, air_date, episode: code } }) => {
  const { likeEpisode, dislikeEpisode, votes } = useContext(LikeContext);
  const currentVotes = votes?.[id] || 0;

  return (
    <div className="episode-card">
      <img src={episodeCardImg} alt="Episode" className="episode-image" />
      
      <div className="episode-info">
        <div className="episode-details">
          <h2>{name}</h2>
          <p><strong>Código:</strong> {code}</p>
          <p><strong>Fecha de transmisión:</strong> {air_date}</p>
          <Link to={`/episode/${id}`}>
            <button className="detail-button">Ver Detalle</button>
          </Link>
        </div>

        <div className="episode-actions">
          <div className="buttons">
            <button 
              onClick={() => likeEpisode(id)} 
              disabled={currentVotes === 1}
              className="likeButton"
            >
              Me gusta
            </button>
            <button 
              onClick={() => dislikeEpisode(id)} 
              disabled={currentVotes === -1}
              className="dislikeButton"
            >
              No me gusta
            </button>
          </div>
          <p className="votes">Votos: {currentVotes}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
