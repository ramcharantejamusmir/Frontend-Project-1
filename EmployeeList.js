import React, { useEffect,useState } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { deleteEmployee, getAllEmployees } from "../service/EmployeeService";


const EmploeeList = () => {
    const navigate = useNavigate();
    const [empolyees,setEmployees]=useState([])

    const deleteEmp = (id) => {
        deleteEmployee(id)
        .then((response)=>{
            getAllEmployeesInfo(response.data)
        })
        .catch((error)=>console.log("unable to delete "+error))
        
    }

    const updateEmp = (id) => {
        navigate(`/updateEmp/${id}`)

    }
    const handleEmployeeInfo=(id)=>{
        navigate(`/employeeInfo/${id}`)

    }

    const employeeInfo = () => {
        navigate("/employeeInfo")
    }

    // const employees = [
    //     { id: 124, name: "charan" ,salary:48393},
    //     { id: 125, name: "madhan",salary:34645 },
    //     { id: 126, name: "teja", salary:8000},
    //     { id: 126, name: "teja", salary:21000},
    //     { id: 127, name: "harsha" ,salary:50000},
    //     { id: 128, name: "chinna",salary:60000 }
    // ]
    useEffect(()=>{
        getAllEmployeesInfo();
    },[])
    const getAllEmployeesInfo=()=>{
        getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }



    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info flex">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/home" >Home</Link>
                    </li>
                    <li class="nav-item" >
                        <Link class="nav-link" to="/addEmp" >AddEmployee</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <div>
                <table class="table table-sm">
                    <thead className="text-white">
                    <th>Id</th>
                        <th>Employee Name</th>
                        <th>Employee Salary</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                    {empolyees.map(employee => (


<tr key={employee.id}>

    <td>{employee.empId}</td>
    <td>{employee.empName}</td>
    <td>{employee.empSalary}</td>
    <td>
        <button className="btn btn-danger mx-2" onClick={()=>deleteEmp(employee.empId)}>Delete</button> 
        <button className="btn btn-success mx-2" onClick={()=>updateEmp(employee.empId)}>Update</button>
        <button className="btn btn-info" onClick={()=>employeeInfo(employee.empId)}>Info</button>
    </td>
</tr>
))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EmploeeList