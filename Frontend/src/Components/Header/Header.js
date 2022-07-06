import React from 'react'
import { useState } from 'react';
import { Navbar, Container, Nav, Modal,Button ,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

import './header.css'
const Header = ({show,handleShow,handleClose}) => {



    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    return (
        <div>
            <Navbar bg="success" expand="lg" className='text-white' fixed={"top"}>
                <Container>
                    <Navbar.Brand href="#home"><div style={{ width: "180px" }}><i className="fa-solid fa-house text-white " style={{ fontSize: "20px" }}></i><span className='text-white ' style={{ marginLeft: "4px" }}>PropertyHub</span></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto text-white">
                            <Nav.Link ><a href='/' className='item'>Rent</a></Nav.Link>
                            <Nav.Link ><a href='/' className='item'>Buy</a></Nav.Link>
                            <Nav.Link ><a href='/' className='item'>Sell</a></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                <Link to={'/addproperty'} className='add'><i className="fa-solid fa-plus"></i><span>Add Property</span></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/home" className='item' onClick={handleShow}>Login</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to='/register' className='item'> Signup</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
          
            <Modal
                show={show}
                onHide={handleClose}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Login here
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Username</Form.Label>
                    <Form.Control  placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                    <Form.Label className='mt-3'>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success mx-auto'
                    
                    onClick={async ()=>{console.log("state",username,password)


                    try {
                        // make axios post request
                        const response = await axios({
                          method: "post",
                          url: "http://localhost:8000/auth/login",
                          data: {
                            username: username,
                            password: password,
                          },
                          headers: { "Content-Type": "application/json" },
                        });
                  
                        console.log("response",response);
                  
                 
                  
                      } catch (error) {
                        console.log(error);
                      }
                
                
                
                }}
                    
                    >Login</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Header;
