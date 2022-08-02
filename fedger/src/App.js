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
import Specials from './Pages/Specials'
import Events from './Pages/Events'
import Restaurants from './Pages/Restaurants'
import Chefs from './Pages/Chefs'
import Contact from './Pages/Contact'
import Continental from './Pages/Continental'
import Snacks from './Pages/Snacks'
import Deserts from './Pages/Deserts'
import Drinks from './Pages/Drinks'
import Others from './Pages/Others'
import Traditional from './Pages/Traditional'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import PayStack from './Pages/PayStack'
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/specials" element={<Specials/>}/>
     <Route path="/events" element={<Events/>}/>
     <Route path="/restaurants" element={<Restaurants/>}/>
     <Route path="/chefs" element={<Chefs/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/menu/continental" element={<Continental/>}/>
     <Route path="/menu/traditional" element={<Traditional/>}/>
     <Route path="/menu/snacks" element={<Snacks/>}/>
     <Route path="/menu/deserts" element={<Deserts/>}/>
     <Route path="/menu/drinks" element={<Drinks/>}/>
     <Route path="/menu/others" element={<Others/>}/>
     <Route path="/pay" element={<PayStack/>}/>
     {/* <Route path="/naver" element={<Navbar/>}/> */}
    </Routes>
    </>
  )
}

export default App