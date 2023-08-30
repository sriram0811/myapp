import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap';



const Vendor = () => {
  return (
    <div className="position-relative mx-lg-20 bg-dark text-white rounded p-4 ">
        <Button variant="light" size="lg" active>
        what we use
      </Button>
      <h1>Bringing the best IT vendors to you</h1>
      <p>Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it</p>
      <Row>
        <center>
        <Col>
       <Card style={ {width: '18rem'} }>
       <Card.Body className='bg-black '>
        <Card.Title className='text-light border-0'>Your It challenges</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        </center>
      </Row>
       <Row className='p-5'>
        <Col>
        <Card className='border-0'>
      <Card.Body className='bg-black '>
        <Card.Title className='text-light'>Datacenter & Hosting</Card.Title>
        <Card.Text className='text-light'>
        Our facility Data Center is the first in the USA that
        meets the strict ANSI/TIA 942 rated 4 certificate
        requirements for design, build and operate</Card.Text>
        <Card.Link href="#" className='text-decoration-none'>view more</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='border-0'>
      <Card.Body className='bg-black'>
        <Card.Title className='text-light'>Collaboration</Card.Title>
        <Card.Text className='text-light'>
        Despite modern cloud technology, your users operate
        in a familiar Microsoft Office environment and benefit
        from broad compatibility and low threshold access</Card.Text>
        <Card.Link href="#" className='text-decoration-none'>view more</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='border-0'>
      <Card.Body className='bg-black'>
        <Card.Title className='text-light'>Cloud Plattform</Card.Title>
        <Card.Text className='text-light'>
        Customized cloud platform designed to improve
        performance, lower IT costs, and provide secure and
        reliable access to your company data from any
        device, anytime, anywhere.</Card.Text>
        <Card.Link href="#" className='text-decoration-none'>view more</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Vendor