import React from 'react'
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
const AddProperties = () => {
  return (
    <>
        
       <Row>
        <Col>
             <Card>
                <CardTitle tag="h6" className="border-bottom p-3 mb-0"><div style={{display:"flex",alignItems:"center"}}> <i className="bi bi-plus me-2" style={{fontSize:"30px"}}> </i><span>Add Property</span></div></CardTitle>
                <CardBody>
                    <CardTitle tag={"h6"} className=" text-white p-2 " style={{backgroundColor:"#00a651"}}>PURPOSE, PROPERTY TYPE AND LOCATION</CardTitle>
                    <Form>
                        <FormGroup>
                            <label>Purpose</label>
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