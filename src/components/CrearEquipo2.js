import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Badge
} from "reactstrap";

import { collection, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { useParams } from 'react-router-dom';



export default function CrearEquipo2(props) {

    const [name, setName] = useState("");
    const [user1, setuser1] = useState("");
    const [user2, setuser2] = useState("");
    const [user3, setuser3] = useState("");
    const [user4, setuser4] = useState("");
    const [user5, setuser5] = useState("");

    const [torneo, setTorneo] = useState("")
    const { idtorneo } = useParams();
    console.log(idtorneo);
    const getTorneo = async () => {
        const docRef = doc(db, "torneos", idtorneo);
        await getDoc(docRef).then(documento => {
            setTorneo(documento.data())
            console.log(documento.data())
            })
    }

     useEffect(() => {
        getTorneo();
      }, [])


    const Crear_Team = async () => {
        /*
        await window.contract.new({
          owner_id : window.accountId,
          vault_id: window.accountId
    
        })
    
        console.log(window.accountId)
        */

        await window.contract.join_tournament({
            name: name,
            user1: user1,
            user2: user2,
            user3: user3,
            user4: user4,
            user5: user5,
            index: torneo.index

        })
        alert("¡Se ha inscripto en el torneo!")
        console.log(window.accountId)
    }



    return (
        <>
        <div
          className="contactus-1 mt-5"
        >
          <Container>
          
            <Row>
            
              <Col className="ml-auto mr-auto" lg="5" md="7">
                <Card className="card-contact card-raised">
                  <Form id="contact-form-1" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Inscribir Equipo </CardTitle>
                    </CardHeader>
                    <CardBody>
                    <FormGroup >
                        <label>Nombre Del equipo</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText value={name} onChange={(e) => setName(e.target.value)}>
                              <i className="ni ni-trophy"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nombre del equipo..."
                            type="text"
                          ></Input>
                        </InputGroup>
                      </FormGroup>  
                      <Row>
                        <Col md="6">
                          <FormGroup >
                            <label>Integrante 1</label>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText value={user1} onChange={(e) => setuser1(e.target.value)}>
                                  <i className="ni ni-circle-08"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Nombre de usuario..."
                                placeholder="Nombre de usuario..."
                                type="text"

                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup >
                            <label>integrante 2</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText value={user2} onChange={(e) => setuser2(e.target.value)}>
                                  <i className="ni ni-collection"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Nombre de usuario..."
                                placeholder="Nombre de usuario..."
                                type="text"

                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6">
                          <FormGroup >
                            <label>Integrante 3</label>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText value={user3} onChange={(e) => setuser3(e.target.value)}>
                                  <i className="ni ni-circle-08"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Nombre de usuario..."
                                placeholder="Nombre de usuario..."
                                type="text"

                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup >
                            <label>integrante 4</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText value={user4} onChange={(e) => setuser4(e.target.value)}>
                                  <i className="ni ni-collection"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Nombre de usuario..."
                                placeholder="Nombre de usuario..."
                                type="text"

                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="6">
                          <FormGroup >
                            <label>Integrante 5</label>
                            <InputGroup className="mb-4">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText value={user5} onChange={(e) => setuser5(e.target.value)}>
                                  <i className="ni ni-circle-08"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                aria-label="Nombre de usuario..."
                                placeholder="Nombre de usuario..."
                                type="text"

                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          
                        </Col>
                      </Row>
                      
                      <Row>
                        <Col md="6">
                          <div className="custom-control custom-checkbox mt-2">
                            <p>Costo de inscripcion: {torneo.cost} Nears</p>
                          </div> 
                        </Col>
                        <Col md="6">
                          <Button
                            className="pull-right"
                            color="warning"
                            onClick={Crear_Team}
                          >
                            Inscribir
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
}