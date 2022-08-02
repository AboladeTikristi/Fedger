import React, {useState,useEffect} from 'react'
import axios from 'axios'
import "../Components/css/styles.css"
// import "../Components/css/bootstrap.js"
// import "../Components/css/main.js"
import { Navbar,Container,Offcanvas,Nav,Dropdown,Form,FormControl,OverlayTrigger,Tooltip,Button,Image } from "react-bootstrap";
import {Routes,Route,Navigate,useNavigate,Link,useParams} from 'react-router-dom'
function Naver({color,cart, home,event,rest,chef,contact}) {
  return (
    <>
      <header id="header" style={{height:"60px"}} className="fixed-top  top-md-0 align-items-center ">
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
           
          <Nav className="mx-auto flex-grow-4">
          <Nav.Link className='ms-2'>
            <Link to="/dashboard"><span style={{color:home}}>Home</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/specials"><span style={{color:color}}>Specials</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/events"><span style={{color:event}}>Events</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/restaurants"><span style={{color:rest}}>Restaurants</span></Link> 
          </Nav.Link>
          <Nav.Link className='ms-2'>
            <Link to="/chefs"><span  style={{color:chef}}>Chefs</span></Link> 
          </Nav.Link>
          <Dropdown className='dropdown '>
                    <Dropdown.Toggle bsPrefix="p-0" style={{}} variant="link"  className='shadow-none text-decoration-none text-dark nav-link scrollto mt-2' id="dropdown-basic"
                     >
                        <Link to=""><span>Menu Categories <span className='fa-solid fa-caret-down'></span></span></Link> 
                      
                      {/* About */}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="border-0 see" style={{backgroundColor:"rgba(238, 234, 226, 0.6)"}}> 
                       
                        <Dropdown.Item >
                          <Link to='/menu/continental'>Continental </Link>
                        </Dropdown.Item>
                        
                        <Dropdown.Item>
                        <Link to='/menu/traditional'>Traditional</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to='/menu/deserts'>Deserts </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to='/menu/drinks'>Drinks </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to='/menu/snacks'>Snacks </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to='/menu/others'>Others </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Nav.Link className='ms-2'>
                      <Link to="/contact"><span style={{color:contact}}>Contact</span></Link> 
                    </Nav.Link>
        
      </Nav>
      <Nav.Link className='ms-2'>
            <Link to="/cart"><span style={{color:cart}}><i class="fa-solid fa-cart-shopping"></i></span></Link> 
      </Nav.Link>
      <Dropdown className='dropdown me-5'>
                    <Dropdown.Toggle bsPrefix="p-0" style={{}} variant="link"  className='shadow-none text-decoration-none text-dark nav-link scrollto mt-2' id="dropdown-basic"
                     >
                        <Link to=""><span>You<span className='fa-solid fa-caret-down'></span></span></Link>
                      
                      {/* About */}
                      </Dropdown.Toggle>

                      <Dropdown.Menu  className="border-0 see" style={{backgroundColor:"rgba(238, 234, 226, 0.6)",width:"40px!important"}}> 
                       
                        <Dropdown.Item>
                         <Link  to='/profile'>
                          Profile
                          </Link>
                        </Dropdown.Item>
                        
                        <Dropdown.Item>
                         <Link to='/settings'>
                          <i class="fa-solid fa-gear"></i> Settings 
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/'>
                          logOut
                          </Link>
                          </Dropdown.Item>
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