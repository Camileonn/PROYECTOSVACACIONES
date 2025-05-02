
export const initialState = {
    votes: {}  
  };
  
 
  const likeReducer = (state, action) => {
    switch (action.type) {
      case 'LIKE_EPISODE':
        return {
          ...state,
          votes: {
            ...state.votes,
            [action.id]: (state.votes[action.id] || 0) + 1,  
          },
        };
      case 'DISLIKE_EPISODE':
        return {
          ...state,
          votes: {
            ...state.votes,
            [action.id]: (state.votes[action.id] || 0) - 1,  
          },
        };
      case 'LIKE_CHARACTER':
        return {
          ...state,
          votes: {
            ...state.votes,
            [action.id]: (state.votes[action.id] || 0) + 1,  
          },
        };
      default:
        return state;
    }
  };
  
  export default likeReducer;
  