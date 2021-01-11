import React ,{useState}from "react";
import loginImage from "../../assets/images/logo.svg"
import {Link} from "react-router-dom"
import axios from "axios"
import AuthService from "../../services/authService"
import "./Auth.scss"

import {useDispatch} from "react-redux"
import {login} from "../../store/actions/auth"

const Login=({history})=>{
    const dispatch = useDispatch()
    const [email,SetEmail]= useState("")
    const [password,SetPassword] = useState("")
    const submitForm =(e) =>{
        e.preventDefault()
        console.log ({email,password})
       dispatch(login({email,password},history))
 
      //  axios.post("login",{email,password})
       // .then(res =>{
         //   console.log("res",res)
       // })
      //  .catch(err =>{
        //    console.log("err",err)
       // })
    }
    return(
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section">
                   <img src ={loginImage} alt="Login" />
                    </div>
                    <div id="form-section">
                           <h2>Welcome Back</h2>

                           <form onSubmit={submitForm}>
                               <div className="input-field mb-1">
                                      <input 
                                      onChange={e=>SetEmail(e.target.value)}
                                      value={email}
                                      required="required"
                                      type="text"
                                      placeholder="Email" />
                               </div>

                               <div className="input-field mb-2">
                                      <input
                                       onChange={e=>SetPassword(e.target.value)}
                                       value={password}
                                       required="required"
                                       type="password"
                                      placeholder="Password" />
                               </div>

                               <button>LOGIN</button>
                           </form>
                           <p>Don't have an account ?<Link to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;