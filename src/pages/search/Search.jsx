import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSearchResults } from '../../store/action/movieAction';
import SearchView from './SearchView';

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.movies.searchResults);
  const [searchTerm, setSearchTerm] = useState('');
  const [defaultMovies, setDefaultMovies] = useState([]); // State untuk film default

  // Ambil film populer sebagai daftar default saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      const API_KEY = '28949abe6dd53bd44335a04badfb0928';
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      
      try {
        const response = await axios.get(url);
        setDefaultMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching default movies:', error);
      }
    };

    fetchDefaultMovies();
  }, []);

  const handleSearch = useCallback(async (event) => {
    event.preventDefault();
    const API_KEY = '28949abe6dd53bd44335a04badfb0928';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
    
    try {
      const response = await axios.get(url);
      dispatch(setSearchResults(response.data.results));
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, [dispatch, searchTerm]);

  return (
    <SearchView
      movies={searchTerm ? searchResults : defaultMovies} // Tampilkan defaultMovies jika belum ada pencarian
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
};

export default Search;
