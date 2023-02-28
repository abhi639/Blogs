import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MDBCol,MDBRow,MDBPagination, MDBPaginationItem, MDBPaginationLink,  MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn, 
    MDBIcon} from 'mdb-react-ui-kit';

import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
       EmployeeService.deleteEmployee(employeeId).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">


            {/* <h2 className = "text-center"> List of Blogs </h2>
            <Link to = "/add-employee" className = "btn btn-primary mb-2" > Add Blogs </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee First Name </th>
                    <th> Employee Last Name </th>
                    <th> Employee Email Id </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                  
                                    style = {{marginLeft:"10px"}}> Delete</button>

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table> */}
          
             
             
                   
                           
   {/* <div className="d-flex align-items-start bg-light mb-3" style={{ height: "100px" }}> */}
   <MDBRow > 
      {
                        employees.map(
                            employee =>
     
       <MDBCol key = {employee.id}mt='3' md='3'>
        <MDBCard>
      <MDBCardImage src='https://proveg.com/wp-content/uploads/2023/02/AdobeStock_491059138.jpeg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle><a href=''/>  </MDBCardTitle>
        <MDBCardText>
        {employee.lastName}
        </MDBCardText> 
        {/* <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link> */}
        {/* <MDBBtn color='danger' onClick = {() => deleteEmployee(employee.id)}>Delete</MDBBtn> */}
        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}> <MDBIcon  size='2x' color='danger'  far icon="edit"color="light" /></Link>
       
        <MDBIcon style={{marginLeft:"10px"} } size='2x' color='danger' onClick = {() => deleteEmployee(employee.id)} fas icon="trash" />
      </MDBCardBody>
    </MDBCard></MDBCol>)}</MDBRow>
       
      </div>

                            
                        
                 
               

             


           
  
 
        // </div>
    )
}

export default ListEmployeeComponent
