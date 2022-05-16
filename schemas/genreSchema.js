const { gql } = require("apollo-server");
const moviesBaseUrl = "https://maflix-service-app.herokuapp.com";
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

const typeDefs = gql`
  type Genre {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    getGenres: [Genre]
  }
`;

const resolvers = {
  Query: {
    getGenres: async () => {
      try {
        const genresCache = await redis.get("genres");
        if (genresCache) {
          return JSON.parse(genresCache);
        } else {
          const { data: genres } = await axios.get(
            `${moviesBaseUrl}/users/genres`
          );
          await redis.set("genres", JSON.stringify(genres));
          return genres;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
