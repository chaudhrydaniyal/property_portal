import React from 'react'
import { Container, Card, Row, Col ,Button} from 'react-bootstrap'
import img from './item1.jpg'
import './single.css'
import {  useLocation, useParams } from 'react-router-dom';

const SingleProperty = () => {
  const  item  = useLocation();


  console.log("testvalue",item)

  const propDetail = item.state.item



  return (
    <div style={{  }}>

      <div style={{ paddingTop: "100px", marginBottom: "0px" }}>
        <Container >
          <Row>
            <Col xs={8}>
              <Card className="maincard">
                <Card.Title className='title'>
                  <div>
                    <p className="proptitle">{propDetail.title}</p>
                    <p className="address">{propDetail.location}</p><hr style={{ marginTop: "2px", color: "#444" }}></hr>
                  </div>
                </Card.Title>
                <Card.Img src={propDetail.img} alt="property_img" className='cardimg ' style={{width:"800px",height:"500px",backgroundSize:"cover"}}/>
                <Card.Body>
                  <div className='cardflex'>
                    <div className='innerflex'>
                      <div><i class="fa-solid fa-bath"></i></div>
                      <div>{propDetail.washrooms}&nbsp;Bath</div>
                    </div>
                    <div className='innerflex'>
                      <div> <i class="fa-solid fa-bed"></i></div>
                      <div>{propDetail.bedrooms}&nbsp;Rooms</div>
                    </div>
                    <div className='innerflex'>
                      <div> <i class="fa-solid fa-arrow-up-short-wide"></i></div>
                      <div>{propDetail.landArea}</div>
                    </div>
                  </div>

                </Card.Body>

              </Card></Col>
            <Col>
              <Card className='contact'>
                <Card.Title>
                  <div style={{ marginTop: "20px" }}>
                    <p style={{ marginBottom: "0px" }}></p>
                  </div>
                </Card.Title>
                <Card className='handle'>
                <Card.Body className='handle'>
                  {/* <Card.Text>
                    <div className=' mt-3 inner'>
                      <Card.Title ><div style={{fontSize:"25px",fontWeight:"bold"}}> PKR 6.55 Crore</div>
                       </Card.Title>
                       <div className='innershadow'>
                       <div className='bg-success text-center text-white' style={{width:"100%",padding:"4px 0px",marginTop:"10px",fontSize:"20px"}} >Contact Details</div>
                       <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between"}}>
                        <div className='itemsss'>
                        <div className='m-0 mt-2' style={{width:"40%"}}>Property Owner</div>
                        <div className='m-0 mt-2' style={{width:"60%"}}>Muhammad Noman</div>
                        </div>
                         <div className='itemsss'>
                            <div  className='m-0 mt-2' style={{width:"40%"}}>Phone</div>
                             <div className='m-0 mt-2' style={{width:"60%"}}>+923114550743</div>
                         </div>
                          <div className='itemsss'>
                           <div className='m-0 mt-2' style={{width:"40%"}}>Email</div>
                           <div  className='m-0 mt-2' style={{width:"60%"}}>numanrajpoot62@gmail.com</div>
                         </div>
                       </div>
                       </div>
                    </div>
                  </Card.Text> */}
                  <Card.Text>
                    <div className=' mt-3 inner bg-success' style={{borderRadius:"4px"}} >
                      <Card.Title >
                        <div className='price' style={{fontSize:"25px",fontWeight:"bold"}}> {propDetail.price}</div>
                       </Card.Title>
                       
                    </div>
                    <Card className='card2main'>
                <Card.Title><div className='overview'><p> Contact Details</p></div></Card.Title>
                <Card.Body className='detailflex2a'>

                  <div style={{width:"100%"}}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}><i class="fa-solid fa-user"></i>&nbsp;Owner</div>
                      <div style={{ width: "60%" }}>Muhammad Noman</div>
                    </div>
                  </div>
                 <br></br>


                </Card.Body>
                <Card.Body className='detailflexa mt-2 ' >
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>(<i class="fa-solid fa-phone"></i>)&nbsp;Phone</div>
                      <div style={{ width: "60%" }}> +923114550743</div>
                    </div>
                  </div>
                  <br></br>
                </Card.Body>
                <Card.Body className='detailflex2a mt-2 '>
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}><i class="fa-solid fa-envelope"></i>&nbsp;Email</div>
                      <div style={{ width: "60%" }}>numanrajpoot62@gmail.com</div>
                    </div>
                  </div>
                 <br></br>
                </Card.Body>
                <Card.Body className='detailflexa mt-2 mb-2' >
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}><i class="fa-solid fa-location-dot"></i> &nbsp;Location</div>
                      <div style={{ width: "60%" }}>{propDetail.city}</div>
                    </div>
                  </div> 
                </Card.Body>
                <Card.Body className='detailflex2a mt-2 mb-2' >
                  <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}><i class="fa-solid fa-clock"></i> &nbsp;Added</div>
                      <div style={{ width: "60%" }}>2 Hours Ago</div>
                    </div>
                  </div> 
                </Card.Body>
                <hr></hr>
              </Card>
                  </Card.Text>                  
                </Card.Body>
                </Card>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <Card className='card2main'>
                <Card.Title><div className='overview'><p>Details</p></div></Card.Title>
                <Card.Body className='detailflex'>

                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Type</div>
                      <div style={{ width: "60%" }}>House</div>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Area</div>
                      <div style={{ width: "60%" }}>{propDetail.landArea}</div>
                    </div>
                  </div><br></br>


                </Card.Body>
                <Card.Body className='detailflex2 mt-2 ' >
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Price</div>
                      <div style={{ width: "60%" }}>{propDetail.price}</div>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Purpose</div>
                      <div style={{ width: "60%" }}>{propDetail.propertyType}</div>
                    </div>
                  </div><br></br>
                </Card.Body>
                <Card.Body className='detailflex mt-2 '>
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Location</div>
                      <div style={{ width: "60%" }}>DC Colony, Gujranwala, Punjab</div>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Bedroom(s)</div>
                      <div style={{ width: "60%" }}>6</div>
                    </div>
                  </div><br></br>
                </Card.Body>
                <Card.Body className='detailflex2 mt-2 mb-2' >
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Bath(s)</div>
                      <div style={{ width: "60%" }}>5</div>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div style={{ display: "flex" }}>
                      <div style={{ width: "40%" }}>Added</div>
                      <div style={{ width: "60%" }}>2 Hours Ago</div>
                    </div>
                  </div>

                </Card.Body>
                <hr></hr>
              </Card>


            </Col>

          </Row>
          <div className='mb-5'>
            <Row>
              <Col xs={8}>
                <Card className='maincard'>

                  <Card.Title >
                    <div className='overview'>
                      <p>Description</p>

                    </div>
                  </Card.Title>
                  <Card.Body>
                    <div style={{ lineHeight: "1.5", textAlign: "justify" }}>
                      1 kanal beautiful house for sale on top location of the society
                      A construction near to park near to mosque near to commercial market near to banks near to school near to water filter plan
                      Near to everything you need on daily basis of life
                      We know you were in for a treat the moment you came across this House. Now, hurry and grab this offer. So if you're interested in buying this property, we would advise you to book it today. You will thank yourself later for investing in 4500 Square Feet property
                    </div>
                  </Card.Body>

                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SingleProperty