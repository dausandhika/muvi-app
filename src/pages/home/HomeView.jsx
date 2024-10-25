import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../components/context/ThemeContext';

const HomeView = ({ trending, popular, topRated }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`container mx-auto py-8 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">Trending This Week</h2>
        <div className="flex w-full overflow-x-auto gap-6 pb-4">
          {trending?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="block flex-shrink-0 w-48">
              <div className={`rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">Top Rated</h2>
        <div className="flex w-full overflow-x-auto gap-6 pb-4">
          {topRated?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="block flex-shrink-0 w-48">
              <div className={`rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-extrabold text-yellow-500 mb-4">Popular</h2>
        <div className="flex w-full overflow-x-auto gap-6 pb-4">
          {popular?.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="block flex-shrink-0 w-48">
              <div className={`rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{movie.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{movie.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default HomeView;
