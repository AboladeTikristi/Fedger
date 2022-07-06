import React from 'react'
import {Routes,Route,Redirect} from 'react-router-dom'
import Home from './Pages/Home'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import"../node_modules/jquery/dist/jquery"
import"../node_modules/jquery/dist/jquery.min"
import"../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
// import"../node_modules/owl.carousel/dist/owl.carousel.js"
import $ from "jquery"
import Signup from './Pages/Signup'
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Navbar from './Pages/Navbar'
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     {/* <Route path="/naver" element={<Navbar/>}/> */}
    </Routes>
    </>
  )
}

export default App