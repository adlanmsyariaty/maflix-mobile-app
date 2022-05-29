import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMovies {
    getMovies {
      id
      title
      imgUrl
    }
  }
`;

export const GET_MOVIE_DETAIL = gql`
  query GetMovie($getMovieId: ID) {
    getMovie(id: $getMovieId) {
      id
      title
      synopsis
      trailerUrl
      imgUrl
      rating
      UserMongoId
      Genres {
        id
        name
        createdAt
        updatedAt
      }
      Casts {
        id
        name
        profilePict
      }
      User {
        _id
        username
        address
      }
    }
  }
`;

export const GET_MOVIES_BY_GENRE = gql`
  query Query($getMovieByGenreId: ID) {
    getMoviesByGenre(id: $getMovieByGenreId) {
      id
      genreId
      movieId
      Movie {
        id
        title
        imgUrl
      }
    }
  }
`;

export const GET_MOVIES_BY_TITLE = gql`
  query Query($title: String) {
    getMoviesByTitle(title: $title) {
      title
      id
      imgUrl
      trailerUrl
    }
  }
`;
