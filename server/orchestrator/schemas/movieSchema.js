const { gql } = require("apollo-server");
const usersBaseUrl = "https://maflix-service-user.herokuapp.com";
const moviesBaseUrl = "https://maflix-service-app.herokuapp.com";
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis({
  port: 13863,
  host: "redis-13863.c278.us-east-1-4.ec2.cloud.redislabs.com",
  username: "default",
  password: "xRzVSzQGR3GuoiHfK5ArPLf6yFvej3og",
  db: 0,
});

const typeDefs = gql`
  input MovieInput {
    title: String
    synopsis: String
    trailerUrl: String
    imgUrl: String
    rating: Int
    UserMongoId: String
    genres: [Int]
    casts: [Int]
  }

  type Movie {
    id: ID
    title: String
    slug: String
    synopsis: String
    trailerUrl: String
    imgUrl: String
    rating: Int
    authorId: Int
    UserMongoId: String
    createdAt: String
    updatedAt: String
    Genres: [Genres]
    Casts: [Casts]
    User: User
  }

  type Message {
    message: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type Genres {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
    MovieGenres: MovieGenres
  }

  type Casts {
    id: ID
    name: String
    profilePict: String
  }

  type MovieGenres {
    id: ID
    genreId: Int
    movieId: Int
    createdAt: String
    updatedAt: String
    Movie: Movie
  }

  type Query {
    getMovies: [Movie]
    getMovie(id: ID): Movie
    getMoviesByGenre(id: ID): [MovieGenres]
    getMoviesByTitle(title: String): [Movie]
  }

  type Mutation {
    addMovie(newMovieData: MovieInput): Movie
    updateMovie(id: ID, newMovieData: MovieInput): Movie
    deleteMovie(id: ID): Message
  }
`;

const resolvers = {
  Query: {
    getMovies: async () => {
      try {
        const moviesCache = await redis.get("movies");
        if (moviesCache) {
          return JSON.parse(moviesCache);
        } else {
          const { data: movies } = await axios.get(
            `${moviesBaseUrl}/movies?search`
          );
          await redis.set("movies", JSON.stringify(movies));
          return movies;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getMovie: async (_, args) => {
      try {
        const id = +args.id;
        const movieDetailCache = await redis.get("movieDetail");
        if (movieDetailCache && JSON.parse(movieDetailCache).id === id) {
          return JSON.parse(movieDetailCache);
        } else {
          const { data: movie } = await axios.get(
            `${moviesBaseUrl}/movies/${id}`
          );
          const { data: user } = await axios.get(
            `${usersBaseUrl}/users/${movie.UserMongoId}`
          );
          movie.User = user;
          await redis.set("movieDetail", JSON.stringify(movie));
          return movie;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getMoviesByGenre: async (_, args) => {
      try {
        const id = +args.id;
        const moviesByGenre = await redis.get("moviesByGenre");

        if (moviesByGenre && JSON.parse(moviesByGenre).id === id) {
          return JSON.parse(moviesByGenre);
        } else {
          const { data: movies } = await axios.get(
            `${moviesBaseUrl}/users/movies/genres?genre=${id}`
          );
          await redis.set("moviesByGenre", JSON.stringify(movies));
          return movies;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getMoviesByTitle: async (_, args) => {
      try {
        const title = args.title;
        const { data: movies } = await axios.get(
          `${moviesBaseUrl}/movies?search=${title}`
        );

        return movies;
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    addMovie: async (_, args) => {
      try {
        const {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          UserMongoId,
          genres,
          casts,
        } = args.newMovieData;

        const { data: newMovie } = await axios.post(`${moviesBaseUrl}/movies`, {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          UserMongoId,
          genres,
          casts,
        });

        const { data: addedMovie } = await axios.get(
          `${moviesBaseUrl}/movies/${newMovie.id}`
        );
        delete addedMovie.Casts;

        const moviesCache = await redis.get("movies");
        if (moviesCache) {
          let newMoviesCache = JSON.parse(moviesCache);
          newMoviesCache.push(addedMovie);
          await redis.set("movies", JSON.stringify(newMoviesCache));
        }

        return newMovie;
      } catch (error) {
        console.log(error);
      }
    },
    deleteMovie: async (_, args) => {
      try {
        const id = +args.id;
        await axios.get(`${moviesBaseUrl}/movies/${id}`);

        let moviesCache = await redis.get("movies");
        const movieDetailCache = await redis.get("movieDetail");

        let newCache = JSON.parse(moviesCache);

        let deletedDataIndex = JSON.parse(moviesCache).findIndex(
          (movie) => movie.id == id
        );

        const result = await axios.delete(`${moviesBaseUrl}/movies/${id}`);

        if (deletedDataIndex !== -1) {
          newCache.splice(deletedDataIndex, 1);
          await redis.set("movies", JSON.stringify(newCache));

          if (movieDetailCache && JSON.parse(movieDetailCache).id === id) {
            await redis.del("movieDetail");
          }
        }

        return result.data;
      } catch (error) {
        console.log(error);
        return error.response.data;
      }
    },
    updateMovie: async (_, args) => {
      try {
        const id = +args.id;
        const {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          UserMongoId,
          genres,
          casts,
        } = args.newMovieData;

        await axios.get(`${moviesBaseUrl}/movies/${id}`);
        await axios.put(`${moviesBaseUrl}/movies/${id}`, {
          title,
          synopsis,
          trailerUrl,
          imgUrl,
          rating,
          UserMongoId,
          genres,
          casts,
        });

        let moviesCache = await redis.get("movies");
        const movieDetailCache = await redis.get("movieDetail");

        const { data: updatedMovie } = await axios.get(
          `${moviesBaseUrl}/movies/${id}`
        );

        if (movieDetailCache && JSON.parse(movieDetailCache).id === id) {
          await redis.set("movieDetail", JSON.stringify(updatedMovie));
        }

        delete updatedMovie.Casts;

        let newCache = JSON.parse(moviesCache);
        let updatedIndex = JSON.parse(moviesCache).findIndex(
          (movie) => movie.id == id
        );

        if (updatedIndex !== -1) {
          delete newCache[updatedIndex];
          newCache[updatedIndex] = updatedMovie;
          await redis.set("movies", JSON.stringify(newCache));
        }

        return updatedMovie;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
