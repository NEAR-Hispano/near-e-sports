

import control_image from '../assets/control_image.png'

import { collection, getDocs,getDoc, QuerySnapshot } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import React, { useEffect, useState } from "react";

import { Button, ButtonGroup, Media, Container, Row, Col,butto } from "reactstrap";
import { array } from 'prop-types';
import { Link } from "react-router-dom";

import { collectionGroup, query, where } from "firebase/firestore";
import { async } from 'regenerator-runtime';




export default function Perfil() {
    const [torneosCreados, setTorneosCreados] = useState([]);
    const [torneosInscriptos, setTorneosInscriptos] = useState([]);
    

    useEffect(() => {
        
        getTorneos();
        getEquipos();
    
          
    }, [])

    
    const getEquipos = async () => {

        

        let arrayequipos = []
        let arrayTorneos = []
        await getDocs(collection(db, "torneos")).then(async QuerySnapshot => {
            for (let element of QuerySnapshot.docs){
                const idTorneo = {
                    id: element.id
                }
                //
                let torneo = Object.assign(element.data(), idTorneo)
                //
                

                const contrato = await contract.get_teams_bytournament({
                    index: torneo.index
                })

            
                arrayequipos = contrato.teams;
            
                arrayequipos.map(equipo =>{
                    if (torneo.index == equipo.idteam) {

                        if(equipo.owner == window.accountId) {
                            arrayTorneos.push(torneo);
                        }
                        
                        
                    }
                })
                

                console.log(arrayTorneos);
                
            }
            
            setTorneosInscriptos(arrayTorneos)
        })
        
                
    }

    const getTorneos = async () => {
        let arrayTorneos = []
       
        console.log("listo");
        await getDocs(collection(db, "torneos")).then(data => {
            data.forEach(async element => {
                /*arrayTorneos.push(element.data())*/
                const idTorneo = {
                    id: element.id
                }
                //
                let torneo = Object.assign(element.data(), idTorneo)
                // 


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
                        <Col className="mx-auto border rounded" xs="10" style={{ backgroundColor: "White" }}>
                            <h3 className="display-3 mb-5 text-center mt-3">Mis torneos</h3>
                            <Row>
                                <Col className="d-flex justify-content-start" >

                                    <div className="text">
                                        <span className="name">Torneos Inscritos ({torneosInscriptos.length}) :</span>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            {torneosInscriptos.map(item =>
                                    <Row className="mt-5 mb-5 mx-auto ">
                                        <Col className="d-flex align-items-center justify-content-center" >
                                            <img src={item.imgUrl} style={{ maxWidth: '200px', height: 'auto' }}>
                                            </img>
                                        </Col>
                                        <Col className="text-center">
                                            <h5 style={{ color: "#ffc107" }}>{item.nombre}</h5>
                                            <h6>{item.fechaInicio}</h6>
                                            <h6>{item.winner}</h6>
                                        </Col>

    
                                        <Col className="d-flex align-items-center justify-content-center">
                                            <Link to={"/detalles/" + item.id}>

                                                <Button color="warning" type="button">
                                                    Ver
                                                </Button>

                                            </Link>
                                        </Col>
                                    </Row>
                                )}

                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-start" >

                                    <div className="text">
                                        <span className="name">Torneos Creados ({torneosCreados.length}) :</span>

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {torneosCreados.map(torneo =>
                                    <Row className="mt-5 mb-5 mx-auto ">
                                        <Col className="d-flex align-items-center justify-content-center" >
                                            <img src={torneo.imgUrl} style={{ maxWidth: '200px', height: 'auto' }}>
                                            </img>
                                        </Col>
                                        <Col className="text-center">
                                            <h5 style={{ color: "#ffc107" }}>{torneo.nombre}</h5>
                                            <h6>{torneo.fechaInicio}</h6>
                                            <h6>{torneo.winner}</h6>
                                        </Col>

                                        <Col className="d-flex align-items-center justify-content-center">
                                            <Link to={"/detalles/" + torneo.id}>

                                                <Button color="warning" type="button">
                                                    Ver
                                                </Button>

                                            </Link>
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