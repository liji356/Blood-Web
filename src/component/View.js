import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
  var[bloodlist,setbloodlist]=useState([])

  axios.get("http://localhost:4001/api/viewblood").then(
    (response)=>{
      console.log(response.data)
      setbloodlist(response.data)
    }
  )
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



        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Bloodgroup</th>
      <th scope="col">Mobile</th>
     
    </tr>
  </thead>
  <tbody>

  </tbody>
  {bloodlist.map((value,key)=>{
      return <tr>
        <th scope="row">{value.name}</th>
        <td>{value.address}</td>
        <td>{value.blood}</td>
        <td>{value.mob}</td>
        <td><button onClick={()=>{deleteAPi(value._id)}} className="btn btn-danger">DELETE</button></td>
        
        
      </tr>
    

  })}
  
  
</table>
            </div>
            </div>
        </div>


    </div>
  )
}

export default View