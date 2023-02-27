import Cast from 'pages/Cast/Cast';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import Reviews from 'pages/Reviews';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </>
  );
};
