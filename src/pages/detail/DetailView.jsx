import React from 'react';
import { useTheme } from '../../components/context/ThemeContext';

const DetailView = ({ movie, onRate, currentRating }) => {
  const { darkMode } = useTheme();

  const ratingButtons = [1, 2, 3, 4, 5];

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {movie && (
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:ml-8 w-full">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">{movie.title}</h1>
            <p className="text-lg mb-6">{movie.overview}</p>
            <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="mb-2"><strong>TMDb Rating:</strong> {movie.vote_average}/10</p>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Rate this movie:</h2>
              <div className="flex gap-2">
                {ratingButtons.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => onRate(rate)}
                    className={`px-4 py-2 rounded-lg font-medium text-lg transition duration-200 ease-in-out
                      ${rate <= currentRating
                        ? 'bg-yellow-500 text-white'
                        : darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                      }`}
                  >
                    {rate}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
