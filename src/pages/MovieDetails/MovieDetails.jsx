import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieById } from '../../themoviedbAPI';
import { MovieInfoCard } from 'components/MovieInfoCard/MovieInfoCard';
import { Loader } from 'components/Loader/Loader';
import { NoServise } from 'components/NoServise/NoServise';

const MovieDatails = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovieById(movieId)
      .then(response => {
        // console.log(response.data);
        setMovieInfo(response.data);
      })
      .catch(error => setError(error.toJSON()))
      .finally(() => setLoading(false));
  }, [movieId]);

  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movieInfo;
  // console.log(genres);

  return (
    <div>
      {loading && <Loader />}
      {error && <NoServise message={error} />}
      {movieInfo && (
        <MovieInfoCard
          genres={genres}
          alt={original_title}
          overview={overview}
          poster={poster_path}
          title={title}
          date={release_date}
          score={vote_average}
        />
      )}
    </div>
  );
};
export default MovieDatails;
