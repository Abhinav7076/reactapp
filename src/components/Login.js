import React, {useState} from 'react'
import Navbar  from './Navbar'
import './login.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator';

const Login=()=>{

    const{useState}=React;
    const[inputtext,setinputtext]=useState({
    email:"",
    password:""
    });
    
    const[warnemail,setwarnemail]=useState(false);
    const[warnpassword,setwarnpassword]=useState(false);
    
    const[eye,seteye]=useState(true);
    const[password,setpassword]=useState("password");
    const[type,settype]=useState(false);
    
    const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputtext((lastValue)=>{
    return{
    ...lastValue,
    [name]:value
    }
    });
    
    }
    
    const errorMessage = (message) =>{
        toast.error(message,{
            position: 'bottom-center',
            theme: 'colored'
        })
    }
    
    const submitForm=(e)=>{   
    e.preventDefault();
    setwarnemail(false);
    setwarnpassword(false);
    if(inputtext.email.length === 0)
        errorMessage('Please enter email!')
    else if(inputtext.password.length === 0)
        errorMessage('Please enter password')
    else if(inputtext.password==""){
    setwarnpassword(true);
    } 
    else{
    alert("form submitted"); 
    }
    
    }
    
    const Eye=()=>{
        if(password=="password"){
            setpassword("text");
            seteye(false);
            settype(true);
        }
        else{
            setpassword("password");
            seteye(true);
            settype(false);
        }
    }
    
    
    return(
    <>
        <Navbar /><hr></hr>
        <div className="containerr">
            <div className="cardd">
                <div className="text">
                    <h3>Welcome Back</h3>
                    <p>Enter your credentials to access your account.</p>
                </div>
                <form onSubmit={submitForm}>
                    <div className="input-text">
                        <input type="text" className={` ${warnemail ? "warning" : "" }`} placeholder="Enter your email" value={inputtext.email} onChange={inputEvent} name="email" required />
                        <i className="fa fa-envelope"></i>
    
                    </div>
                    <div className="input-text">
                        <input type={password} className={` ${warnpassword ? "warning" : "" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" required />
                        <i className="fa fa-lock"></i>
                        <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                    </div>
                    <div className="buttons" >
                        <button type="submit">Sign in</button>
                    </div>
                    <div className="forgot">
                         <p>Forgot your password? <a href="#">Reset Password</a></p>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </>
    
    );
    }

    export default Login