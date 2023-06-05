const Task = require("../src/models/task");
require("../src/db/mongoose");

const _id = "647a56e06eb6c35bfc942c47";

// Task.findByIdAndDelete(_id)
//   .then((task) => {
//     return Task.countDocuments({ completed: false }).then((result) => {
//       console.log(result);
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount(_id, false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
