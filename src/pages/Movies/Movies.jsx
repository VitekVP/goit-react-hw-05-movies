import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { gethMoviesBySearch } from '../../themoviedbAPI';
import { NoServise } from 'components/NoServise/NoServise';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const queryMovie = searchParams.get('query') ?? '';

  const handleSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };
  // console.log(queryMovie);
  useEffect(() => {
    if (queryMovie === '') {
      return;
    }
    setLoading(true);

    gethMoviesBySearch(queryMovie)
      .then(response => {
        setMoviesSearch(response.data.results);
      })
      .catch(error => setError(error.toJSON()))
      .finally(setLoading(false));
  }, [queryMovie]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <NoServise message={error} />}
      {moviesSearch && <SearchMoviesList movies={moviesSearch} />}
    </>
  );
};

export default Movies;
