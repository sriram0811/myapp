import React from 'react'
import Button from 'react-bootstrap/Button';
import{Row,Col} from'react-bootstrap';
import where from '../Assests/where.png'


const Where = () => {
  return (
    <div>
        <Row>
            <Col className='p-5'>
            <Button variant="light" size="lg" active>where we do</Button>
            <h3 className='p-2'><strong>Recoginized by the best</strong></h3>
            <p>The company needed to complete a complex<br></br>
            migration on a tight deadline to avoid millions of<br></br>
            dollars in post contract fees and fines</p>
            </Col>
        <Col>
        <img src={where}  alt="image" /> 
          
        </Col>
        </Row>
        







    </div>
  )
}

export default Where