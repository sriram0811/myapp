import React from 'react'
import Button from 'react-bootstrap/Button';
import {Row,Col,Container} from'react-bootstrap';
import industry1 from '../Assests/industry1.webp'
import industry2 from '../Assests/industry2.webp'
import industry3 from '../Assests/industry3.webp'
import industry4 from '../Assests/industry4.webp'
import industry5 from '../Assests/industry5.webp'
import industry6 from '../Assests/industry6.webp'




const Challenge = () => {
  return (
    <Container className="py-4">
    <Row className="justify-content-center">
     
      <Col xs={8} className='py-5'>
        <div className="py-2">
          <p className="text-11px fw-semibold how-we-do px-2 py-1 rounded">HOW WE DO</p>
          <p className="text-dark fw-bold display-5">Solving IT challenges in every industry, every day.</p>
          <div className="container mt-4">
            <Row  md={4}>
              <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                <div className="box d-flex align-items-center">
                  <img src={industry1} className="start-0 circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">
                      Industry & Manufacturing
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                <div className="box d-flex align-items-center">
                  <img src={industry2} className="circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">Transportation & Logistics
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} xs={12} className="mb-4 services-card d-flex align-items-center">
                <div className="box d-flex align-items-center">
                  <img src={industry3} className="circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">
                      Healthcare
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row md={4}>
              <Col md={4} xs={12} className="mb-4 services-card d-flex">
                <div className="box d-flex align-items-center">
                  <img src={industry4} className="start-0 circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">
                      Banks & Insurance
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} xs={12} className="mb-4 services-card d-flex">
                <div className="box d-flex align-items-center">
                  <img src={industry5} className="circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">Consulting Providers
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={4} xs={12} className="mb-4 services-card d-flex">
                <div className="box d-flex align-items-center">
                  <img src={industry6} className="circle-img" alt="Image 1" />
                  <div className="mx-2">
                    <p className="fw-semibold m-0 pl-3">
                      Non-Profit
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <a className="styled-blue-link text-decoration-none mt-auto"
          href="/">
          View All Industries
        </a>
      </Col>
    </Row>
  </Container>

 












    
  )
}

export default Challenge