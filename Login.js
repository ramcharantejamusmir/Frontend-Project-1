import React, {  useState,useRef } from "react";
import { useNavigate } from "react-router";
//Usage of useRef and useEffect
const Login=()=>{
   const [uname,setUname]=useState("")
   const [pwd,setPwd]=useState("")
   const navigate = useNavigate();

const handleUname=(e)=>{
    setUname(e.target.value)
}

const handlePwd=(e)=>{
    setPwd(e.target.value)
}

const formSubmit=(e)=>{
    e.preventDefault();
    console.log(uname+ " "+pwd)
    if(uname==="charan" && pwd==="1234")
    navigate("/employeelist")
    else
    alert("Invalid credentials")
}

const logout=()=>{
    navigate("/logout")
}


    return (
        <div className="container w-50 card my-5">
            <form className="form-group w-50" 
            id="myForm" onSubmit={formSubmit}>
                <label className="form-label" htmlFor="uname">Username</label>
                <input className="form-control" 
                type="text"
                name="uname"
                id="uname"
                 onChange={handleUname}
                placeholder="Enter username"></input>


                <label className="form-label" htmlFor="pwd">Password</label>
                <input className="form-control" 
                 onChange={handlePwd}
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Enter password"></input>
                    <div className="my-3">
                <button className="btn btn-primary" 
                type="submit" >Submit</button>&nbsp;&nbsp;

            <button className="btn btn-success" 
                type="submit" onClick={logout}>Logout</button>
</div>
            </form>
        </div>
    )

    
}
export default Login