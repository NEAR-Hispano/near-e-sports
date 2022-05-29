import React,{ useState }  from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login, logout } from '../utils'

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="text-blanco">
        <Container>
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
                    to="/equipos"
                >
                    Mis equpos
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link className="nav__link"
                    to="/dashboard"
                >
                    Dashboard
                </Link>
            </Nav.Link>
            <Nav.Link >
                <Link className="nav__link"
                    to="/explorar"
                >
                    Explorar
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="nav__link" 
                    to="/marketplace"
                >
                    Marketplace
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="nav__link"
                    to="/liga"
                >
                    Liga
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link className="nav__link"
                    to="/soporte"
                >
                    Soporte
                </Link>
            </Nav.Link> 

            {window.walletConnection.isSignedIn()==true?
            <button className="link" style={{ float: 'right' }} onClick={logout}>
            Sign out
            </button>
            :<div>
            <button className="link" style={{ float: 'right' }} onClick={login}>
            login
            </button>        
            </div>} 

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;