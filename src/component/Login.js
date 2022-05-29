import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    var[user,setuser]=useState("")
    var[password,setpassword]=useState("")

    const newlogin=()=>{
        const data={"user":user,"password":password}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Username</label>
                <input onChange={(x)=>{setuser(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(x)=>{setpassword(x.target.value)}}   type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newlogin} className="btn btn-success">LOGIN</button>
                    <Link className="nav-link" to={"/reg"}>New Uses?Register</Link>
                   
                </div>
            </div>
        </div>
    </div>
</div>
        

    
    </div>
  )
}

export default Login