import React from 'react'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/img13.jpg';
import Navbar from "./Navbar"
function Specials() {
  return (
    <>
        <div style={{bacgroundColor:"black"}} className="container-fluid bg-dark vh-100"> 
                 {/* header */}
                <Navbar color={"red"}></Navbar>  
            <div 
             style={{color:"white",}} 
                className="row">
               
                {/* body */}
                <div className=" container bg-dark mt-5">
                    <div className="row mt-5">
                        <div className="col-2 col-md-5"><hr /></div>
                        <div className="col-8 col-md-3"><div className='text-center h2'>OUR SPECIALS</div></div>
                        <div className="col-2 col-md-4"><hr /></div>
                    </div>
                    <div className=" mt-5">
                        <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="row ms-1 ms-md-5 mt-4 rounded me-1 me-md-5 h-50">
                             <div className="row ms-1 me-1">
                                <div className="col-12 col-md-8 order-2 order-md-1 p-2  p-md-5">
                                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque numquam nihil quas pariatur exercitationem veniam nostrum laborum enim. Pariatur iusto ipsa autem officia dignissimos expedita voluptate delectus eius aperiam!</span>
                                    <br />
                                    <div className="row">
                                    <div className='mt-5'> 
                                        <button className='btn btn-danger col-6 col-md-4 ms-0 ms-md-3'>
                                            <span>Remove from Cart <i class="fa-solid fa-circle-minus ms-2"></i></span>
                                        </button>
                                        
                                        <button className='btn btn-success ms-1 ms-md-3 col-md-3 col-5'>
                                            <span>Add to Cart<i class="fa-solid fa-cart-arrow-down ms-2"></i></span>
                                        </button>
                                      

                                    </div>
                                    </div>
                                </div>
                                <div className="col-12 mx-auto mx-md-0 col-md-4 text-center order-1 order-md-2">
                                <img src={img3} className='rounded-circle w-75  mt-4' alt="" />
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

export default Specials