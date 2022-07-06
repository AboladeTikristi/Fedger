import React from 'react'
import {Routes,Route,Redirect,Link} from 'react-router-dom'
import img1 from '../Images/img6.jpg';
function Home() {
  return (
    <>
    {/* #AA336A" */}
    <div className="container-fluid">
        <div style={{backgroundImage:`url(${img1})`,backgroundRepeat: 'no-repeat',backgroundSize:"cover", opacity:"",color:"white", filter:"brightness(100%)"}} className=" row vh-100">
        <span className='col-12 col-md-7 mx-auto  text-center justify-content-center align-items-center my-auto'>
            <h1 style={{fontFamily:"Brush Script MT",color:"red",fontSize:"90px",}} class="text-wrap">FEDGER</h1>
            <br />
            <h2> Get Affordable Healthy Meal</h2>
            
            <Link to="/signup"><button style={{height:"50px",width:"200px",backgroundColor:"#CF9FFF"}} className='rounded-pill btn  mt-3'>Get Started</button></Link>
            </span>
            
          
        </div>
    </div>
    </>
  )
}

export default Home