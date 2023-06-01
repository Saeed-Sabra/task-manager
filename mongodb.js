// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database!");
    }
    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({ discretion: "disc 3" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // db.collection("users")
    //   .deleteMany({ age: 22 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("64778b8381035710b0b73d3e") },
    //     { $inc: { age: 5 } }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("users").findOne(
    //   {
    //     _id: new ObjectID("64778b8381035710b0b73d3e"),
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find user!");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 22 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("64779277d76dbe0be8b68646"),
    //   },
    //   (error, task) => {
    //     if (error) {
    //       return console.log("Unable to find task!");
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({
    //     completed: false,
    //   })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unable to find tasks!");
    //     }
    //     console.log(tasks);
    //   });

    // db.collection("users").insertOne(
    //   {
    //     name: "Omar",
    //     age: 22,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "ali",
    //       age: 22,
    //     },
    //     {
    //       name: "adham",
    //       age: 24,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       discretion: "disc 4",
    //       completed: true,
    //     },
    //     {
    //       discretion: "disc 5",
    //       completed: false,
    //     },
    //     {
    //       discretion: "disc 6",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert data!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
