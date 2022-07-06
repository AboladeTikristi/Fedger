import React, {useState,useEffect} from 'react'
import axios from 'axios'
import "../Components/css/styles.css"
// import "../Components/css/bootstrap.js"
// import "../Components/css/main.js"
import { Navbar,Container,Offcanvas,Nav,Dropdown,Form,FormControl,OverlayTrigger,Tooltip,Button,Image } from "react-bootstrap";
import {Routes,Route,Navigate,useNavigate,Link,useParams} from 'react-router-dom'
function Naver() {

  return (
    <>
      <header id="header" style={{height:"60px"}} class="fixed-top  top-md-0 align-items-center ">
        <Navbar className='' expand="lg" > 
       
        <Navbar.Brand style={{fontFamily:"Lucida Bright!important",color:"pink"}} className="text-center mt-3" >
        <h1 style={{fontFamily:"Brush Script MT",color:"red",fontSize:"30px",}} className="text-wrap">FEDGER</h1>
        </Navbar.Brand>
        <Navbar.Toggle placement='end' className='border-0 shadow-none' aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          style={{width:"120px"}}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
            
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           
          <Nav className="mx-auto flex-grow-5">
          <Nav.Link className='ms-2'>
            <Link to="/home"><span>Home</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/home"><span>Specials</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/home"><span>Events</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/home"><span>Restaurants</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/home"><span>Chefs</span></Link> 
          </Nav.Link>
          <Dropdown className='dropdown '>
                    <Dropdown.Toggle bsPrefix="p-0" style={{}} variant="link"  className='shadow-none text-decoration-none text-dark nav-link scrollto mt-2' id="dropdown-basic"
                     >
                        <Link to=""><span>Categories <span className='fa-solid fa-caret-down'></span></span></Link> 
                      
                      {/* About */}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="border-0 see" style={{backgroundColor:"rgba(238, 234, 226, 0.6)"}}> 
                       
                        <Dropdown.Item >
                          Continental 
                        </Dropdown.Item>
                        
                        <Dropdown.Item>
                         Traditional
                        </Dropdown.Item>
                        <Dropdown.Item>
                         Drinks
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Snacks
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Deserts
                        </Dropdown.Item>
                        <Dropdown.Item>
                          Others...
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link className='ms-2'>
                      <Link to="/home"><span>Contact</span></Link> 
                    </Nav.Link>
        
      </Nav>
      <Dropdown className='dropdown me-5'>
                    <Dropdown.Toggle bsPrefix="p-0" style={{}} variant="link"  className='shadow-none text-decoration-none text-dark nav-link scrollto mt-2' id="dropdown-basic"
                     >
                        <Link to="" className=" "><span>You<span className='fa-solid fa-caret-down'></span></span></Link> 
                      
                      {/* About */}
                      </Dropdown.Toggle>

                      <Dropdown.Menu  className="border-0 see" style={{backgroundColor:"rgba(238, 234, 226, 0.6)",width:"50px!important"}}> 
                       
                        <Dropdown.Item >
                           Profile 
                        </Dropdown.Item>
                        
                        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                        <Dropdown.Item>logOut</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
        
          </Offcanvas.Body>
        </Navbar.Offcanvas>
     
    </Navbar>
    </header> 
             

</>

  )
}

export default Naver