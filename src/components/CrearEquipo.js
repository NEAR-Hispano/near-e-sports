import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button,Form,Card } from 'react-bootstrap';
import Inscribir from '../assets/Inscribir.png';

export default function CrearEquipo() {

const [name,setName] = useState("");
  const [user1,setuser1] = useState("");
  const [user2,setuser2] = useState("");
  const [user3,setuser3] = useState("");
  const [user4,setuser4] = useState("");
  const [user5,setuser5] = useState("");

  const Crear_Team = async()=> {
    /*
    await window.contract.new({
      owner_id : window.accountId,
      vault_id: window.accountId

    })

    console.log(window.accountId)
    */
 
  await window.contract.create_team({ 
    name:name,
    user1:user1,
    user2:user2,
    user3:user3,
    user4:user4,
    user5:user5,
    
  })
  alert("¡Se ha creado un nuevo torneo!")
  console.log(window.accountId)}



    return (
        <div>
            <Container  cclassName="text-blanco mt-5 mb-5">
                <Row md={12} lg={12} xl={12} className="home__container mt-5 mb-5">
                    <Card bg="dark" border="dark"  className="mt-5 mb-5"> 

                        <Row className="justify-content-md-center  mt-3 mb-3">
                            <Col xs={12} sm={3} md={3}>
                            <img src={Inscribir} alt="Inscribir"/>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center  mt-3 mb-3">
                            <Col xs={12} sm={4} md={4}>
                            <h4 style={{textAlign: 'center', color: 'white'}}>Lista del equipo</h4>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-flex-start  mb-3">
                            <Col xs={12} sm={7} md={7}>
                            <p style={{color: 'gray'}}>La lista del equipo puede ser modificada antes que comience el torneo</p>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center  mt- mb-3">
                            <Col xs={12} sm={3} md={3} className="justify-content-md-flex-end">
                            <p style={{color: 'white'}} className="Titulo-Torneo">Nombre del equipo:</p>
                            </Col>
                            <Col xs={12} sm={5} md={5}>
                            <Form>
                                <Form.Group className="mb-5 mt-1" controlId="formBasicEmail">
                                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ingresa El nombre del " />
                                    </Form.Group>
                                 </Form>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-flex-start  mb-1">
                            <Col xs={12} sm={5} md={5}>
                            <p style={{color: 'gray'}}>Integrantes</p>
                            </Col>
                        </Row>

                        <Row>

                            <Col md={6} lg={6} xl={6}> 

                                <Row className="justify-content-md-center ">
                                    <Col xs={12} sm={5} md={5} className="justify-content-md-flex-end">
                                    <p style={{color: 'white'}} className="Integrante">Integrante 1:</p>
                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                    <Form>
                                        <Form.Group className="mb-4 mt-1" controlId="formBasicEmail">
                                            <Form.Control value={user1} onChange={(e)=>setuser1(e.target.value)} type="text" placeholder="integrante 1 " />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                                

                                <Row className="justify-content-md-center  ">
                                    <Col xs={12} sm={5} md={5} className="justify-content-md-flex-end">
                                    <p style={{color: 'white'}} className="Integrante">Integrante 2:</p>
                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                    <Form>
                                        <Form.Group className="mb-4 mt-1" controlId="formBasicEmail">
                                            <Form.Control value={user2} onChange={(e)=>setuser2(e.target.value)}  type="text" placeholder="integrante 2 " />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center  ">
                                    <Col xs={12} sm={5} md={5} className="justify-content-md-flex-end">
                                    <p style={{color: 'white'}} className="Integrante">Integrante 3:</p>
                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                    <Form>
                                        <Form.Group className="mb-4 mt-1" controlId="formBasicEmail">
                                            <Form.Control value={user3} onChange={(e)=>setuser3(e.target.value)} type="text" placeholder="integrante 3 " />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center ">
                                    <Col xs={12} sm={5} md={5} className="justify-content-md-flex-end">
                                    <p style={{color: 'white'}} className="Integrante">Integrante 4:</p>
                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                    <Form>
                                        <Form.Group className="mb-4 mt-1" controlId="formBasicEmail">
                                            <Form.Control value={user4} onChange={(e)=>setuser4(e.target.value)} type="text" placeholder="integrante 4 " />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                                <Row className="justify-content-md-center  mt- mb-3">
                                    <Col xs={12} sm={5} md={5} className="justify-content-md-flex-end">
                                    <p style={{color: 'white'}} className="Integrante">Integrante 5:</p>
                                    </Col>
                                    <Col xs={12} sm={5} md={5}>
                                    <Form>
                                        <Form.Group className="mb-5 mt-1" controlId="formBasicEmail">
                                            <Form.Control value={user5} onChange={(e)=>setuser5(e.target.value)} type="text" placeholder="integrante 5 " />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>

                            </Col>

                            <Col md={6} lg={6} xl={6}> 

                            <Row className="justify-content-md-center  mt-3 mb-3">
                                <Col xs={12} sm={7} md={7}>
                                 <h4 style={{textAlign: 'center', color: 'white'}}>Costo de Inscripcion: 5 USN</h4>
                                </Col>
                            </Row>
                            

         

                           < Row className="justify-content-md-center  mt-3 mb-3">
                            <Col xs={5} sm={5} md={5} className="justify-content-md-center">
                            <Button  variant="danger" className="btn-big" size="md" onClick={Crear_Team}>Registrar Equipo</Button>
                            </Col>
                            </Row>

                            

                            </Col>

                                   

                        </Row>

                    </Card>
                </Row> 
            </Container>
        </div>
    );
}