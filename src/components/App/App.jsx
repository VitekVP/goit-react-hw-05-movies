import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';
import { Container } from './App.styled';
// import RedirectComponent from 'components/RedirectComponent/RedirectComponent';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));
// const RedirectComponent = lazy(() =>
//   import('../../components/RedirectComponent/RedirectComponent')
// );

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="redirect" element={<RedirectComponent />} /> */}
          {/* <Navigate to="/" replace={true} /> */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
