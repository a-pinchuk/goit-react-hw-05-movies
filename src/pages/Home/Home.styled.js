import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  /* @include media-min(tablet) {
  gap: 32px;
}
@include media-min(desktop) {
  gap: 16px;
} */
`;

export const PhotoCard = styled.li`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: filter 300ms ease-in-out;
  &:hover,
  &:focus {
    .movie__rating {
      filter: drop-shadow(2px -2px 2px getColor(primary-text-color));
    }
    .film__title {
      // filter: drop-shadow(1px -1px 1px rgb(90, 88, 88));
      transform: scale(1.01);
    }
    .movie__image {
      filter: drop-shadow(1px 1px 15px getColor(secondary-text-color));
    }
    // filter: drop-shadow(0px -1px 30px getColor(secondary-text-color));
    // filter: drop-shadow(1px 1px 10px getColor(secondary-text-color));
  }
  width: calc((100% - 32px) / 3);
`;

export const MovieImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;

  object-fit: cover;
  transition: filter 300ms ease-in-out;

  max-width: 395px;
  height: 575px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
  padding-top: 12px;
`;

export const FilmTitle = styled.p`
  font-family: inherit;
  font-weight: 500;

  font-size: 19.5px;
  line-height: 1.2;
`;

export const MovieTitle = styled.h1`
  text-align: center;
`;
