import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import PropTypes from 'prop-types';

import image from '../../image/image.jpg';
import { Loader } from 'components/Loader/Loader';
import {
  Btn,
  CardContainer,
  InfoBox,
  Subtitle,
  Link,
  List,
} from './MovieInfoCard.styled';

export const MovieInfoCard = ({
  genres,
  alt,
  overview,
  poster,
  date,
  title,
  score,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useRef(location.state?.from ?? '/');
  // console.log(location.state);
  const handleGoBack = () => navigate(goBack.current);

  return (
    <div>
      <Btn type="button" onClick={handleGoBack}>
        Go Back
      </Btn>
      <CardContainer>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : image}
          alt={alt}
          width="300"
          height="550"
        />
        <InfoBox>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>User Score: {score ? Math.round(score) * 10 : '...'}%</p>
          <b>Overviev:</b>
          <p>{overview ? overview : '...'}</p>
          <b>Genres:</b>
          <p>{genres ? genres.map(genre => genre.name).join(' ') : '...'}</p>
        </InfoBox>
      </CardContainer>
      <Subtitle>Additional information</Subtitle>
      <List>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieInfoCard.propTypes = {
  genres: PropTypes.array,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
};
