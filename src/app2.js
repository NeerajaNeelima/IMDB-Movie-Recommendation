

const express=require("express")
const User = require("./react-login-mongodb")
const cors=require("cors")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res) =>{

})

app.post("/",async(req,res) =>{
  const{email,password}=req.body

  try{
      const check=await User.findOne({email:email})
      
      if(check){
        res.json("exist")
      }
      else{
        res.json("notexist")
        
      }
  }
  catch(e){
      res.json("notexist")
  }
})



app.post("/signup",async(req,res) =>{
  const{email,password}=req.body

  const data={
    email:email,
    password:password
  }

  try{
      const check=await User.findOne({email:email})
      
      if(check){
        res.json("exist")
      }
      else{
        res.json("notexist")
        const newUser = new User(data);
        await newUser.save();
      }
      
  }
  catch(e){
      res.json("notexist")
  }
})

app.listen(5000,() => {
  console.log("Port connected");
})


