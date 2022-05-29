import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const[data,setdata]=useState([{"address":"","blood":"","mob":""}])
    var[name,setname]=useState("")

    const newlist=()=>{
        const data={"name":name}
        console.log(data)
        axios.post("http://localhost:4001/api/searchblood",data).then(
            (response)=>{
                console.log(response.data)
                setdata(response.data.data)
            }
        )
    }

    const deleteAPi=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:4001/api/deleteblood",data).then(
            (response)=>{
                if(response.data.data=="success")
                {
                    alert("success")
                }
                else
                {
                    alert("error")
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
                    <button onClick={newlist} className="btn btn-success">SEARCH</button>
                </div>

                    </div>

                    {data.map((value,key)=>{
                        return <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            Address
                            <input  type="text" value={value.address} className="form-control"/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            Blood
                            <input  type="text" value={value.blood} className="form-control"/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           Mob
                            <input  type="text" value={value.mob} className="form-control"/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteAPi(value._id)}} className="btn btn-danger">DELETE</button>
                </div>
                            
        
                            </div>
                    })}
                    </div>
                    </div>
                    </div>
                   

    </div>
  )
}

export default Search