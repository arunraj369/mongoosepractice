const mongoose = require("mongoose");

//Intha step la namakana schema epdi venumo apdi design panipom
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

// Intha step la oru model create panrom
// athuku 1st argument ah User name vaikirom because vera page la antha name vachi dha call pannporom
// 2nd argument ah create panna schema pass panrom
const usermodel = mongoose.model("User", userSchema);

// aprm antha model ah export panrom ver page la use panna
module.exports = usermodel;
