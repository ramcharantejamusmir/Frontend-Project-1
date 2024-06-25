import React, { useState } from "react";

const Signup = (props) => {
    const [fname, setFname] = useState("");
    const [sname, setSname] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [mobial, setMobial] = useState("");
    const [dob, setDob] = useState("");
    const [branch, setBranch] = useState("a1");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (fname && pwd && email && mobial && dob) {
            alert("Form submitted successfully");
          
        } else {
            alert("Please fill out all required fields");
        }
    };

    return (
        <div className="container text-white">
            <form className="form-group" onSubmit={handleSubmit}>
                <label htmlFor="fname" className="col-form-label">First Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                /><br />
                <label htmlFor="sname" className="col-form-label">Second Name:</label>
                <input
                    className="form-control"
                    type="text"
                    name="sname"
                    id="sname"
                    value={sname}
                    onChange={(e) => setSname(e.target.value)}
                /><br />
                <label htmlFor="email" className="col-form-label">Email:</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="pwd" className="col-form-label">Password:</label>
                <input
                    className="form-control"
                    type="password"
                    name="pwd"
                    id="pwd"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Enter the password"
                    required
                />
                <label htmlFor="mobial" className="col-form-label">Mobile:</label>
                <input
                    className="form-control"
                    type="tel"  
                    name="mobial"
                    id="mobial"
                    value={mobial}
                    onChange={(e) => setMobial(e.target.value)}
                    required
                />
                <label htmlFor="dob" className="col-form-label">Date of Birth:</label>
                <input
                    className="form-control"
                    type="date"
                    name="dob"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                />
                <label htmlFor="branch" className="col-form-label">Branch:</label>
                <select
                    className="form-control"
                    name="branch"
                    id="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                >
                    <option value="a1">CSE</option>
                    <option value="a2">ECE</option>
                    <option value="a3">EEE</option>
                    <option value="a4">IT</option>
                </select>
                
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;