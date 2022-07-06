import React,{useState} from 'react'
import img1 from '../Images/img4.jpg';
import {Routes,Route,Navigate,useNavigate,Link} from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
function Signin() {
    const navigate = useNavigate()
    const url='http://localhost:5002/login'
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [status,setstatus] = useState("")
    const [message,setmessage] = useState("")
    const formik=useFormik({
      initialValues:{
          email:'',
          password:''
      },
      onSubmit:(values)=>{
            setmessage('load')
            console.log(values)
            axios.post(url,values).then((res)=>{
                    console.log(res)
                    setmessage(res.data.message)
                  if (res.data.status===true) {
                     navigate('/dashboard')
                    //   window.location="/dashboard"
                      localStorage.token=res.data.token
                       
                       setstatus(true)
                  }
                    else{
                      setstatus(false)
                    }
                     
              
                  })
      }, 
      validationSchema:yup.object({
      email:yup.string().required('Required field').matches("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-z]{2,}$","not matching"),
      password:yup.string().required('Required field').min(4,'at least six character'),
      })
      })
  return (
    <>
     <div style={{backgroundImage:`url(${img1})`,backgroundRepeat: 'no-repeat',backgroundSize:"cover", opacity:"",color:"white", filter:"brightness(60%)"}} className="container-fluid vh-100">
        <section className="text-center text-lg-start">
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0 d-none d-md-block">
                    <img src={img1} className="w-100 vh-100 rounded shadow"
                    alt="" />
                 </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right" style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter:"blur(30px)"}}
                >
            <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign In</h2>
                {message==="load"? 
                  <div class="spinner-border text-light" role="status">
                  <span class="sr-only">Loading...</span>
                 </div>:<div class="text-white fw-bold text-uppercase">{message}</div>}
                <form onSubmit={formik.handleSubmit}>
                {/* <!-- 2 column grid layout with text inputs for the email and password --> */}

              {/* <!-- Email input --> */}
                <div className="form-floating mb-4 text-dark ">
                    <input type="email" id="floatingInput3" className="form-control" name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    <label className="floatingInput3" >Email {formik.touched.email?<span className="text-danger">{formik.errors.email}</span>:''}</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-floating mb-4 text-dark">
                    <input type="password"  id="floatingInput4" className="form-control" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} />
                    <label className="floatingInput4" >Password {formik.touched.password?<span className="text-danger">{formik.errors.password}</span>:''}</label>
                </div>

                {/* <!-- sign up? --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <span>Don't have an Account? <Link className="text-decoration-none" to="/signup">Sign up</Link></span>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign In
                </button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>or sign in with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>

        
        </div>
    </div>
    {/* <!-- Jumbotron --> */}
        </section>
            {/* <!-- Section: Design Block --> */}
    </div>
  
    </>
  )
}

export default Signin