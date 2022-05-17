import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const [age,setage]=useState(0);
    const[work,setwork]=useState("");
    const[mob,setmob]=useState(0);
    const[des,setdes]=useState("");
    const[adr,setadr]=useState("");
    const[id,setid]=useState(0);
    const registerhandler=()=>
    {
        axios.post("http://localhost:5000/register",{i:id,n:name, e:email, a:age, w:work,m:mob, d:des, ar:adr})
        .then((response) => {
            console.log(response.data);                             
          })
        .catch(error => console.log(error));
    }

    return (
        <div  className="mb-6">
            
            <form>
            <div className="mb-5">
                    <label className="form-label">Id</label>
                    <input type="text" className="form-control" id="id" onChange={(e)=>{setid(e.target.value) }} />
                    
                </div>
            <div className="mb-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e)=>{setname(e.target.value) }} />
                    
                </div>
                
                <div className="mb-5">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setemail(e.target.value) }} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-5">
                    <label className="form-label">Age</label>
                    <input type="text" className="form-control" id="Age" onChange={(e)=>{setage(e.target.value) }} />
                    
                </div>
                <div className="mb-5">
                    <label  className="form-label">Mobile</label>
                    <input type="text" className="form-control" id="Mobile" onChange={(e)=>{setmob(e.target.value) }}/>
                    
                </div>
                <div className="mb-5">
                    <label className="form-label">Work</label>
                    <input type="text" className="form-control" id="Work" onChange={(e)=>{setwork(e.target.value) }}/>
                    
                </div>
                <div className="mb-5">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" id="Address" onChange={(e)=>{setadr(e.target.value) }}/>
                    
                </div>
                
                <div className="mb-5">
                    <label  className="form-label">Description</label>
                    <input type="text" className="form-control" id="Description" onChange={(e)=>{setdes(e.target.value) }} />
                    
                </div>
               
                <button className="btn btn-primary mb-5" onClick={registerhandler}>Submit</button>
            </form>
        </div>
    )
}

export default Register