import React from 'react'
import { Col, Container, Row , Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import industry from '../Assests/industry.png'
import Scalabilityy from '../Assests/Scalabilityy.PNG'
import cost from '../Assests/cost.png'
import Innovativee from '../Assests/Innovativee.png'




const Itpage = () => {
  return (
          
   <div>
        <Container className='py-4' id="reviewSection">
        <Row className='d-none d-lg-flex'>
          <Col>
            <p className="m-0 fw-semibold review-text d-flex align-items-center">
              <small className="text-secondary text-11px">REVIEWED ON </small> </p>
            <p className="d-flex align-items-center">
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
      <Card.Img variant="top" src={cost} alt='image' width={30} height={150} />
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