import React from 'react'
import './profile.css';
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { logout, logoutUser, selectUser } from './Redux/UserSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import profile from  './assets/profile.png'

export default function Profile() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout=()=>
  {
    dispatch(logoutUser);
 
    navigate("/");
  }
  if(!user)
  {
    navigate('/')
    return null;
  }
  return (
    <>
  
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<center><h1>Your Profile</h1></center>
  <div class="profile-card">
    <div className="mh">
    <img src={profile} alt=" " width={100}></img>
    </div>
    <ul>
    <li><strong>Username: </strong>{user.Username}</li>
      <li><strong>Password: </strong>{user.Password}</li>
      <li><strong>Phone:</strong> 123-456-7890</li>
      <li><strong>Location:</strong> New York, USA</li>
    </ul>
    <button onClick={handleLogout}>Logout</button>
   
  </div>

    </>
  )
}