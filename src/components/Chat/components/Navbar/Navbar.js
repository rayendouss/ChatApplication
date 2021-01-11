import React ,{useState}from "react";
import {useSelector,useDispatch} from "react-redux"
import "./Navbar.scss"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {logout} from "../../../../store/actions/auth"
const Navbar = () =>{

    const dispatch = useDispatch();
      const [showProfileOptions,setshowProfileOptions]=useState(false)
       const user = useSelector(state => state.authReducer.user)
       return (
           <div id="navbar">
              <h2>Chat.io</h2>
              <div onClick={()=>setshowProfileOptions(!showProfileOptions)} id="profile-menu">
                  <img width="40" height="40" src={user.avatar} alt="Avatar" />
                  <p>{user.firstname} {user.lastName} </p>
                        <FontAwesomeIcon icon="caret-down" className="fa-icon"/>
                {     showProfileOptions && 
                  <div id="profile-options">
                              <p>Update profile</p>
                              <p onClick={()=>dispatch(logout() )}>Logout</p>
                              
                        </div>
                        }
              </div>
           </div>
       )
}


export default Navbar