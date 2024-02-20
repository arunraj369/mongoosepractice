const mongoose = require("mongoose");
const User = require("./userModel/user");
mongoose
  .connect("mongodb://localhost:27017/dummydatabase")
  .then(() => {
    console.log("Db connected");
  })
  .catch(() => {
    console.log("connection Error");
  });

const users = new User({
  name: "Gopi",
  age: 26,
});

// direct ah user save panra method
// users
//   .save()
//   .then(() => {
//     console.log("saved succesfully");
//   })
//   .catch(() => {
//     console.log("Error while save file");
//   });

// async function la save panra method do it this way
async function run() {
  const newuser = await users.save();
  console.log(newuser);
}

run();
