import React from "react";
import { Link } from "react-router-dom";
import {Context} from "../Context/Context"
import { useContext } from "react";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import './Header.css'
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/avatar.png";

import { useNavigate } from "react-router-dom";




const Header = () => {
  const {user,dispatch} = useContext(Context)
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const navigate = useNavigate()

  
  const handleLogout = async () =>{
     await dispatch({type:"LOGOUT"})
      navigate("/")
      
  }


  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar  dark expand="md" style={{backgroundColor:"#007E33",color:"white"}}>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="success"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="success"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
       <div className="navflex">
       <div style={{width:"80%"}}>
       <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link text-white" >
              Starter
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link text-white">
              About
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="text-white">
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
       </div>
        <div style={{width:"20%",display:"flex",justifyContent:"space-between"}}>
        { user ?  <>
         <div style={{width:"80%",display:"flex",justifyContent:"center"}} >
         <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle className="profile">
                <img
                  src={user1}
                  alt="profile"
                  className="rounded-circle"
                  width="35"
                ></img>

              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Info</DropdownItem>
                <DropdownItem>My Account</DropdownItem>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
         </div>
          
        </>: <div className="logins" style={{width:"50%"}}><Link to="/adminlogin" className="texts" color="white">Login</Link></div>}
        </div>
       </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;