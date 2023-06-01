const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Task = mongoose.model("Task", {
  discretion: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

// const me = new User({
//   name: "Saeed",
//   age: 23,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const firstT = new Task({
//   discretion: "Disc 1",
//   completed: true,
// });

// firstT
//   .save()
//   .then(() => {
//     console.log(firstT);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// Task.deleteOne({
//   completed: true,
// }).then((result) => {
//   console.log(result);
// });

// Task.updateOne({ completed: true }, { $set: { completed: false } }).then(
//   (result) => {
//     console.log(result);
//   }
// );
