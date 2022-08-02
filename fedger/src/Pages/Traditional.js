import React from 'react'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/tiyan.jpg';
import Navbar from "./Navbar"
function Traditional() {
  return (
  <>
   <div style={{bacgroundColor:"black"}} className="container-fluid bg-dark vh-100"> 
                 {/* header */}
                <Navbar></Navbar>  
            <div 
             style={{color:"white",}} 
                className="row">
               
                {/* body */}
                <div className=" container bg-dark mt-5">
                    <div className="row mt-5">
                        <div className="col-3 col-md-5"><hr /></div>
                        <div className="col-6 col-md-3"><div className='text-center text-uppercase h2'>Traditional Meal</div></div>
                        <div className="col-3 col-md-4"><hr /></div>
                    </div>
                    <div className=" mt-md-5 mt-2">
                        <div className="mt-0 mt-md-4 h-50 ">
                             <div className="row px-2">
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow-lg card mt-3 mt-md-0 col-6 col-md-3">
                                    <div className="row h-75">
                                      <img src={img7} className='mt-2 w-100 'alt="" />   
                                    </div>
                                   
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow card mt-3 mt-md-0 col-6 col-md-3">
                                    <div className="row h-75">
                                         <img src={img2} className='mt-2 w-100'alt="" /> 
                                    </div>
                                  
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className=" shadow card  mt-3 mt-md-0 col-6 col-md-3">
                                     <div className="row h-75">
                                         <img src={img5} className='mt-2 w-100'alt="" /> 
                                    </div>
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow card  mt-3 mt-md-0 col-6 col-md-3">
                                     <div className="row h-75">
                                         <img src={img1} className='mt-2 w-100'alt="" /> 
                                    </div>
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                   
                             </div>
                             <br />
                             <div className="row px-2">
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow-lg card mt-3 mt-md-0 col-6 col-md-3">
                                    <div className="row h-75">
                                      <img src={img7} className='mt-2 w-100 'alt="" />   
                                    </div>
                                   
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow card mt-3 mt-md-0 col-6 col-md-3">
                                    <div className="row h-75">
                                         <img src={img2} className='mt-2 w-100'alt="" /> 
                                    </div>
                                  
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className=" shadow card  mt-3 mt-md-0 col-6 col-md-3">
                                     <div className="row h-75">
                                         <img src={img5} className='mt-2 w-100'alt="" /> 
                                    </div>
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="shadow card  mt-3 mt-md-0 col-6 col-md-3">
                                     <div className="row h-75">
                                         <img src={img1} className='mt-2 w-100'alt="" /> 
                                    </div>
                                    <div className="row mt-3 text-center">
                                        <span>Food Name</span>
                                        <br />
                                        <span># 300.00</span>
                                        <br />
                                        <span>Restuarant or chef</span>
                                        <br />
                                        <span>Description</span>
                                        <br />
                                        <div>
                                            <span>
                                            <button className='btn '><i class="fa-solid text-primary fa-cart-arrow-down ms-2"></i></button>
                                            <button className='btn '>
                                            <i class="fa-solid fa-circle-minus ms-2 text-warning"></i></button>
                                            </span>
                                        </div>
                                        <br />

                                    </div>
                                </div>
                                   
                             </div>
                             <br />
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default Traditional