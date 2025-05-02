import { createContext, useReducer } from 'react';
import likeReducer, { initialState } from '../reducers/reducers';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(likeReducer, initialState);

  const likeEpisode = (id) => dispatch({ type: 'LIKE_EPISODE', id });
  const dislikeEpisode = (id) => dispatch({ type: 'DISLIKE_EPISODE', id });
  const likeCharacter = (id) => dispatch({ type: 'LIKE_CHARACTER', id });

  return (
    <LikeContext.Provider value={{ votes: state.votes, likeEpisode, dislikeEpisode, likeCharacter }}>
      {children}
    </LikeContext.Provider>
  );
};
