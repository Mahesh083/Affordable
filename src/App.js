import React from "react";
// import './App.css';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import CommentsForm from "./commentsform";
import Forms from "./Register";
import AboutPage from "./about";
import Products from "./products";
import Succes from "./succes";
import Profile from "./Profile";

function App() {
return (
    <div>
    <div className="main">
    <footer/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/reg" element={<Forms/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/feedback" element={<CommentsForm/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/success" element={<Succes/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/success" element={<Succes/>}></Route>
    

  </Routes>
  </BrowserRouter>


  </div>
 

  

 
    </div>
  );
}



export default App;