import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    return module;
  })
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    return module;
  })
);
const Home = lazy(() =>
  import('pages/Home/Home').then(module => {
    return module;
  })
);
const Movies = lazy(() =>
  import('pages/Movies/Movies').then(module => {
    return module;
  })
);
const MovieDetails = lazy(() =>
  import('pages/MovieDetails/MovieDetails').then(module => {
    return module;
  })
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
