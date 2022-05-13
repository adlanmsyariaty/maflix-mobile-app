const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

const usersBaseUrl = "http://localhost:3001";
const moviesBaseUrl = "http://localhost:3002";

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    phoneNumber: String
    address: String
  }

  type Query {
    getUsers: [User]
    getUser(_id: ID): User
  }

  type Mutation {
    addUser(
      username: String
      email: String!
      password: String!
      role: String
      phoneNumber: String
      address: String
    ): User
    deleteUser(_id: ID): User
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const usersCache = await redis.get("users");
        if (usersCache) {
          return JSON.parse(usersCache);
        } else {
          const { data: users } = await axios.get(`${usersBaseUrl}/users`);
          await redis.set("users", JSON.stringify(users));
          return users;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getUser: async (_, args) => {
      try {
        const id = args._id;
        const userDetailCache = await redis.get("userDetail");
        if (userDetailCache && JSON.parse(userDetailCache).id === id) {
          return JSON.parse(userDetailCache);
        } else {
          const { data: user } = await axios.get(`${usersBaseUrl}/users/${id}`);
          await redis.set("userDetail", JSON.stringify(user));
          return user;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      try {
        const { username, email, password, role, phoneNumber, address } = args;
        const { data: newUser } = await axios.post(`${usersBaseUrl}/users`, {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        });

        const usersCache = await redis.get("users");
        if (usersCache) {
          let newUsersCache = JSON.parse(usersCache);
          newUsersCache.push(newUser);
          await redis.set("users", JSON.stringify(newUsersCache));
        }

        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
    deleteUser: async (_, args) => {
      try {
        const id = args._id
        await axios.get(`${usersBaseUrl}/users/${id}`)

        let usersCache = await redis.get("users");
        const userDetailCache = await redis.get("userDetail");

        let newCache = JSON.parse(usersCache)

        let deletedDataIndex = JSON.parse(usersCache).findIndex(
          (user) => user._id === id
        );

        await axios.delete(`${usersBaseUrl}/users/${id}`)

        if (deletedDataIndex !== -1) {
          newCache.splice(deletedDataIndex, 1);
          await redis.set("users", JSON.stringify(newCache));

          if (userDetailCache && JSON.parse(userDetailCache)._id === id) {
            await redis.del("userDetail");
          }

        }

        return {message: "Delete has been successfully"}
      } catch (error) {
        console.log(error)
      }
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("🚀 ~ file: app.js ~ line 38 ~ .then ~ url", url);
});
