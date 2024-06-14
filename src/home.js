import {  Tab, Tabs } from '@mui/material';
import React from 'react'
import Footer from './footer';
 import "./home.css"
import { Link } from 'react-router-dom';

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div>
    
    <div className="head">
    <header>
    <div class="navigation">
    <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
        <Tab value="Active" href="/" label="Home" />
        <Tab value="two" href="/feedback" label="Feedback" />
        <Link to='./about'><Tab value="three" href="/" label="About US" /></Link>
        <Link to='./profile'><Tab value="three" href="/" label="Profile" /></Link>

        <Tab value="four" href="/Login" label="Login" />
        </Tabs>
        </div>

        </header>
        </div>
        <Footer/>
        </div>



  )
}