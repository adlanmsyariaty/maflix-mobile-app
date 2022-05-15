const { ApolloServer, gql } = require("apollo-server");
const userSchema = require('./schemas/userSchema')
const movieSchema = require('./schemas/movieSchema')
const genreSchema = require('./schemas/genreSchema')

const server = new ApolloServer({
  typeDefs: [userSchema.typeDefs, movieSchema.typeDefs, genreSchema.typeDefs],
  resolvers: [userSchema.resolvers, movieSchema.resolvers, genreSchema.resolvers],
});

server.listen().then(({ url }) => {
  console.log("🚀 ~ file: app.js ~ line 38 ~ .then ~ url", url); 
});
