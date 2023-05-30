import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getCreditsMovie } from '../../themoviedbAPI';
import image from '../../image/image.jpg';
import {
  CastFoto,
  CastInfo,
  CastList,
  CastListItem,
  Name,
  Character,
} from './Cast.styled';
import { NoServise } from 'components/NoServise/NoServise';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCreditsMovie(movieId)
      .then(response => {
        // console.log(response.data.cast);
        setCast(response.data.cast);
      })
      .catch(error => setError(error.toJSON()));
  }, [movieId]);

  return (
    <>
      {error && <NoServise message={error} />}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(({ id, character, name, original_name, profile_path }) => (
            <CastListItem key={id}>
              <CastFoto
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : image
                }
                alt={original_name}
              />
              <CastInfo>
                <Name>{name ? name : '...'}</Name>
                <Character>
                  <b>character:</b> {character ? character : '...'}{' '}
                </Character>
              </CastInfo>
            </CastListItem>
          ))}
        </CastList>
      ) : (
        <NoServise message="cast not found" />
      )}
    </>
  );
};

export default Cast;
