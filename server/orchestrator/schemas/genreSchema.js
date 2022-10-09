const { gql } = require("apollo-server");
const moviesBaseUrl = "https://maflix-service-app.herokuapp.com";
const axios = require("axios");
const Redis = require("ioredis");
// const redis = new Redis({
//   port: 13863,
//   host: "redis-13863.c278.us-east-1-4.ec2.cloud.redislabs.com",
//   username: "default",
//   password: "xRzVSzQGR3GuoiHfK5ArPLf6yFvej3og",
//   db: 0,
// });

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
<<<<<<< HEAD
        // const genresCache = await redis.get("genres");
        // if (genresCache) {
        //   return JSON.parse(genresCache);
        // } else {
        //   const { data: genres } = await axios.get(
        //     `${moviesBaseUrl}/users/genres`
        //   );
        //   await redis.set("genres", JSON.stringify(genres));
        //   return genres;
        // }
        const { data: genres } = await axios.get(
          `${moviesBaseUrl}/users/genres`
        );
        return genres;
=======
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
>>>>>>> a24ebfaf2f7babf1a0164a1607bedc77d484cd5f
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
