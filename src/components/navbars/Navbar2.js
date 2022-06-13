import React from "react";
import { Link } from "react-router-dom";
import { login, logout } from '../../utils'



// reactstrap components
import {
    UncontrolledCollapse,
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
    let navigate = useNavigate();
    const routeChange = (path) => {

        navigate(path);
    }
    return (



        <Navbar className="bg-dark navbar-default" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand style={{ color: "#5e72e4" }} >
                        Near Tournament Esports
                    </NavbarBrand>
                    <button
                        aria-controls="navbarSupportedContent"
                        aria-expanded={false}
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#example-header-2"
                        data-toggle="collapse"
                        id="example-header-2"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <UncontrolledCollapse
                    id="example-header-2"
                    navbar
                    toggler="#example-header-2"
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <a>
                                    Argon <span>PRO</span>
                                </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-controls="navigation-index"
                                    aria-expanded={false}
                                    aria-label="Toggle navigation"
                                    className="navbar-toggler"
                                    data-target="#example-header-2"
                                    data-toggle="collapse"
                                    id="example-header-2"
                                    type="button"
                                >
                                    <span></span>
                                    <span></span>
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="mx-auto" navbar>
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
                        <NavItem>
                            <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("torneo")}>
                                Crear Torneo
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#5e72e4" }} onClick={() => routeChange("soporte")} >

                                Soporte

                            </NavLink>
                        </NavItem>
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
                </UncontrolledCollapse>
            </Container>
        </Navbar>


    );
}

export default Navbar2;