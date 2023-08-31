import React from 'react'
{/*
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap';
import success1 from '../Assests/success1.png'
import success2 from '../Assests/success2.png'
import success3 from '../Assests/success3.png'*/}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';






const Success = () => {
  return (
    <div className='p-5'>
    <Button variant="light" size="lg" active>where we do</Button>
    <h3>Success stories</h3>
    <Row className='p-2'>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {success1} alt='image' />
      <Card.Body>
        <Card.Title>Cloud Hosting</Card.Title>
        <Card.Text>
       <strong> Major Insurance Provider Saves
        $750k per Month With Big Data
        Migration</strong><br></br>
        The company needed to complete a complex
        migration on a tight deadline to avoid millions
        of dollars in post contract fees and fines.
︎       Modern infrastructure
︎       Consulting service</Card.Text>
        <Card.Link href="#">view more</Card.Link>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={success2} alt='image' />
      <Card.Body>
        <Card.Title>IT Consulting</Card.Title>
        <Card.Text>
       <strong> Maximizing Efficiency with Proper
        Technology Implementation Coffee
        Success Story</strong><br></br>
        The company needed to complete a complex
        migration on a tight deadline to avoid millions
        of dollars in post contract fees and fines.
︎       Modern infrastructure
︎       Consulting service</Card.Text>
        <Card.Link href="#">view more</Card.Link>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {success3} alt='image' />
      <Card.Body>
        <Card.Title>Mobile development</Card.Title>
        <Card.Text>
       <strong> Strategic Move to an AI-supported
        application for Public Safety Travel
        App in London</strong><br></br>
        The company needed to complete a complex
        migration on a tight deadline to avoid millions
        of dollars in post contract fees and fines.
︎       Modern infrastructure
︎       Consulting service</Card.Text>
        <Card.Link href="#">view more</Card.Link>
        </Card.Body>
        </Card>
        </Col>
      </Row>
     <center> <p className='tech'>Tecnologia implemented such a powerful platform that<br></br>
    we had no break in service when our employees had to<br></br>
    work from home due to the COVID-19 pandemic. We<br></br>
    weren t concerned about how to shift to a remote<br></br>
    working environment because Integris facilitated a<br></br>
    seamless transition.</p>
    <p><strong>Amanda Parks</strong><br></br>
    Network Manager, Healthcare Organization</p>
    </center>
   
    </div>
  
  
  )
}

export default Success