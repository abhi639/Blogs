import React,{useState} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function HeaderComponent() {
    const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <MDBNavbar expand='lg' light bgColor='info'>
    <MDBContainer fluid>
    <MDBNavbarBrand href='#'>


<img src='/images/logo.JPG'alt='logo'style={{height:'30px'}}/>
</MDBNavbarBrand>
      <MDBNavbarToggler
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowNavSecond(!showNavSecond)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar show={showNavSecond}>
        <MDBNavbarNav>
        <Link  to={"/employees"} style={{marginRight:"10px"}}>Home</Link>

        <Link  to={"/add-employee"}>Add Blog's</Link>
    
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}

export default HeaderComponent