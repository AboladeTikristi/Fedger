import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {presentUser} from '../actions/index'
import img1 from '../Images/img10.jpg';
import img7 from '../Images/img7.jpg';
import img2 from '../Images/img1.jpg';
import img6 from '../Images/img2.jpg';
import img5 from '../Images/img5.jpg';
import img3 from '../Images/img13.jpg';
import Navbar from "./Navbar"
import {useNavigate} from 'react-router-dom'

function Profile() { 
    const navigate=useNavigate()
    let dispatch = useDispatch()
    let reduxState=useSelector(state=>state)
    let reduxDoc=useSelector(state=>state.users.presentUser)
    useEffect(() => {
      if(Object.keys(reduxDoc).length===0){
        navigate("/dashboard")
    }
    },)
    

    
    const [userDetails, setuserDetails] = useState(reduxDoc)
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
                  
                    <div className=" mt-5">
                        <div  className="row ms-2 ms-md-5 mt-4 rounded me-2 me-md-5">
                        <div 
                        style={{backgroundColor:"rgb(52, 52, 52,0.7)",maxHeight:'450px',overflowY:'scroll',scrollbarColor:"red",msScrollbarFaceColor:"red"}}
                            className="col-12 col-md-8 rounded shadow mx-auto mb-3">
                            <div className="row mt-3 mx-3"> 
                             <div className="col-3">
                                <img src={img2} className='rounded-circle w-100 'alt="" />
                             </div>
                             <div className="col-7 p-3">
                                <div className="row">
                                    <div>{reduxDoc.firstname} {reduxDoc.lastname}</div>
                                    <div>{reduxDoc.email}</div>
                                   
                                </div>
                             </div>
                             <div className="col-1">
                             <i class="fa-solid fa-pen-to-square "></i>
                             </div>
                            </div>
                            <div className="row">
                                <div className='text-center'><span className='h2 text-uppercase'>history</span></div>
                                <hr />
                                <div className='mt-5 mb-3'>
                                    <div className='text-center'>
                                       <span className='h4 text-uppercase'>No History yet!</span> 
                                        <br />
                                        <i style={{color:'#E9AB17'}} class="fa-solid fa-4x mt-4 fa-face-surprise"></i>
                                        <br />
                                        <button style={{color:'white'}}className='btn  mt-4'>Order Now!</button>
                                    </div>
                                </div>
                            </div>
                            

                            <div 
                             style={{height:"10%",position:"sticky",backgroundColor:"rgb(52, 52, 52,0.7)",bottom:"0",}} 
                                className="w-100 mx-0 mb-2 d-none mt-2 p-2 rounded ">
                                Total : $ 00.00
                                <button  className='btn btn-success rounded float-end mb-3'><i class="fa-solid fa-money-bill-wave">pay</i></button>
                            
                            
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

export default Profile