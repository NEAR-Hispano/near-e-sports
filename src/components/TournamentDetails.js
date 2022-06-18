import React from "react";

import { Container, Row, Col } from "reactstrap";


// reactstrap components
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
} from "reactstrap";


import RenderBracket from "./Brackets";


// Core Components

function Example() {
    const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4 className="mb-4 mt-5 text-center" >Detalle Torneos</h4>
                        <div className="nav-wrapper">
                            <Nav className="nav-fill flex-column flex-md-row" pills role="tablist">
                                <NavItem>
                                    <NavLink
                                        className={
                                            "mb-sm-3 mb-md-0 " +
                                            (hTabsIcons === "hTabsIcons-1" ? "active" : "")
                                        }
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setHTabsIcons("hTabsIcons-1");
                                        }}
                                    >
                                        <i className=""></i>
                                        Informacion
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={
                                            "mb-sm-3 mb-md-0 " +
                                            (hTabsIcons === "hTabsIcons-2" ? "active" : "")
                                        }
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setHTabsIcons("hTabsIcons-2");
                                        }}
                                    >
                                        <i className=""></i>
                                        Participantes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={
                                            "mb-sm-3 mb-md-0 " +
                                            (hTabsIcons === "hTabsIcons-3" ? "active" : "")
                                        }
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setHTabsIcons("hTabsIcons-3");
                                        }}
                                    >
                                        <i className=""></i>
                                        Brackets
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={
                                            "mb-sm-3 mb-md-0 " +
                                            (hTabsIcons === "hTabsIcons-4" ? "active" : "")
                                        }
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setHTabsIcons("hTabsIcons-4");
                                        }}
                                    >
                                        <i className=""></i>
                                        Estadisticas
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <Card className="shadow">
                            <CardBody>
                                <TabContent id="myTabContent" activeTab={hTabsIcons} style={{overflowX:"auto",overflowY:"hidden"}}>
                                    <TabPane tabId="hTabsIcons-1" role="tabpanel">
                                        <p className="description">
                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            Mustache cliche tempor, williamsburg carles vegan helvetica.
                                            Reprehenderit butcher retro keffiyeh dreamcatcher synth.
                                        </p>
                                        <p className="description">
                                            Raw denim you probably haven't heard of them jean shorts Austin.
                                            Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-2" role="tabpanel">
                                        <p className="description">
                                            Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                                            Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                                            cardigan american apparel, butcher voluptate nisi qui.
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-3" role="tabpanel">
                                        
                                        <RenderBracket></RenderBracket>

                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-4" role="tabpanel">
                                        <p className="description">
                                            Proximamente
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>




    );
}

export default Example;