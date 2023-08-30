import React from 'react'
import{Row,Col} from'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Row className='d-none d-lg-flex'>
          <Col>
            <p className="m-0 fw-semibold review-text d-flex align-items-center">
              <small className="text-secondary text-11px">REVIEWED ON </small> </p>
            <p className="d-flex align-items-center">
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>
          <Col className="border-start border-3">
            <p className=" m-0 ml-3 text-30px"> <span className="review-secondary text-20px">Seventh Ave, 20th Floor</span></p>
            <p className="text-16px">New York, NY 10018</p>
          </Col>
          <Col className="border-start border-3">
            <p className=" m-0 ml-3 text-30px"> <span className="review-secondary text-20px">T: 1 800 356 8933</span></p>
            <p className="text-16px">E: office@dummy.com</p>
          </Col> 
          <Col>
          <div className="col d-flex gap-3">
          <div>
            <a href="" className='social-link'>
            <i className="bi bi-linkedin fs-3"></i>
            <p className="m-0  text-14px">LinkedIn</p>
            </a>
          </div>
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-github fs-3"></i>
            <p className="m-0  text-14px">Github</p>
            </a>
          </div> 
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-twitter fs-3"></i>
            <p className="m-0  text-14px">Twitter</p>
            </a>
          </div>
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-facebook fs-3"></i>
            <p className="m-0  text-14px">Facebook</p>
            </a>
          </div>
          <div>
          <a href="" className='social-link'>
            <i className="bi bi-youtube fs-3"></i>
            <p className="m-0  text-14px">Youtube</p>
            </a>
          </div>
          </div>
          </Col>
          </Row>
        
      
         
          
          <Row>
            <center><p>© 2023 Terms & Conditions Privacy Policy</p></center>
          </Row>






    </div>
  )
}

export default Footer