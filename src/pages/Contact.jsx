import React from 'react'
import Button from 'react-bootstrap/Button';
import {Row ,Col} from 'react-bootstrap';



const Contact = () => {
  return (
    <div>
    <div className="position-relative mx-lg-20 bg-dark text-white rounded p-4 ">
       <Button variant="light" size="lg" active>where we do</Button>
           <h3 className='py-5 '>Partner with Us for<br></br>
            Comprehensive IT</h3>
       </div>
       <div className="position-relative mx-lg-20 bg-primary text-white rounded p-4 ">
        <Row>
          <Col>
          <p>We re happy to answer any questions you may have and help<br></br>
          you determine which of our services best fit your needs</p>
          <a href="#" className="fs-5 hover-blue text-decoration-none text-dark fw-semibold">Call us at: 1-800-356-8933</a>
          <Row>
            <Col className="p-3 md-4 d-flex">
            <ul> Your Benefits
              <li>Client oriented</li>
              <li>Independent</li>
              <li>Competent</li>
           </ul>
            </Col>
            <Col className="p-3 md-4 d-flex">
            <ul> Your Benefits
              <li>Client oriented</li>
              <li>Independent</li>
              <li>Competent</li>
           </ul>
            </Col>
            </Row>
              <Row>
                <h4>What happens Next</h4>
                <Col>1 We Schedule a call at
                your convenience</Col>
                <Col>2 We do a discovery
                and consulting meting</Col>
                <Col>3 We prepare a
                proposal</Col>
                      
              </Row>
          </Col>
          <Col className="contactform">
          <center><h4>Schedule for consultation</h4></center>
          <form className="mx-4" >
          <div className="row mb-3">
                  <div className="form-group col-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName"   />
                  </div>
                  <div className="form-group col-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName"   />
                  </div>
                </div>
            <label htmlFor="email">Comapny / Organization</label>
            <input type="email" className="form-control" name="email"  />
            <label htmlFor="company">Company email</label>
             <input type="text" className="form-control" name="company"   />
             <label htmlFor="helpDropdown">How Can We Help You With</label>
                  <select className="form-control" name="helpDropdown" >
                    <option value="">Select an option</option>
                    <option value="Managed Services">Managed Services</option>
                    <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                </select>
                <label htmlFor="message">Message</label>
                  <textarea className="form-control" name="message" rows="4"  />
                  <Button variant="dark" size="lg" className="py-3"active>Submit</Button>           
       
                  
             </form>
          </Col>
        </Row>
      
        </div>


       </div>
    




  
  )
}

export default Contact