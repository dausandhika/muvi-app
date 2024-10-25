const initialState = {
  movie: null,
  rated: []
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return { ...state, movie: action.payload };
    case 'SET_RATING':
      return { ...state, rated: action.payload  };
    case 'DELETE_RATED_MOVIE':
      return {
        ...state,
        rated: state.rated.filter(movie => movie.id !== action.payload),
      };      
    default:
      return state;
  }
};

export default detailReducer;