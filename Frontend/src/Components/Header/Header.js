import React from "react";
import { useState } from "react";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import "./header.css";
import avatar from './avatar.webp'
import originURL from "../../url";
import NotificationManager from "react-notifications/lib/NotificationManager";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import 'react-notifications/lib/notifications.css';
const Header = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState("")

  return (
    <div>

      <Navbar bg="success" expand="lg" className="text-white" fixed={"top"}>
        <Container>
          <Navbar.Brand className="br">
            <Link to={"/"} className="br">
              <div style={{ width: "180px" }}>
                <i
                  className="fa-solid fa-house text-white "
                  style={{ fontSize: "20px" }}
                ></i>
                <span className="text-white " style={{ marginLeft: "4px" }}>
                  PropertyHub
                </span>
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-white">
              <Nav.Link>
                <Link to={"/propertylisting"} state={{purpose:"For Rent"}} className="item">
                  Rent
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/propertylisting"} state={{purpose:"For Sale"}} className="item">
                  Buy
                </Link>
              </Nav.Link>
              <Nav.Link>
                <a href="/" className="item">
                  Sell
                </a>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/propertylisting"} className="item">
                  Properties
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/requestedpropertylisting"} className="item">
                  Requested Properties
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to={"/addproperty"} className="add">
                  <i className="fa-solid fa-plus"></i>
                  <span>Add Property</span>
                </Link>
              </Nav.Link>
              {
                loggedIn ?
                  <>



                    {userAvatar == "" ?
                      <Avatar src={avatar} /> :
                      <Avatar src={userAvatar} />}
                    &nbsp;
                    <Nav.Link className="item" onClick={() => {
                      setLoggedIn(false)
                      localStorage.setItem("loggedIn", false)

                    }}>
                      Logout
                    </Nav.Link>

                  </>
                  :

                  <>

                    <Nav.Link>
                      <Link to="/" className="item" onClick={handleShow}>
                        Login
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/register" className="item">
                        {" "}
                        Signup
                      </Link>
                    </Nav.Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>
      <NotificationContainer />

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
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            console.log("state", username, password);

            try {
              // make axios post request
              const response = await axios({
                method: "post",
                url: `${originURL}/auth/login`,
                data: {
                  username: username,
                  password: password,
                },
                headers: { "Content-Type": "application/json" },
              });

              console.log("response status", response.status)
              if (response.status == 200) {
                setUserAvatar(response.data.details.image)
                setLoggedIn(true)
                NotificationManager.success("LogIn Success");
                setShow(false)
                localStorage.setItem("loggedIn", true)
              }


              console.log("response", response);

            } catch (error) {


              console.log(error);
              NotificationManager.error('Wrong Credientials')
            }
          }}
        >
          <Modal.Body>
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Form.Label className="mt-3">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="success mx-auto">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </div>
  );
};

export default Header;
