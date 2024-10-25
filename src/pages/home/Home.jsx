import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMovies, setPopular, setTopRated, setTrending } from '../../store/action/movieAction';
import HomeView from './HomeView';

const Home = () => {
  const dispatch = useDispatch();
  const trending = useSelector(state => state.movies.trending);
  const popular = useSelector(state => state.movies.popular);
  const topRated = useSelector(state => state.movies.topRated)
  const movies = useSelector(state => state.movies.list);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(trending,popular,topRated)

  const fetchSearch = useCallback(async (query = '') => {
    console.log('Searching for:', query);  // Log ini
    const API_KEY = '28949abe6dd53bd44335a04badfb0928';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    
    try {
      const response = await axios.get(url);
      console.log(response.data);  // Log response ini
      dispatch(setMovies(response.data.results));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [dispatch]);
  

  const fetchTrending = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week`
    try {
      const response = await axios.get(url
        ,{
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OWFiZTZkZDUzYmQ0NDMzNWEwNGJhZGZiMDkyOCIsIm5iZiI6MTcyOTMyODg0Mi4xMDQxMTgsInN1YiI6IjY3MDQ5N2U4NTQ1NGI4NjIzMzY5YmI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak080nRd69Oha0d2ys0yHO1puHo7063fyxXt1nZmPJ4'
        }
      });
      dispatch(setTrending(response.data.results));
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [dispatch]);

  const fetchPoupular = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/popular`
    try {
      const response = await axios.get(url
        ,{
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OWFiZTZkZDUzYmQ0NDMzNWEwNGJhZGZiMDkyOCIsIm5iZiI6MTcyOTMyODg0Mi4xMDQxMTgsInN1YiI6IjY3MDQ5N2U4NTQ1NGI4NjIzMzY5YmI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak080nRd69Oha0d2ys0yHO1puHo7063fyxXt1nZmPJ4'
        }
      });
      dispatch(setPopular(response.data.results));
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [dispatch]);

  const fetchTopRated = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated`
    try {
      const response = await axios.get(url
        ,{
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODk0OWFiZTZkZDUzYmQ0NDMzNWEwNGJhZGZiMDkyOCIsIm5iZiI6MTcyOTMyODg0Mi4xMDQxMTgsInN1YiI6IjY3MDQ5N2U4NTQ1NGI4NjIzMzY5YmI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ak080nRd69Oha0d2ys0yHO1puHo7063fyxXt1nZmPJ4'
        }
      });
      dispatch(setTopRated(response.data.results));
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTrending();
    fetchPoupular();
    fetchTopRated();
  }, [fetchTrending,fetchPoupular,fetchTopRated]);

  const handleSearch = useCallback((event) => {
    event.preventDefault();
    fetchSearch(searchTerm);
  }, [fetchSearch, searchTerm]);

  return (
    <HomeView
      movies={movies}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
      trending={trending}
      popular={popular}
      topRated={topRated}
    />
  );
};

export default Home;