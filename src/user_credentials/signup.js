
import React, { useState } from "react"
import axios from "axios"
import {useNavigate, Link } from "react-router-dom"
import "./login.css"

function Signup() {

    const history=useNavigate();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
             await axios.post("http://localhost:5000/signup",{
                email,password
             })
             .then(res => {
                if(res.data ==="exist"){
                    alert("user already exists")
                }
                else if(res.data ==="notexist"){
                    
                    history("/home",{state:{id:email}})
                }
             })
             .catch(e => {
                alert("Wrong Credentials ")
                console.log(e)
             })
        }
        catch(e){
            console.log(e);
        }
    }
    
    return(
        <div className="background-image">
        <div className="login-card">
            <div className="login-container">
                <div className="login-form">
                    <h1>SignUP</h1>
                    <form action="POST">
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} name="" id="" placeholder="Enter your Email" />
                <input type="email" onChange={(e) => {setPassword(e.target.value)}} name="" id="" placeholder="Enter your password" />
                <input type="submit" id="button" onClick={submit}/>
            </form>
            <br/>
            <p> OR </p>
            <br/>
            <Link to="/">Login</Link>
            </div>
            </div>
        </div>
        </div>
    )
}


export default Signup