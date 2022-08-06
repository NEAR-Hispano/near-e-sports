import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    NavbarBrand,
    Navbar,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";
import { login, logout } from '../utils'


function NavbarComponent() {
    const [collapseOpen, toggleCollapseOpen] = React.useState(false);
    return (
        <>
            <Navbar className="navbar-dark bg-info" expand="lg">
                <Container>
                    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                        Info Color
                    </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        onClick={() => toggleCollapseOpen(!collapseOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Collapse isOpen={collapseOpen} navbar>
                        <div className="navbar-collapse-header">
                            <Row>
                                <Col className="collapse-brand" xs="6">
                                    <Link to="/index">
                                    </Link>
                                </Col>
                                <Col className="collapse-close" xs="6">
                                    <button
                                        className="navbar-toggler"
                                        onClick={() => toggleCollapseOpen(!collapseOpen)}
                                    >
                                        <span></span>
                                        <span></span>
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink
                                    className="nav-link-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fab fa-facebook-square"></i>
                                    <span className="nav-link-inner--text">Facebook</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fab fa-twitter"></i>
                                    <span className="nav-link-inner--text">Twitter</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className="nav-link-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fab fa-instagram"></i>
                                    <span className="nav-link-inner--text">Instagram</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
  
    /*
    <div>
      <Navbar bg="dark" variant="dark" className="text-blanco">
        <Container>
        <Col md={12} lg={12} xl={12}>   
          <Nav className="me-auto">
          <Nav.Link>
                <Link className="nav__link"
                    to="/"
                >
                    Home
                </Link>
            </Nav.Link>

            <Nav.Link >
                <Link className="nav__link"
                    to="/explorar"
                >
                    Crear Torneo
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link className="nav__link"
                    to="/soporte"
                >
                    Soporte
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="nav__link"
                    to="/upload"
                >
                    Ver torneos
                </Link>
            </Nav.Link> 
            <Nav.Link>
                <Link className="nav__link"
                    to="/torneo"
                >
                    torneos
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link className="nav__link"
                    to="/bracket"
                >
                    brackets
                </Link>
            </Nav.Link>

            <Col md={5} lg={5} xl={5}>   
            </Col>
            {window.walletConnection.isSignedIn()==true?
            
        

            <Button variant="success" className="link mr" style={{ float: 'right' }} onClick={logout}>
            Sign out
            </Button>
            :<div>
            <Button variant="success" className="link" style={{ float: 'right' }} onClick={login}>
            login
            </Button>   
                 

            </div>} 

        


          </Nav>
          </Col> 
        </Container>
      </Navbar>
    </div>
    */
    );
}
export default NavbarComponent;