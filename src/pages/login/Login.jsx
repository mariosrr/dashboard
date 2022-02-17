import React, { useContext, useState } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import "./login.css";
import {useLocation, useNavigate} from "react-router-dom";

export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useContext(AuthContext);

    if(user){
        if(location.state?.from){
            console.log(location.state.from);
            navigate(location.state.from);
        }
        else{
            console.log(location.state.from);
            navigate("/", {state:true});
        }
        
    }


    const handleLogin = (e)=>{
        e.preventDefault();
        login({email,password}, dispatch);
        navigate("/home", {replace: true});
    };
 

  return (

   <div className='login'>
      <form action="" className='loginForm'>
          <input type="text" placeholder='email' className="loginInput" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='password' className="loginInput" onChange={(e)=>setPassword(e.target.value)}/>
          <button className='loginButton' onClick={handleLogin} disabled={isFetching}>Login</button>
      </form>
  </div>
  );
}
