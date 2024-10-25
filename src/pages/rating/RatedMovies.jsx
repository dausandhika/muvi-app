import { useDispatch, useSelector } from 'react-redux';
import RatedMoviesView from './RatedMoviesView';
import { useCallback, useEffect } from 'react';
import { setRating, deleteRatedMovie } from '../../store/action/detailAction';
import axios from 'axios';

const RatedMovies = () => {
  const ratedMovies = useSelector(state => state.details.rated);
  const dispatch = useDispatch();

  const fetchMovieDetails = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/account/21559438/rated/movies?language=en-US&page=1&sort_by=created_at.asc`, 
      {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OWFiZTZkZDUzYmQ0NDMzNWEwNGJhZGZiMDkyOCIsIm5iZiI6MTcyOTgzNjc2MC4zMDA0NTIsInN1YiI6IjY3MDQ5N2U4NTQ1NGI4NjIzMzY5YmI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFHDLHKrsqxQZJIhhgo1d3INsJVf0Wv9Y3LK6UFyRek'
        }
      });
      dispatch(setRating(response.data.results));
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }, [dispatch]);

  const handleDelete = (movieId) => {
    dispatch(deleteRatedMovie(movieId));
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return <RatedMoviesView movies={ratedMovies} onDelete={handleDelete} />;
};

export default RatedMovies;
