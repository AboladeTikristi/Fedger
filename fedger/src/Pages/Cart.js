import React from 'react'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/img13.jpg';
import Navbar from "./Navbar"

function Cart() {
  return (
    <>
     <div style={{bacgroundColor:"black"}} className="container-fluid bg-dark vh-100"> 
                 {/* header */}
                <Navbar cart={"red"}></Navbar>  
            <div 
             style={{color:"white",}} 
                className="row">
               
                {/* body */}
                <div className=" container bg-dark mt-5">
                    <div className="row mt-5">
                        <div className="col-5"><hr /></div>
                        <div className="col-3"><div className='text-center h2'>YOUR CART</div></div>
                        <div className="col-4"><hr /></div>
                    </div>
                    <div className=" mt-5">
                        <div  className="row ms-2 ms-md-5 mt-4 rounded me-2 me-md-5">
                        <div 
                        style={{backgroundColor:"rgb(52, 52, 52,0.7)",maxHeight:'450px',overflowY:'scroll',scrollbarColor:"red",msScrollbarFaceColor:"red"}}
                            className="col-12 col-md-8 rounded mx-auto mb-3">
                            <div className="row mt-3 mx-3 shadow"> 
                                <div className="col-4 col-md-5">
                                <img src={img3} className='m-2 w-100 rounded' alt="" />
                                </div>
                                <div className="col-5 col-md-4">
                                    <div className='mt-1 mt-md-3'>Food Name</div>
                                    <br />
                                    <div className='mt-0 mt-md-3'>Food Size</div>
                                    <div className='mt-1  mt-md-5 mb-2 mb-sm-0'>
                                       
                                        <i class="fa-solid btn btn-primary fa-plus"></i>
                                        
                                        <span className='ms-1 ms-md-3'>1</span>

                                        <button class="btn btn-warning ms-1 ms-md-3">-</button>

                                    </div>
                                      
                                </div>
                                <div className="col-1 col-md-3">
                                    <div className='mt-5'>#30.00</div>
                                </div>
                            </div>
                            <div className="row mt-3 mx-3 shadow"> 
                                <div className="col-4 col-md-5">
                                <img src={img3} className='m-2 w-100 rounded' alt="" />
                                </div>
                                <div className="col-5 col-md-4">
                                    <div className='mt-1 mt-md-3'>Food Name</div>
                                    <br />
                                    <div className='mt-0 mt-md-3'>Food Size</div>
                                    <div className='mt-1  mt-md-5 mb-2 mb-sm-0'>
                                       
                                        <i class="fa-solid btn btn-primary fa-plus"></i>
                                        
                                        <span className='ms-1 ms-md-3'>1</span>

                                        <button class="btn btn-warning ms-1 ms-md-3">-</button>

                                    </div>
                                      
                                </div>
                                <div className="col-1 col-md-3">
                                    <div className='mt-5'>#30.00</div>
                                </div>
                            </div>
                            <div className="row mt-3 mx-3 shadow"> 
                                <div className="col-4 col-md-5">
                                <img src={img3} className='m-2 w-100 rounded' alt="" />
                                </div>
                                <div className="col-5 col-md-4">
                                    <div className='mt-1 mt-md-3'>Food Name</div>
                                    <br />
                                    <div className='mt-0 mt-md-3'>Food Size</div>
                                    <div className='mt-1  mt-md-5 mb-2 mb-sm-0'>
                                       
                                        <i class="fa-solid btn btn-primary fa-plus"></i>
                                        
                                        <span className='ms-1 ms-md-3'>1</span>

                                        <button class="btn btn-warning ms-1 ms-md-3">-</button>

                                    </div>
                                      
                                </div>
                                <div className="col-1 col-md-3">
                                    <div className='mt-5'>#30.00</div>
                                </div>
                            </div>

                            <div 
                             style={{height:"10%",position:"sticky",backgroundColor:"rgb(52, 52, 52,0.7)",bottom:"0",}} 
                                className="w-100 mx-0 mb-2 mt-2 p-2 rounded ">
                                Total : $ 00.00
                                <button className='btn btn-success rounded float-end mb-3'><i class="fa-solid fa-money-bill-wave">pay</i></button>
                            
                            
                            </div>
                        </div>
                        
                       </div>
                </div>
           
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Cart