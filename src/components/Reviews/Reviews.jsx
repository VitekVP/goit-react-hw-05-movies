import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getReviewsMovie } from '../../themoviedbAPI';
import { ReviewItem } from './Reviews.styled';
import { NoServise } from 'components/NoServise/NoServise';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewsMovie(movieId)
      .then(response => {
        // console.log(response);
        setReview(response.data.results);
      })
      .catch(error => setError(error.toJSON()));
  }, [movieId]);

  return (
    <>
      {error && <NoServise message={error} />}
      <ul>
        {review.length > 0 ? (
          review.map(({ author, id, content }) => (
            <ReviewItem key={id}>
              {' '}
              <p>
                <b>{author}:</b>
                {content}
              </p>{' '}
            </ReviewItem>
          ))
        ) : (
          <NoServise message="review not found" />
        )}
      </ul>
    </>
  );
};

export default Reviews;
