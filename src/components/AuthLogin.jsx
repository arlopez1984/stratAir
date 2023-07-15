import { useContext } from 'react';
import {admin} from '../config/administrators.jsx'
import { AuthContext } from '../contexts/AuthContext.jsx';
import React from 'react'
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  const {userLogin,setUserLogin} = useContext(AuthContext) 
  const navigate = useNavigate();

  const handleSubmit = (e) =>{    
    e.preventDefault();
    const user = admin.find(administrator => administrator.username === userLogin.username && administrator.password === userLogin.password )
    user ?  handleNavigate(user) : navigate("/home");
  }
 

  const handleNavigate=(user) => {
    setUserLogin({id : user.id , username: user.username,  password:user.password, name: user.name, lastname:user.lastname})
    navigate("/home");
  }
  
    
  const handleChange = (e) =>{setUserLogin({ 
    ...userLogin, 
    [e.target.name]: e.target.value,
    [e.target.password] : e.target.value,      
    } 
   
  )  
  }
  const handleCancel=()=>{
    navigate("/home");
  } 
  return (   
    <div className="container">      
    <div className="encabezado-login">Login</div>
    <form className="form"> 
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">User:</span>
        <input type="text" class="form-control" onChange={handleChange} name="username" id="user" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping2">Password:</span>
        <input type="password" onChange={handleChange} class="form-control" name="password" id="password" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping"/>
      </div>
      <div className="buttons-login">
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Login</button>
        <button type="button" class="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </div>                 
    </form>        
</div>
  )
}
export default AuthLogin