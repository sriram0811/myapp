import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import solution1 from '../Assests/solution1.png'
import solution2 from '../Assests/solution2.png'
import solution3 from '../Assests/solution3.png'
import solution4 from '../Assests/solution4.png'
import solution5 from '../Assests/solution5.png'
import solution6 from '../Assests/solution6.png'

const Solution = () => {
  return (
    <div className="how">
    <div className="position-relative mx-lg-20 bg-secondary text-white rounded p-4 ">
    <Button variant="dark" size="lg" active>
        how we do
      </Button>
      <h2 className='py-3'>Solutions</h2>
      <Container>
      <Row>
        <Col xs={6} md={4} className='py-2'>
          <Image src={solution1} alt="image" className='rounded'/>
        </Col>
        <Col xs={6} md={4} className='py-2'>
          <Image src={solution2} alt="image" className='rounded'/>
        </Col>
        <Col xs={6} md={4} className='py-2'>
          <Image src={solution3} alt="image" className='rounded'/>
        </Col>
        <Row>
        <Col xs={6} md={4} className='py-2'>
          <Image src={solution4} alt="image" className='rounded'/>
        </Col>
        <Col xs={6} md={4}className='py-2'>
          <Image src={solution5} alt="image" className='rounded'/>
        </Col>
        <Col xs={6} md={4}className='py-2'>
          <Image src={solution6} alt="image" className='rounded'/>
        </Col>
       

        </Row>
       
       
        </Row>
      
    </Container>
   <center className='py-2'> <Button variant="dark" size="lg" active>
        View all Solutions
      </Button></center>
    

    
    
    
      </div>
    </div>
  )
}

export default Solution