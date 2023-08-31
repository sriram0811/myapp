import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


const Foot = () => {
  return (
    <div className='position-relative mx-lg-20 bg-dark text-white rounded p-4 m-30px'>
    <Row className='foot'>
        <Col className='md-4'>
        <ul className="list-unstyled"> 
        <h4>Solution</h4>
        <Row>
          <Col>
            <li>Managed Services</li>
            <li>IT Consulting & Advisor</li>
            <li>Cyber Securit</li>
            <li>Web Developmen</li>
            </Col>
            <Col className='md-4'>
            <li>Mobile Development</li>
            <li>Cloud Services</li>
            <li>Network Connectivity</li>
            <li>ERP Solutions</li>
        </Col>
        <Col className='logo'>
          <p>LOGOIPUSIM</p>
          </Col>
        </Row>
        </ul>
       </Col>

        
        <ul className="list-unstyled"> 
        <h4>Company</h4>
        <Row>
          <Col>
            <li>About Us</li>
            <li>Why us</li>
            <li>Team</li>
            <li>Career</li>
            <li>Reviews & Awards</li>
            </Col>
            <Col>
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Events</li>
            <li>FAQ</li>
        </Col>
        <Col className='sch'>
        <Button variant="secondary" size="lg" active>Schedule consultation</Button>
          </Col>
        </Row>
        </ul>
       
       

       </Row>
           


    </div>
  )
}

export default Foot