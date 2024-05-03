const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect("mongodb://localhost/socialNetworkDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
  {
    username: "testUser1",
    email: "test1@test.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "testUser2",
    email: "test2@test.com",
    thoughts: [],
    friends: [],
  },
];

const thoughtSeed = [
  {
    thoughtText: "Hello World!",
    username: "testUser1",
    reactions: [],
  },
  {
    thoughtText: "This is a test thought",
    username: "testUser2",
    reactions: [],
  },
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(() => db.Thought.deleteMany({}))
  .then(() => db.Thought.collection.insertMany(thoughtSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
