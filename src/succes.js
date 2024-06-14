import React from 'react'
import { Link } from 'react-router-dom';
import './succes.css';
function Succes() {
  return (
    <div className='succ'>
    <h3>Succesfully Registered</h3>
    <button className='butt' type="submit"><Link to="/">click here to go to home.</Link></button>

    </div>
  );
}

export default Succes;