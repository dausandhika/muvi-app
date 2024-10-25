export const setMovieDetails = (movie) => ({
  type: 'SET_MOVIE_DETAILS',
  payload: movie,
});

export const setRating = (rating) => ({
  type: 'SET_RATING',
  payload: rating,
});

export const addRatedMovie = (movie) => ({
  type: 'ADD_RATED_MOVIE',
  payload: movie,
});

export const deleteRatedMovie = (movieId) => ({
  type: 'DELETE_RATED_MOVIE',
  payload: movieId,
});
