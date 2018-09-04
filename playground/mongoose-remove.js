const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove(_id: "5b8e82bf0c5a3f09f0d97bc6").then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove("5b8e82bf0c5a3f09f0d97bc6").then((todo) => {
  console.log(todo);
});
