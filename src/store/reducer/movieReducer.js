const initialState = {
  list: [],
  rated: [],
  trending: [],
  popular: [],
  topRated: [],
  searchResults: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, list: action.payload };
    case 'SET_TRENDING':
      return { ...state, trending: action.payload };
    case 'SET_POPULAR':
      return { ...state, popular: action.payload };
    case 'SET_TOP_RATED':
      return { ...state, topRated: action.payload };
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    case 'ADD_RATED_MOVIE':
      const existingMovieIndex = state.rated.findIndex(movie => movie.id === action.payload.id);
      if (existingMovieIndex !== -1) {
        const updatedRated = [...state.rated];
        updatedRated[existingMovieIndex] = action.payload;
        return { ...state, rated: updatedRated };
      } else {
        return { ...state, rated: [...state.rated, action.payload] };
      }
    default:
      return state;
  }
};

export default movieReducer;