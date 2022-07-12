

import control_image from '../assets/control_image.png'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import React, { useEffect, useState } from "react";

import { Button, ButtonGroup, Media, Container, Row, Col } from "reactstrap";
import { array } from 'prop-types';


export default function Perfil() {
    const [torneosCreados, setTorneosCreados] = useState([]);
    const [torneosInscriptos, setTorneosInscriptos] = useState([]);

    useEffect(() => {
        getTorneos();
    }, [])


    const getTorneos = async () => {
        let arrayTorneos = []
        await getDocs(collection(db, "torneos")).then(data => {
            data.forEach(async element => {
                /*arrayTorneos.push(element.data())*/
                const idTorneo = {
                    id: element.id
                }
                //
                let torneo = Object.assign(element.data(), idTorneo)
                // 

                console.log(torneo)

                if (torneo.creador == window.accountId) {

                    arrayTorneos.push(torneo)
                }
                
            })
            setTorneosCreados(arrayTorneos)

        })
    }


    return (
        <div>
            <section className="blogs-7" >
                <Container className="mt-5">
                    <Row>
                        <Col className="mx-auto" lg="10" style={{ backgroundColor: "White" }}>
                            <h3 className="display-3 mb-5 text-center mt-3">Mis torneos</h3>
                            <Row>
                                <Col className="d-flex justify-content-start" >

                                    <div className="text">
                                        <span className="name">Torneos inscriptos (2) :</span>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start" >

                                    <div className="text">
                                        <span className="name">Torneos Creados (2) :</span>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {torneosCreados.map(torneo =>
                                    <Row>
                                        <Col>
                                        <img src={torneo.imgUrl} style={{maxWidth:'200px',height:'auto'}}>
                                        </img>
                                        </Col>
                                        <h1>torneo.nombre</h1>
                                        <Col>
                                        </Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                )}

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}