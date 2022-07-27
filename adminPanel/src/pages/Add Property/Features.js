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




const Features = () => {




  const item = useLocation();


  console.log("testvalue", item)

  const propDetail = item.state.item




  const [update, setUpdate] = useState(false);







  //Property Subtypes

  const [propertySubtype, setPropertySubtype] = useState([]);

  useEffect(async () => {


    try {
      const res = await axios.get(`${originURL}/addproperty/feature/${propDetail._id}`);
      console.log("ressssssss33", res)
      setPropertySubtype(res.data.get)
    }
    catch (error) {
      console.log(error);
    }


  }, [update]);

  const [featureName, setFeatureName] = useState("");
  const [featureType, setFeatureType] = useState("checkbox");






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
              <CardTitle tag={"h6"} className=" text-white p-2 " style={{ backgroundColor: "#00a651" }}>Features</CardTitle>
              <Form>
                <FormGroup>
                  <div className='d-flex justify-content-between align-items-center ps-3 pe-3'>
                    <label>Features</label>      <Button style={{ marginLeft: "auto" }} variant="success" onClick={handleShow}>Add More</Button>{' '}
                  </div>
                  <br />

                  <Modal style={{ marginTop: "30vh" }} show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Feature</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <label>Feature Name</label>
                      <input style={{ width: "80%" }} onChange={(e) => setFeatureName(e.target.value)}></input>
                      <br />
                      <br />
                      <label>Feature Type: &nbsp;</label>
                      <select name="type" onChange={(e) => {
                        console.log("evalue", e.target.value)
                        setFeatureType(e.target.value)
                      }}>
                        <option value="checkbox">Check Box</option>
                        <option value="text">Text Field</option>

                      </select>
                      <br />
                      <br />
                      <br />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => {
                        try {

                          console.log(featureName, featureType, propDetail._id)

                          axios.post(`${originURL}/addproperty/feature`, {
                            featurename: featureName,
                            featuretype: featureType,
                            addedIn: propDetail._id
                          })
                          setUpdate(!update)
                          handleClose()
                        } catch (err) {
                          console.log(err)
                        }
                      }}>
                        Add Feature
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <ListGroup>
                    {propertySubtype && propertySubtype.map((p, index) =>

                      <Row>
                        <ListGroup.Item className='d-flex justify-content-between align-items-center ps-5 pe-5'>

                          <Col>
                            <span style={{ marginLeft: "20%", marginRight: "0%" }}>
                              {index + 1}.
                            </span>
                          </Col>
                          <Col>

                            <span>
                              {p.featurename}
                            </span>

                          </Col>

                          <Col>

                            <span>
                              {p.featuretype}
                            </span>

                          </Col>
                          <Col>
                            <Button style={{ marginLeft: "40%", color: "red", backgroundColor: "white", borderColor: "white" }} onClick={async () => {
                              await axios.delete(`${originURL}/addproperty/feature/${p._id}`)
                              setUpdate(!update)
                            }}>
                              <i class="bi bi-trash" variant="success"></i>
                            </Button>
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

export default Features