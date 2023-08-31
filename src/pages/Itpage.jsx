import React from 'react'
import { Col, Container, Row , Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import industry from '../Assests/industry.png'
import Scalabilityy from '../Assests/Scalabilityy.PNG'
import cost from '../Assests/cost.png'
import Innovativee from '../Assests/Innovativee.png'
import clutch from'../Assests/clutch.svg'




const Itpage = () => {
  return (
          
   <div>
        <Container className='py-4' id="reviewSection">
        <Row className='d-none d-lg-flex'>
          <Col>
          <p className="m-0 fw-semibold review-text d-flex align-items-center">
            <small className="text-secondary text-11px">REVIEWED ON </small>
            <span className="d-inline d-flex align-items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
           </svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>   
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>  
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>  
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            </span>
          </p>
            <p className="d-flex align-items-center">
              <img src={clutch} alt='image'/>
              <span className="px-3 text-secondary fw-semibold text-12px">31 REVIEWS</span>
            </p>
          </Col>

          <Col className="border-start border-3">
            <p className="fw-semibold m-0 ml-3 text-30px"> <span className="review-secondary text-20px">20 Years</span></p>
            <p className="text-16px">Proven Track Record</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px"><span className="review-secondary text-20px">98%</span></p>
            <p className="text-16px">Customer Statisfaction</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px"><span className="review-secondary text-20px">1500 projects</span></p>
            <p className="text-16px">We have completed</p>
          </Col>
          <Col className="border-start border-3">
            <p className="fw-semibold m-0 text-30px"><span className="review-secondary text-20px">3 mins</span></p>
            <p className="text-16px">Average time answer</p>
          </Col>
        </Row>
      </Container>
      <Container className='px-0'>
        <div className=" my-5">
          <div className="position-relative mx-lg-20 bg-dark text-white rounded p-4 ">
          <Button variant="light" size="lg" active>What we do</Button>
            <p className=" pt-5 display-5 bottom-0 fw-bold what-we-do-heading">Simplifying IT <br />for a complex world.</p>
          </div>
        </div>
      </Container>
      <Row>
        <Col>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={cost} alt='image' height={150} />
      <Card.Body>
        <Card.Title>Cost effectiveness</Card.Title>
        <Card.Text>
        We offer affordable IT solutions that help you reduce costs and improve your bottom line</Card.Text>
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Innovativee} alt='image' width={50} height={150} />
      <Card.Body>
        <Card.Title>Innovative Technology</Card.Title>
        <Card.Text>
        We stay up to date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition</Card.Text>.
     </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Scalabilityy} alt='image' width={50} height={150} />
      <Card.Body>
        <Card.Title>Scalability</Card.Title>
        <Card.Text>
        Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment </Card.Text> </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={industry} alt='image' width={50} height={150} />
      <Card.Body>
        <Card.Title>Industry Expertise</Card.Title>
        <Card.Text>
        We specialize in serving specific industries, such as healthcare, finance,or manufacturing, and offer tailored solutions that meet your unique needs </Card.Text></Card.Body>
    </Card>
    </Col>
    
    </Row>
  
  

      
    
    </div>
  )
}

















        




export default Itpage