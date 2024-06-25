import { Alert } from "bootstrap";
import React from "react";
import { Navigate } from "react-router-dom";

function UpdateEmp(props) {
      
    const handleNavigateToList = () => {
        props.history.push("/employeeList");
    }

    const Alert = ()=>{
      alert("Information updated Succesfully")
    }

    return (
        <> 
          <h1 className="text-white">Update Employee</h1>  
          <form className="form-group text-white" >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter employee name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" placeholder="Enter employee ID" />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="salary" placeholder="Enter employee salary" />
                </div>
                <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <input type="text" className="form-control" id="department" placeholder="Enter employee department" />
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={Alert}>Save</button>
                <button type="button" className="btn btn-secondary" onClick={handleNavigateToList}>Back</button>
            </form>
        </>
    )
}

export default UpdateEmp;
