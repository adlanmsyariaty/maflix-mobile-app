const { MongoClient } = require("mongodb");
const docs = [
  {
    id: 1,
    username: "adlan",
    email: "adlan@gmail.com",
    password: "$2b$10$GmAqCUSdtbcffmIyu8qQzejwUk3GUJoRwrEw4ax5pQh5Oec83zk1a",
    role: "admin",
    phoneNumber: "83435783",
    address: "Jalan Hacktiv8 Student Phase 3",
    createdAt: "2022-05-16T04:52:23.032Z",
    updatedAt: "2022-05-16T04:52:23.032Z",
  },
  {
    id: 2,
    username: "malik",
    email: "malik@gmail.com",
    password: "$2b$10$GQfUqWF1LsyrTnIMPiIP8.6kCOSYRMmaN7jb1SDC4mDZr2hcQ4kjq",
    role: "admin",
    phoneNumber: "83435783",
    address: "Jalan Hacktiv8 Student Phase 4",
    createdAt: "2022-05-16T04:52:23.101Z",
    updatedAt: "2022-05-16T04:52:23.101Z",
  },
  {
    id: 3,
    username: "syariaty",
    email: "syariaty@gmail.com",
    password: "$2b$10$GmAqCUSdtbcffmIyu8qQzejwUk3GUJoRwrEw4ax5pQh5Oec83zk1a",
    role: "admin",
    phoneNumber: "012345678",
    address: "Jalan Hacktiv8 Student Phase 5",
    createdAt: "2022-05-16T04:52:23.032Z",
    updatedAt: "2022-05-16T04:52:23.032Z",
  },
];

const uri = `mongodb+srv://mongo:${process.env.PASSWORD}@cluster0.ujxji.mongodb.net/test`;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("maflix-service-user");

    const users = database.collection("users");

    const option = { ordered: true };
    const result = await users.insertMany(docs, option);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
