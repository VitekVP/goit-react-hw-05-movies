import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import image from '../../image/image.jpg';
import { A, Item, List, Wrap } from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <A to={`movies/${id}`} state={{ from: location }}>
              <Wrap>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : image
                  }
                  alt={title}
                  width="60"
                  height="80"
                />
              </Wrap>
              {title}
            </A>
          </Item>
        );
      })}
    </List>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
