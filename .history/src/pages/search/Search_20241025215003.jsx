import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setSearchResults } from '../../store/action/movieAction';
import SearchView from './SearchView';

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.movies.searchResults);
  const [searchTerm, setSearchTerm] = useState('');

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
      searchResults={searchResults}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
    />
  );
};

export default Search;