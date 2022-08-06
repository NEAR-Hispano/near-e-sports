import React from "react";
import { login, logout } from '../../utils'

// reactstrap components
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from "reactstrap";

import { useNavigate } from "react-router-dom";


// Core Components

function Navbar2() {
    const [collapseOpen, toggleCollapseOpen] = React.useState(false);
    let navigate = useNavigate();

    const routeChange = (path) => {

        navigate(path);
    }
    return (
        <>
      <Navbar  className="bg-dark navbar-default" expand="lg">
        <Container>
          <NavbarBrand style={{ color: "#5e72e4" }} >
               Near Tournament Esports
          </NavbarBrand>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="ni ni-align-left-2" style={{color:"white"}}> </span>
          </button>
          <Collapse isOpen={collapseOpen} navbar>
            <div className="navbar-collapse-header">
              <Row>
                <Col>
                <p>Menu</p>
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
                <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("/")} >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("vertorneo")}>
                  Ver torneos
                </NavLink>
              </NavItem>


              {window.walletConnection.isSignedIn() == true &&
                <NavItem>
                  <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("torneo")}>
                    Crear Torneo
                  </NavLink>
                </NavItem>

              }
              <NavItem>
                <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("soporte")} >

                  Soporte

                </NavLink>
              </NavItem>

              {window.walletConnection.isSignedIn() == true &&

                <NavItem>
                  <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("perfil")} >

                    Perfil

                  </NavLink>
                </NavItem>

              }

              {window.accountId == "kevinhernandez.testnet" &&

                <NavItem>
                  <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("run")} >

                    run

                  </NavLink>
                </NavItem>

              }

            </Nav>
            <Nav className="nav navbar-right" navbar>
              <NavItem>


                {window.walletConnection.isSignedIn() == true ?



                  <NavLink style={{ color: "#5e72e4" }} onClick={logout}>
                    Sign out
                  </NavLink>
                  :
                  <NavLink style={{ color: "#5e72e4" }} onClick={login}>
                    Login
                  </NavLink>


                }

              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>

    );
}

export default Navbar2;