
const mongoose=require("mongoose")
const url='mongodb+srv://023neeraja:neelima143@cluster0.d5fmcua.mongodb.net/Users?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser: "true",
useUnifiedTopology: "true"})//mongodb://127.0.0.1/react-login-tut --- mongodb+srv://023neeraja:neelima143@cluster0.d5fmcua.mongodb.net/Users
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
  