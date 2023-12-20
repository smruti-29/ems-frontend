// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees]= useState([])

    const navigator = useNavigate();
    useEffect(() => {
        getAllEmployee();
    },[])

    function getAllEmployee(){
        listEmployee().then((response) => {
            setEmployees(response.data);

        }).catch(error =>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }
    function updateEmployee(id){
       
        navigator( `/edit-employee/${id}` )
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then(() => {
            getAllEmployee();
        }).catch(error =>{
            console.log(error)
        })
    }
  return (
    <>
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-outline-dark mb-2' onClick={addNewEmployee}>Add Emplloyee</button>
        <table className='table table-striped table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name </th>
                    <th>Employee LastName</th>
                    <th>Employee Email Id</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        // eslint-disable-next-line react/jsx-key
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info'  onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} 
                                style={{marginLeft: "10px"}}>
                                    Delete
                                    </button>
                            </td>
                        </tr> 
                        )
                }
                
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ListEmployeeComponent