import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from 'react-router-dom';


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

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import PricingCard3 from "./cards/PricingCard3";
import Blogs7 from "./blogs/Blogs7";


function TorneosDetalles() {

    const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
    const {idtorneo } = useParams();
    const [equipos, setEquipos] = React.useState([])
    const [torneo, setTorneo] = useState([])
    const [error, setError] = useState()
    const getEquipos = async () => {
        let arrayequipos = []
        await getDocs(collection(db, "torneos", idtorneo, "equipos")).then(data => {
            data.forEach(element => {
                const idEquipo = {
                    id: element.id
                }
                let equipo = Object.assign(element.data(), idEquipo)
                arrayequipos.push(equipo)
            })
            setEquipos([...arrayequipos])
        })

    }
    const getTorneo = async () => {
        const docRef = doc(db, "torneos", idtorneo);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setTorneo(docSnap.data());    
          } else {
            setError("No se pudo encontrar ningun torneo")
          }
    }

    useEffect(async() => {
         getEquipos();
         getTorneo();
         const contrato = await contract.get_teams_bytournament({index:torneo.index
            }
        );
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4 className="mb-4 mt-5 text-center" style={{color:"white"}}>Detalle Torneos {torneo.index}</h4>
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
                                <TabContent id="myTabContent" activeTab={hTabsIcons} style={{ overflowX: "auto", overflowY: "hidden" }}>
                                    <TabPane tabId="hTabsIcons-1" role="tabpanel">
                                        <Blogs7 torneo={torneo}/>

                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-2" role="tabpanel">


                                        <Row>
                                            {equipos.map(equipo => {
                                                return (
                                                    <Col xs="4" > <PricingCard3 equipo={equipo.team}></PricingCard3> </Col>)
                                            })}

                                        </Row>


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

export default TorneosDetalles;