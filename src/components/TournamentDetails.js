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

    const EquiposTest = [

        {
            idteam: 1,
            name: "El One",
            owner: "one,test"
        },
        {
            idteam: 2,
            name: "El Two",
            owner: "two,test"
        },
        {
            idteam: 3,
            name: "El Tri",
            owner: "Tri,test"
        },
        {
            idteam: 4,
            name: "El For",
            owner: "for,test"
        },{
            idteam: 5,
            name: "El Five",
            owner: "five,test"
        },
        {
            idteam: 6,
            name: "El Six",
            owner: "Six,test"
        },
        {
            idteam: 7,
            name: "El Seven",
            owner: "Seven,test"
        },
        {
            idteam: 8,
            name: "El Seven",
            owner: "Seven,test"
        },
        {
            idteam: 9,
            name: "El Seven",
            owner: "Seven,test"
        }

    ]

    const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
    const { idtorneo } = useParams();
    const [equipos, setEquipos] = React.useState([])
    const [torneo, setTorneo] = useState({})
    const [error, setError] = useState()
    const [roundsBracket, setRoundsBracket] = useState([])
    const [estatusRounds, setEstatusRounds] = useState([])
    const [ganador, setGanador] = useState("")

    const [booleanBrackets, setBooleanBrackets] = useState(false)
    const changeBooleanBracket = () =>{
        setBooleanBrackets(true)
    }

    /* const getEquipos = async () => {
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
     */
    const getTorneo = async () => {
        const docRef = doc(db, "torneos", idtorneo);
        const docSnap = await getDoc(docRef).then(async objeto => {
            let arrayequipos = []
            const data = objeto.data();
            //console.log(data);
            const contrato = await contract.get_teams_bytournament({
                index: data.index
            }
            );
            //console.log(contrato);
            arrayequipos = contrato.teams;
            console.log(arrayequipos)
            setEquipos([...arrayequipos])
            setTorneo(data);
        })

    }
    const getBracket = async () => {
        const docRef = doc(db, "brackets", idtorneo)
        const docData = await getDoc(docRef).then(objeto => {
            let dataCompleta = objeto.data()
            let data = dataCompleta.data
            let estatusRondas = dataCompleta.estatus
            let ganador = dataCompleta.ganador
            console.log("Desde bracket:")
            console.log(data)
            console.log(estatusRondas)
            console.log(ganador)
            setRoundsBracket(data)
            setEstatusRounds(estatusRondas)
            setGanador(ganador)
            changeBooleanBracket()
        })
    }

    const entregarPremios = () => {
        console.log("Entregando premios boleta")
    }


    useEffect(() => {
        getBracket();
        getTorneo();
        // getEquipos();
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4 className="mb-4 mt-5 text-center" style={{ color: "white" }}>Detalle Torneos</h4>
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
                                
                            </Nav>
                        </div>
                        <Card className="shadow">
                            <CardBody>
                                <TabContent id="myTabContent" activeTab={hTabsIcons} style={{ overflowX: "auto", overflowY: "hidden" }}>
                                    <TabPane tabId="hTabsIcons-1" role="tabpanel">
                                        <Blogs7 torneo={torneo} />

                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-2" role="tabpanel">


                                        <Row>
                                            {equipos.map(equipo => {
                                                return (
                                                    <Col xs="4" > <PricingCard3 equipo={equipo}></PricingCard3> </Col>)
                                            })}

                                        </Row>


                                    </TabPane>
                                    <TabPane tabId="hTabsIcons-3" role="tabpanel">

                                        <RenderBracket
                                            key={booleanBrackets}
                                            idTorneo={idtorneo}
                                            torneo = {torneo}
                                            roundsBracket={roundsBracket}
                                            ganador={ganador}
                                            estatusRounds={estatusRounds}
                                            equipos={equipos}
                                            entregarPremios={entregarPremios}
                                            ></RenderBracket>

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