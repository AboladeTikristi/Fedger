import React from 'react'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/rest.jpg';
import Navbar from "./Navbar"
function Restaurants() {
  return (
    <>
     <div style={{bacgroundColor:"black"}} className="container-fluid bg-dark vh-100"> 
                 {/* header */}
                <Navbar rest={"red"}></Navbar>  
            <div 
             style={{color:"white",}} 
                className="row">
               
                {/* body */}
                <div className=" container bg-dark mt-5">
                    <div className="row mt-5">
                        <div className="col-2 col-md-5"><hr /></div>
                        <div className="col-8 col-md-3"><div className='text-center h3'>RESTUARANTS HERE</div></div>
                        <div className="col-2 col-md-4"><hr /></div>
                    </div>
                    <div className=" mt-5 ">
                        <div style={{backgroundColor:"rgb(52, 52, 52,0.7)"}} className="ms-1 ms-md-5 me-md-5 mt-4 rounded h-50 me-1 mb-1">
                             <div className="row me-1 me-md-0 ms-1 ms-md-0 ">
                                <div className="col-12 col-md-6 order-2 order-md-1 p-4 p-md-5 v">
                                    <div><i class="fa-solid fa-house-chimney"></i>
                                    <span className='ms-3 text-warning'>Fedger</span></div>
                                    <br />
                                    <div> <i class="fa-solid fa-location-dot"></i>
                                    <span className='ms-3'>Ogbomoso highgway london</span></div>
                                    <br />
                                    <div>
                                        <small className=''><i class="fa-solid fa-phone"></i> +234 000 000</small>
                                        <br />
                                        <span className=' w-100 '><span><span class="fa-brands fa-chrome text-break"></span> www.restaurant.com</span></span>
                                        <br />
                                        <span className=''><i class="fa-brands fa-facebook"></i> Fedger2134</span>
                                    </div>
                                    <br />
                                    <div className='mt-3 d-none d-md-block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque numquam nihil quas pariatur exercitationem veniam nostrum laborum enim. Pariatur iusto ipsa autem officia dignissimos expedita voluptate delectus eius aperiam!</div>
                                    <br />
                                    <button className='btn btn-primary'>Order here</button> 
                                    <button className='btn btn-warning ms-4'>Book table</button>
                                </div>
                                <div className="col-12 text-center col-md-6 order-1 order-md-2 py-2 ">
                                <img src={img3} style={{width:"90%"}}className='rounded mt-4  ' alt="" />
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

export default Restaurants