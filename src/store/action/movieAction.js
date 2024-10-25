export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  payload: movies,
});

export const addRatedMovie = (movie) => ({
  type: 'ADD_RATED_MOVIE',
  payload: movie,
});

export const setTrending = (movies) => ({
  type: 'SET_TRENDING',
  payload: movies,
});

export const setPopular = (movies) => ({
  type: 'SET_POPULAR',
  payload: movies,
});

export const setTopRated = (movies) => ({
  type: 'SET_TOP_RATED',
  payload: movies,
});

export const setSearchResults = (movies) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: movies,
});