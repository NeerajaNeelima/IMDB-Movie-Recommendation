const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://023neeraja:neelima143@cluster0.d5fmcua.mongodb.net/Users")//mongodb://127.0.0.1/react-login-tut
.then(() =>console.log("mongodb connected"))//mongodb+srv://023neeraja:neelima143@cluster0.d5fmcua.mongodb.net/Users/userlogdin
.catch((e) =>console.log(e));

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
  
  const User = mongoose.model("User", userSchema)
  
  module.exports = User
  