import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import solution1 from '../Assests/solution1.png'
import solution2 from '../Assests/solution2.png'
import solution3 from '../Assests/solution3.png'

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
        <Col xs={6} md={4}>
          <Image src={solution1} alt="image"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={solution2} alt="image"/>
        </Col>
        <Col xs={6} md={4}>
          <Image src={solution3} alt="image"/>
        </Col>
       
       
        </Row>
      
    </Container>
   <center> <Button variant="dark" size="lg" active>
        View all Solutions
      </Button></center>
    

    
    
    
      </div>
    </div>
  )
}

export default Solution