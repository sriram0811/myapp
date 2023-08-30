import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ListGroup } from 'react-bootstrap';
import {Row ,Col} from 'react-bootstrap';


export const Home = () => {
  return (
    <Row>
      <Col>
       <div className="container">
      <div className="p-5">
        <h1>We Build, Operate, <br></br>Transform your <br></br>businesses <span className=' text-primary'>Digitally</span></h1>
        <p><h3>Take charge of your business continuity<br></br> with innovative IT solutions</h3></p>
     </div>
     <div>
      <Button variant='dark' className="me-2 ">Schedule for free consultation</Button>
      <Button variant='light' >Services</Button>
     </div>
     </div>
     </Col>
       
    <Col className='get'>
     <div className="shadow-lg container mt-5 pt-3">
        <p><strong>Get a Quote from our experts.</strong><br></br>
        Find the services you need and receive quotes from our team of Specialists</p>
     <Form.Control size="mb-3 shadow-sm" type="text" placeholder="searchservices" /><br></br>
     <Form.Control size="mb-3 shadow-sm" type="text" placeholder="9898989898" />
     <div className="p-5">
      <Button variant='dark'>Submit and Next</Button>
      <div>
      <ListGroup horizontal className="list-inline d-flex justify-content-around  mt-4 border-none">
      <ListGroup.Item>
      <h3>1000</h3>      
      <p>Clients</p> 
      </ListGroup.Item>
      <ListGroup.Item>
      <h3>1000</h3>      
      <p>Agencies</p> 
      </ListGroup.Item>
    </ListGroup>
    
    </div>
    </div>
    </div>
    </Col>
    </Row>   
    
    )
}
export default Home