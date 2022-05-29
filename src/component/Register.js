import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Register = () => {
    var[name,setname]=useState("")
    var[address,setaddres]=useState("")
    var[blood,setblood]=useState("")
    var[mob,setmob]=useState("")
    var[username,setusername]=useState("")
    var[password,setpassword]=useState("")

    const newreg=()=>{
        const data={"name":name,"address":address,"blood":blood,"mob":mob,"username":username,"password":password}
        console.log(data)

        axios.post("http://localhost:4001/api/addblood",data).then(
            (response)=>{
                console.log(response.data)

                if(response.data.status="success")
                {
                    alert("inserted")
                }
                else
                {
                    alert("failed")
                }
            }
        )
    }
    
  return (
    <div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(x)=>{setname(x.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Address</label>
                        <input onChange={(x)=>{setaddres(x.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Blood Group</label>
                            <input onChange={(x)=>{setblood(x.target.value)}} type="text" className="form-control"/>
                            </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Mobile Number</label>
                            <input onChange={(x)=>{setmob(x.target.value)}} type="text" className="form-control"/>
                        </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Username</label>
                <input onChange={(x)=>{setusername(x.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(x)=>{setpassword(x.target.value)}} type="password" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={newreg}  className="btn btn-success">Register</button>
                    <Link className="nav-link" to={"/"}>Back to Login</Link>
                </div>
            </div>
        </div>
    </div>
</div>





    </div>
  )
}

export default Register