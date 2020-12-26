import React, { Component } from 'react';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import navicon from './image/navicon.svg';

class Navbarx extends Component {
  render() {
    return (
      <div>
          <Navbar className="nav-bar" expand="lg"  variant="light">
      <Navbar.Brand href="#home">
      <img
        src={navicon}
        width="220"
        height="43"
        style={{marginLeft:-52,}}
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>

    <Form inline>
    
       
      <FormControl style={{width:224,borderRadius:20,textColor:'white',}}  type="text" placeholder="Search " size="sm" />
        
    </Form>

 
  <Navbar.Toggle  style={{color:'white',}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" variant="light">
    <Nav className="mr-auto" >
      <Nav.Link  href="#home"><h6 className="navname">Projects</h6></Nav.Link>
      <Nav.Link   href="#link"><h6 className="navname" >How it works</h6></Nav.Link>
      <Nav.Link   href="#link"><h6 className="navname" >Enterprises</h6></Nav.Link>
     
    </Nav>
    <Button className="btn" variant="outline-success" size="sm" >Sign-Up</Button>
      <Button  className="btn" variant="success"  size="sm" >login</Button>

   
  </Navbar.Collapse>
</Navbar>


<Nav className="justify-content-center nav-bar-two" activeKey="/home">
    <Nav.Item>
      <Nav.Link className="navlink" href="/home">Web dev</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-1">Mobile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Design</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Writting</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Admin Support</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Customer Service</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Marketing</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">Accounting</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="navlink" eventKey="link-2">See All Categories</Nav.Link>
    </Nav.Item>
    
    
    
  </Nav>
     
       
       </div>
      
    );
  }
}



export default Navbarx;

 
 
 
 
 
