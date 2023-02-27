import { fetchTrendingFilms } from 'components/services/fetchApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FilmTitle,
  GalleryList,
  MovieImage,
  MovieInfo,
  MovieTitle,
  PhotoCard,
} from './Home.styled';

const Home = () => {
  const [trendFilm, setTrendFilm] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    fetchTrendingFilms().then(data => {
      setTrendFilm(data);
    });
  }, []);

  return (
    <>
      <MovieTitle>Trending today</MovieTitle>
      <GalleryList>
        {trendFilm.map(el => {
          return (
            <PhotoCard key={el.id}>
              <Link to={`/movies/${el.id}`}>
                <MovieImage
                  src={baseURL + el.poster_path}
                  alt=""
                  width="500"
                  height="750"
                />
                <MovieInfo>
                  <FilmTitle>{el.title ? el.title : el.name}</FilmTitle>
                </MovieInfo>
              </Link>
            </PhotoCard>
          );
        })}
      </GalleryList>
    </>
  );
};

export default Home;
