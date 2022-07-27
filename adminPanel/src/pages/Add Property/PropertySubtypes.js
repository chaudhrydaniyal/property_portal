import React from 'react'
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import axios from 'axios';
import originURL from '../../url';

import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';




const PropertySubtypes = () => {




  const item = useLocation();


  console.log("testvalue", item)

  const propDetail = item.state.item




  const [update, setUpdate] = useState(false);







  //Property Subtypes

  const [propertySubtype, setPropertySubtype] = useState([]);

  useEffect(async () => {


    try {
      const res = await axios.get(`${originURL}/addproperty/propertysubtype/${propDetail._id}`);
      console.log("ressssssss33", res)
      setPropertySubtype(res.data.detail)
    } catch (error) {
      console.log(error);
    }


  }, [update]);

  const [propertySubtypeName, setPropertySubtypeName] = useState("");




  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0"><div style={{ display: "flex", alignItems: "center" }}> <i className="bi bi-plus me-2" style={{ fontSize: "30px" }}> </i><span>Add Property</span></div></CardTitle>
            <CardBody>
              <CardTitle tag={"h6"} className=" text-white p-2 " style={{ backgroundColor: "#00a651" }}>{propDetail.propertyType} Subtypes</CardTitle>
              <Form>
                <FormGroup>

                  <div className='d-flex justify-content-between align-items-center ps-3 pe-3'> 

                  <label>{propDetail.propertyType} Subtypes</label>      <Button style={{ marginLeft: "auto" }} variant="success" onClick={handleShow}>Add More</Button>{' '}
                  </div>
                  <br />
                  <Modal style={{ marginTop: "30vh" }} show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add another Subtype</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input style={{ width: "80%" }} onChange={(e) => setPropertySubtypeName(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        try {
                          axios.post(`${originURL}/addproperty/propertysubtype`, {
                            propertysubtype: propertySubtypeName,
                            addedIn: propDetail._id
                          })

                          setUpdate(!update)


                          handleClose()
                        } catch (err) {
                          console.log(err)
                        }
                      }}>

                        Add Property Subtype
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <ListGroup>
                    {propertySubtype && propertySubtype.map((p,index) =>

                    <Row>
                      <ListGroup.Item className='d-flex justify-content-between align-items-center ps-5 pe-5'>


<Col>
                      <span style={{ marginLeft: "20%" }}>
                              {index + 1}.
                            </span>

                            </Col>
                        <Col>
                        {p.propertysubtype}
                        </Col>
                        <Col>
                        <Link to="/features"
                        state={{item:p}}
                        style={{ marginLeft: "50px", textDecoration: "none", color: "green", fontWeight:"700" }}
                        >

                          <span >Features</span>

                        </Link>
                        </Col>
                        
                        
                        <Col>


                        <Button style={{ marginLeft: "40%", color: "red", backgroundColor: "white", borderColor: "white" }} onClick={async () => {
                          await axios.delete(`${originURL}/addproperty/propertysubtype/${p._id}`)

                          setUpdate(!update)

                        }}><i class="bi bi-trash" variant="success"></i></Button>

</Col>
                      </ListGroup.Item>
                      
                      </Row>
                      )}

                  </ListGroup>

                </FormGroup>
              </Form>
            </CardBody>
          </Card>

        </Col>
      </Row>


    </>
  )
}

export default PropertySubtypes