import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/context/ThemeContext';

const RatedMoviesView = ({ movies, onDelete }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg`}>
      <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-500">Your Rated Movies</h1>
      
      <div className="space-y-8">
        {movies?.map(movie => (
          <div 
            key={movie.id} 
            className={`flex flex-col md:flex-row items-center rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-2xl 
            ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            <Link to={`/movie/${movie.id}`} className="block w-full md:w-1/5 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </Link>
            
            <div className="p-6 flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{movie.title}</h2>
              <p className="text-gray-300 mb-4 line-clamp-3">{movie.overview}</p>
              <p className="text-gray-400"><strong>Your Rating:</strong> {movie.rating}/5</p>
              
              <button
                onClick={() => onDelete(movie.id)}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatedMoviesView;
