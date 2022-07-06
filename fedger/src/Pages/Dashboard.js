import React from 'react'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/img13.jpg';
import Navbar from "./Navbar"
import {Routes,Route,Redirect,Link} from 'react-router-dom'
function Dashboard() {
  return (
    <> 
      
    <div className="container-fluid"> 
  
        <div 
         style={{backgroundImage:`url(${img1})`,backgroundRepeat: 'no-repeat',backgroundSize:"cover",color:"white",height:"400px"}} 
         className="row">
           {/* header */}
            <Navbar className=''></Navbar>  
          <div className="">
            
            {/* Main body */}
            <div className="row ms-3 mt-5 h-75">
              <div style={{color:"red"}}className="col-12 col-md-6 mx-auto my-auto fw-bold">
              <span>
                <h1 className='fw-bold'><h1 className='fw-bold fs-1'><b>COME N EAT</b></h1></h1>
                <h1><b>All your favourites are available here</b></h1>
                <h3>Start ordering now!</h3>
              </span> 
              <button className='btn hov rounded-pill border-danger mt-2'>Place Order</button>
              </div>
            </div>
          </div>
          
        </div>
        <div style={{backgroundColor:"#00001a"}} className="row py-4">
          <div className="text-center text-white"><h3>Take a Peek</h3></div>
          <hr></hr>
          <div style={{width:"100%", height:"500px"}}className="row w-100 ms-1  mt-3 h-25 mb-3">
            <div className="col-3">
              <img src={img2}  className="w-100 h-100"alt="" />
            </div>
            <div className="col-3">
            <img src={img6}  className="w-100 h-100"alt="" />
            </div>
            <div className="col-3">
            <img src={img5}  className="w-100 h-100"alt="" />
            </div>
            <div className="col-3">
            <img src={img7}  className="w-100 h-100"alt="" />
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"#00001a"}} className="row py-4">
          <div className="text-center text-white"><h3>About Us</h3></div>
          <hr></hr>
          <div className='text-center'>Fedger satisfies all your hunger desires with <span className='text-danger'>NO DELAY</span> </div>
          <div className="row mt-5">
            <div className="col-12 col-md-5 ms-1 ms-md-5">
            <img src={img3} className='w-100 ' style={{width:""}} alt="" />
            </div>
            <div className="col-12 col-md-5 ms-1 mt-5 mt-md-0 ms-md-5 ps-5 px-3">
             
                <div className='fs-2'>
                  <span>We Deliver Orders to you in the space of 20 minutes!
                  <br />  
                  Right at your door step
                  </span>
                  <br />
                  </div>
              
              <div className='mt-3 fs-3'>Order now! and Enjoy</div>
              <br />
              <span>
                Fedger is a food ordering and delivery company 
                <br />
                to satisfy all kinds of taste continental, traditional, deserts and many more...
                <br />

                <div style={{color:"red"}} className='mt-5 text-uppercase fw-bold'> We post the best from the best at affordable prices</div>
               
              </span>

              </div>

          </div>
         
        </div>
              {/* <!-- ======= Footer ======= --> */}
  <div className="row ">
  <footer id="footer">
    <div className="footer-top">
            <div className="footer-info row ps-3">
              <div className="col-12 mb-3 mb-md-0 col-md-3">
              <h1 style={{fontFamily:"Brush Script MT",color:"red",fontSize:"30px",}} className="text-wrap text-center">FEDGER</h1>
              </div>
              <div className="col-4 col-md-3">
                 <p>
                    Iwagba Area Ogbomoso, <br/>
                    Oyo State Nigeria <br/><br/>
                </p>
              </div>
              <div className="col-4 col-md-3">
                <p> 
                <strong>Phone:</strong> +234 802 854 1625<br/>
                <strong>Email:</strong> fedger@gmail.com<br/>
                </p>
              </div>
              <div className=" col-1 col-md-3 social-links">
                <a className="twitter"><i className=" fa-brands fa-twitter"></i></a>
                <a className="facebook"><i className=" fa-brands fa-facebook-f"></i></a>
                <a className="instagram"><i className=" fa-brands fa-instagram"></i></a>
                <a className="google-plus"><i className=" fa-brands fa-skype"></i></a>
                <a className="linkedin"><i className=" fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>FEDGER</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  </div>
  {/* <!-- End Footer --> */}
        </div>
  
      
    
    </>
  )
}

export default Dashboard