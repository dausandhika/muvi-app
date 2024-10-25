import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/context/ThemeContext';

const SearchView = ({ searchResults, searchTerm, setSearchTerm, handleSearch }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className={`w-full p-2 rounded border ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
        />
        <button type="submit" className="mt-2 bg-red-600 text-white p-2 rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="block">
            <div className={`rounded overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchView;