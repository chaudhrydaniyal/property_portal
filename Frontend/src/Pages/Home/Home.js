import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./home.css"
import img1 from '../../Assets/1.webp'
import img2 from '../../Assets/2.webp'
import img3 from '../../Assets/3.webp'
const Home = () => {
  return (
    <>

      <div className='header'>
      </div>
      
      <Container  style={{marginTop:'20px',marginBottom:"50px"}}>
      <Card className=' px-5' style={{border:'none'}}>
      <div className=""> <p className='' style={{fontSize:"20px",fontWeight:'bold'}}>Newly Listed Properties</p></div>
        <Row className='  mb-5'>
          <Col className ='items'  lg="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img2} alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img3}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img3}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col className ='items'  lg="3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img2}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img1}  alt="propertypic"  className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img3}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg='3' className='items'>
            <Card  style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img3}  alt="propertypic" className="img"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="success" className='btn btn-success'>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Card>
      </Container>
     
    </>
  )
}

export default Home;
