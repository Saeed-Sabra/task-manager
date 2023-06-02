const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const me = new User({
//   name: "   Omar    ",
//   email: " Omar@SABRA.SMS       ",
//   password: " PASS123 ",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// const firstT = new Task({
//   discretion: "Disc 5",
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

// User.deleteMany({
//   name: "Sabra",
// }).then((result) => {
//   console.log(result);
// });

// Task.updateOne({ completed: true }, { $set: { completed: false } }).then(
//   (result) => {
//     console.log(result);
//   }
// );
