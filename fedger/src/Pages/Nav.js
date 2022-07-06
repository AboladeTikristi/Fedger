import React from 'react'
import "../Components/css/style.css"
import"../Components/main.js"
import {Navbar,Container,Offcanvas,Nav,Dropdown,Form,FormControl,OverlayTrigger,Tooltip,Button,Image } from "react-bootstrap";
import {Link} from "react-router-dom"

function Naver() {
  return (
   <>
    <div className="site-mobile-menu w-50 site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-1">
          <span className="fa-solid fa-xmark js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
   
    
    <header className="site-navbar site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
          <h1 style={{fontFamily:"Brush Script MT",color:"red",fontSize:"90px",}} class="text-wrap">FEDGER</h1>
          </div>
          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-end" role="navigation">

              <ul className="site-menu main-menu text-light js-clone-nav  mr-auto d-none  d-lg-block">
                <Link to="">Home</Link>
                <li className="has-children">
                   <Link to="">About Us</Link> 
                   <ul className="dropdown">
                    <li><a href="#team-section" className="nav-link">Team</a></li>
                    <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                    <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                    <li><a href="#gallery-section" className="nav-link">Gallery</a></li>
                    <li><a href="#services-section" className="nav-link">Services</a></li>
                    <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                    <li className="has-children">
                      <a href="#">More Links</a>
                      <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                
                <li><a href="#blog-section" className="nav-link">Blog</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
                <li className="social"><i className="nav-link"><span className="fa-brands fa-facebook-f"></span></i></li>
                <li className="social"><i className="nav-link"><span className="fa-brands fa-twitter"></span></i></li>
                <li className="social"><i className="nav-link"><span className="fa-brands fa-linkedin-in"></span></i></li>
              </ul>
            </nav>
          </div>

          <div className="col-6 d-inline-block  d-xl-none ml-md-0 py-3" style={{position: "relative", top: "3px"}}><span className="site-menu-toggle js-menu-toggle float-end"><i className="fa-solid fa-bars"></i></span></div>

        </div>
      </div>
      
    </header>

   </>
  )
}

export default Naver