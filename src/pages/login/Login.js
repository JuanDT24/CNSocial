import React, { useEffect } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import './Login.css';
export default function Login() {
const[action, setAction] = React.useState("Login");
useEffect(()=>{
    document.body.className = "login-page";
    return ()=>{
        document.body.className = "";
    };
},[]);
  return (
    <div className='container'>
        <div className='header'> 
            <div className='text'>{action}</div>
            <div className= 'underline'> </div>
            </div>
            <div className ='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <div className='icon'>
                <PersonIcon/>
                </div>
                <input type='text' placeholder='Username'/>
            </div>}    
            
            <div className='input'>
                <div className='icon'>
                <EmailIcon/>
                </div>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <div className='icon'>
                <LockIcon/>
                </div>
                <input type='password' placeholder='Password'/>
        </div>  
        {action==="Sign Up"?<div></div>: <div className='forgot-password'><span>Forgot your Password?</span></div>}
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
</div>
  )
}
