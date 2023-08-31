import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button}  from 'react-bootstrap';
 
 const Header = () => {
  return (
    <div>
    
    <Navbar collapseOnSelect expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="content-align-left"><h2 className='log'>LOGOIPUSIM</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex px-5">
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">case studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">case studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Case studies</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">case studies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            
            
          </Nav>
          <Nav>
            <div className="d-flex align-items-right">
            <div className="px-4 contact">
                    <button className="client-support border 0 rounded fw-semibold py-0 px-1">
                                    Client Support
                    </button>
                    <br />
                    <a href="tel:1-800-356-8933" className="contact-number">1-800-356-8933</a>
                </div>
                <div>
                    <Button variant='dark'>Contact us</Button>
                </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}

export default Header
