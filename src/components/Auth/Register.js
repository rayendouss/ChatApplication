import React ,{useState}from "react";
import {Link} from "react-router-dom"
import regiterImage from "../../assets/images/register.svg"
import "./Auth.scss"

import {useDispatch} from "react-redux"
import {register} from "../../store/actions/auth"

const Register=({history})=>{
    const dispatch = useDispatch()
    const [firstname,SetFirstName]= useState("")
    const [lastName,SetLastName]= useState("")
    const [email,SetEmail]= useState("")
    const [gender,SetGender]= useState("male")
    const [password,SetPassword]= useState("")

    const submitForm =(e) =>{
        e.preventDefault()
       dispatch(register({firstname,lastName,email,gender,password},history))
    }
    return(
        <div id="auth-container">
        <div id="auth-card">
            <div className="card-shadow">
                <div id="image-section">
               <img src ={regiterImage} alt="register" />
                </div>
                <div id="form-section">
                       <h2>Create an account </ h2>

                       <form onSubmit={submitForm}>
                           <div className="input-field mb-1">
                                  <input
                                   onChange={e=>SetFirstName(e.target.value)}
                                   value={firstname}
                                   required="required"
                                   type="text"
                                  placeholder="First name" />
                           </div>
                           
                           <div className="input-field mb-1">
                                  <input 
                                   onChange={e=>SetLastName(e.target.value)}
                                   value={lastName}
                                   required="required"
                                   type="text"
                                  placeholder="Last name" />
                           </div>

                           <div className="input-field mb-1">
                                  <input 
                                         onChange={e=>SetEmail(e.target.value)}
                                         value={email}
                                         required="required"
                                         type="text"
                                  placeholder="Email" />
                           </div>

                           <div className="input-field mb-1">
                               <select
                                onChange={e=>SetGender(e.target.value)}
                                value={gender}
                                required="required"
                                type="text"
                               >
                                   <option value="male">Male</option>
                                   <option value="female">Female</option>
                               </select>
                           </div>

                           <div className="input-field mb-2">
                                  <input 
                                   onChange={e=>SetPassword(e.target.value)}
                                   value={password}
                                   required="required"
                                   type="password"
                                  placeholder="Password" />
                           </div>

                           <button>REGISTER</button>
                       </form>
                       <p>Already have an account ? <Link to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register;