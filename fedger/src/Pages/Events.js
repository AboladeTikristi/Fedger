import React from 'react'
import img1 from '../Images/event1.jpg';
import img7 from '../Images/Cparty.jpg';
import img2 from '../Images/Sparty.jpg';
import img6 from '../Images/pbparty.jpg';
import img5 from '../Images/prbparty.jpg';
import img3 from '../Images/img13.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Navbar from "./Navbar"
function Events() {
    const eachDiv= {
        display:" flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        height:"350px",
      }
      const eachSpan ={
        padding: '20px',
        fontSize: '20px',
        backgroundColor:' #efefef',
        textAlign: 'center',
      }
  return (
    <>
      <div style={{bacgroundColor:"black"}} className="container-fluid bg-dark vh-100"> 
                 {/* header */}
                <Navbar event={"red"}></Navbar>  
            <div 
             style={{color:"white",}} 
                className="row">
               
                {/* body */}
                <div className=" container bg-dark mt-5">
                    <div className='row mt-5'>
                        <span className='text-center h3 fs-3 text-uppercase'>Organize Your Events With Us</span>
                        <hr />
                    </div>
                    <div className=" mt-5">
                        <div 
                            style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url(${img1})`,backgroundRepeat: 'no-repeat',backgroundSize:"cover", backdropFilter: "brightness(60%)",height:"50%"}}className="row ms-1 ms-md-5 me-md-5 mt-3 me-1">
                             <span className='text-center h4 text-uppercase'>Birthday Parties</span>
                                     <Slide>
                                        <div style={eachDiv}>
                                            <div className="row px-5 mt-1">
                                                <div className="col-12 col-md-6">
                                                <img src={img2} className="w-100" alt="" />
                                                </div>
                                                <div className="col-12 col-md-6 ">
                                                    <span>Standard Parties</span>
                                                    <br />
                                                    <span># 30.00</span>
                                                    <hr className='w-25'></hr>
                                                    <div className='d-none d-md-block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aliquid sed odit pariatur id laborum eligendi ad suscipit! Qui aut cumque iure vel. Ipsa quaerat nostrum quas non cupiditate tempora.</div>
                                                    
                                                    <button style={{position:"sticky"}} className='btn mt-0 mt-md-5 btn-warning '>Book Event</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={eachDiv}>
                                            <div className="row px-5 mt-1">
                                                <div className="col-12 col-md-6">
                                                <img src={img7} className="w-100" alt="" />
                                                </div>
                                                <div className="col-12 col-md-6 ">
                                                    <span>Standard Parties</span>
                                                    <br />
                                                    <span># 30.00</span>
                                                    <hr className='w-25'></hr>
                                                    <div className='d-none d-md-block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aliquid sed odit pariatur id laborum eligendi ad suscipit! Qui aut cumque iure vel. Ipsa quaerat nostrum quas non cupiditate tempora.</div>
                                                    
                                                    <button style={{position:"sticky"}} className='btn mt-0 mt-md-5 btn-warning '>Book Event</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={eachDiv}>
                                            <div className="row px-5 mt-1">
                                                <div className="col-12 col-md-6">
                                                <img src={img6} className="w-100" alt="" />
                                                </div>
                                                <div className="col-12 col-md-6 ">
                                                    <span>Standard Parties</span>
                                                    <br />
                                                    <span># 30.00</span>
                                                    <hr className='w-25'></hr>
                                                    <div className='d-none d-md-block'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aliquid sed odit pariatur id laborum eligendi ad suscipit! Qui aut cumque iure vel. Ipsa quaerat nostrum quas non cupiditate tempora.</div>
                                                    
                                                    <button style={{position:"sticky"}} className='btn mt-0 mt-md-5 btn-warning '>Book Event</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </Slide>
                        </div>
                       
                      
                       
                       

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Events