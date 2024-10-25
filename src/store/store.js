import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducer/movieReducer';
import detailReducer from './reducer/detailReducer';
import themeReducer from './reducer/themeReducer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    details: detailReducer,
    theme: themeReducer,
  },
});

export default store;