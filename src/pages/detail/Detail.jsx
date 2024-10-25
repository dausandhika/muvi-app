import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMovieDetails } from '../../store/action/detailAction';
import { addRatedMovie } from '../../store/action/movieAction';
import DetailView from './DetailView';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.details.movie);
  const ratedMovies = useSelector(state => state.movies.rated);

  const fetchMovieDetails = useCallback(async () => {
    const API_KEY = '28949abe6dd53bd44335a04badfb0928';
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      dispatch(setMovieDetails(response.data));
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  const handleRating = useCallback(async (rating) => {
    try {
      const response = await axios.post(`https://api.themoviedb.org/3/movie/${id}/rating`, {
        value: rating
      }, 
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OWFiZTZkZDUzYmQ0NDMzNWEwNGJhZGZiMDkyOCIsIm5iZiI6MTcyOTgzNjc2MC4zMDA0NTIsInN1YiI6IjY3MDQ5N2U4NTQ1NGI4NjIzMzY5YmI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iFHDLHKrsqxQZJIhhgo1d3INsJVf0Wv9Y3LK6UFyRek'
      }
    });
      if (response.data.statu_code === 1) {
        alert('berhasil tambah ratingng')
      } else if (response.data.statu_code === 12) {
        alert('berhasil update ratingng')
      }
    } catch (error) {
      console.error('Error rating movie:', error);
    }
  }, [id]);

  const currentRating = ratedMovies.find(movie => movie.id === parseInt(id))?.rating || 0;

  return <DetailView movie={movieDetails} onRate={handleRating} currentRating={currentRating} />;
};

export default Detail;