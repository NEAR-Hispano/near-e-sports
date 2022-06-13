import React from "react";
import { Navbar, Container, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login, logout } from '../utils'



const NavbarComponent = () => {
  return (
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
  );
};

export default NavbarComponent;