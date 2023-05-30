import { useState, useEffect } from 'react';

import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { getTrendingMovies } from '../../themoviedbAPI';
import { NoServise } from 'components/NoServise/NoServise';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => setError(error.toJSON()));
  }, []);

  return (
    <>
      <h1 style={{ fontSize: 24 }}>Trending today:</h1>
      {error && <NoServise message={error} />}
      {movies && <TrendingMoviesList movies={movies} />}
    </>
  );
};

export default Home;
