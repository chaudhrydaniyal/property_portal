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

import axios from 'axios';
import originURL from '../../url';

import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';




const AddProperties = () => {

  const [update, setUpdate] = useState(false);



  //Purpose........

  const [purpose, setPurpose] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(`${originURL}/addproperty/purpose`);
      console.log("ressssssss", res)
   



      setPurpose(res.data.getpurpose)

    }catch (error) {
      console.log(error);
    }


  }, [update]);


  const [puposeName, setPuposeName] = useState("");



  //Property Type

  const [propertyType, setPropertyType] = useState([]);

  useEffect(async () => {


    try {
      const res = await axios.get(`${originURL}/addproperty/propertytype`);
      console.log("ressssssss33", res)
      setPropertyType(res.data.getType)
    } catch (error) {
      console.log(error);
    }


  }, [update]);

  const [propertyTypeName, setPropertyTypeName] = useState("");





  const [showPurose, setShowPurpose] = useState(false);

  const handleClosePurpose = () => setShowPurpose(false);
  const handleShowPurpose = () => setShowPurpose(true);



  const [showPropertyType, setShowPropertyType] = useState(false);

  const handleClosePropertyType = () => setShowPropertyType(false);
  const handleShowPropertyType = () => setShowPropertyType(true);



  return (
    <>

      <Row>
        <Col>
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0"><div style={{ display: "flex", alignItems: "center" }}> <i className="bi bi-plus me-2" style={{ fontSize: "30px" }}> </i><span>Add Property</span></div></CardTitle>
            <CardBody>
              <CardTitle tag={"h6"} className=" text-white p-2 " style={{ backgroundColor: "#00a651" }}>PURPOSE</CardTitle>
              <Form>
                <FormGroup>

                  <label>Purpose</label>      <Button style={{ marginLeft: "auto" }} variant="success" onClick={handleShowPurpose}>Add More</Button>{' '}

                  <Modal style={{ marginTop: "30vh" }} show={showPurose} onHide={handleClosePurpose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add another purpose</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input style={{ width: "80%" }} onChange={(e) => setPuposeName(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClosePurpose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        try {
                          axios.post(`${originURL}/addproperty/purpose`, {
                            purpose: puposeName
                          })

                          setUpdate(!update)


                          handleClosePurpose()
                        } catch (err) {
                          console.log(err)
                        }
                      }}>

                        Add Purpose
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <ListGroup>
                    {purpose.map((p) =>
                      <ListGroup.Item>
                        {p.purpose}<Button style={{ marginLeft: "40%", color: "red", backgroundColor: "white", borderColor: "white" }} onClick={async () => {
                          await axios.delete(`${originURL}/addproperty/purpose/${p._id}`)

                          setUpdate(!update)

                        }}><i class="bi bi-trash" variant="success"></i></Button>
                      </ListGroup.Item>)}

                  </ListGroup>
                </FormGroup>
              </Form>

              <br /><br />


              <CardTitle tag={"h6"} className=" text-white p-2 " style={{ backgroundColor: "#00a651" }}>PROPERTY TYPES </CardTitle>
              <Form>
                <FormGroup>

                  <label>Property Types</label>      <Button style={{ marginLeft: "auto" }} variant="success" onClick={handleShowPropertyType}>Add More</Button>{' '}

                  <Modal style={{ marginTop: "30vh" }} show={showPropertyType} onHide={handleClosePropertyType} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add another Property Type</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input style={{ width: "80%" }} onChange={(e) => setPropertyTypeName(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClosePropertyType}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        try {
                          axios.post(`${originURL}/addproperty/propertytype`, {
                            propertyType: propertyTypeName
                          })

                          setUpdate(!update)


                          handleClosePropertyType()
                        } catch (err) {
                          console.log(err)
                        }
                      }}>

                        Add Property Type 
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <ListGroup>
                    {propertyType.map((p) =>
                      <ListGroup.Item>
                        {p.propertyType}
                        <Link to="/propertysubtypes"
                        state={{item:p}}
                        >

                        <span style={{marginLeft:"50px", textDecoration:"none", color:"black"}}>Subtypes</span>

                        </Link>
                        
                        
                      


                        <Button style={{ marginLeft: "40%", color: "red", backgroundColor: "white", borderColor: "white" }} onClick={async () => {
                          await axios.delete(`${originURL}/addproperty/propertytype/${p._id}`)

                          setUpdate(!update)

                        }}><i class="bi bi-trash" variant="success"></i></Button>
                      </ListGroup.Item>)}

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

export default AddProperties