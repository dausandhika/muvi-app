import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/context/ThemeContext';

const RatedMoviesView = ({ movies, onDelete }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Your Rated Movies</h1>
      <div className="space-y-4">
        {movies?.map(movie => (
          <div key={movie.id} className="flex items-center bg-gray-800 rounded overflow-hidden shadow-lg">
            <Link to={`/movie/${movie.id}`} className="block w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </Link>
            <div className="p-4 flex-1">
              <h2 className="font-bold text-xl mb-2">{movie.title}</h2>
              <p className="text-gray-400">Your rating: {movie.rating}/5</p>
            </div>
            <button
              onClick={() => onDelete(movie.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatedMoviesView;
