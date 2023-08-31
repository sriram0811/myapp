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
        <p className='we'>We Build, Operate, <br></br>Transform your <br></br>businesses <span className='gradient'>Digitally</span></p>
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
        
        <Col>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
      <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
      </svg> 
      </Col>
      <Col>
      <h3>1000</h3> <p>Clients</p>
      </Col>
      </ListGroup.Item>
      <ListGroup.Item>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
</svg>
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