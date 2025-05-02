import { useState, useEffect } from 'react';
import EpisodeCard from '../Componentes/EpisodiosCard.js';


const Home = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(res => res.json())
      .then(data => setEpisodes(data.results));
  }, []);

  return (
    <div className="episode-list">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Home;