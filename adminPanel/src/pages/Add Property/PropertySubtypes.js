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

                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Subtype</th>
                        <th scope="col">Features</th>

                        <th scope="col">Delete</th>

                      </tr>
                    </thead>
                    <tbody>
                    {propertySubtype && propertySubtype.map((p, index) =>

                    <tr>


                      <th scope="row">

                    
                            <span>
                              {index + 1}.
                            </span>


                            </th>

                            <td>

                            {p.propertysubtype}
                            </td>
                            <td>
                       
                            <Link to="/addproperty/features"
                              state={{ item: p }}
                              style={{ textDecoration: "none", color: "green", fontWeight: "700" }}
                            >

                              <span >Features</span>

                            </Link>
                            </td>
                            <td>


                            <Button style={{  color: "red", backgroundColor: "white", borderColor: "white" }} onClick={async () => {
                              await axios.delete(`${originURL}/addproperty/propertysubtype/${p._id}`)

                              setUpdate(!update)

                            }}><i class="bi bi-trash" variant="success"></i></Button>
                            </td>

</tr>
                    )}

             </tbody>
             </table>

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