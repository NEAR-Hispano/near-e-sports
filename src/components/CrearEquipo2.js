import React, { useEffect, useState } from "react";
import {
  Alert,
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

import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { useParams } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { ONE_NEAR_IN_YOCTO, toFixed } from '../utils';



export default function CrearEquipo2(props) {

  const [name, setName] = useState("");
  const [user1, setuser1] = useState("");
  const [user2, setuser2] = useState("");
  const [user3, setuser3] = useState("");
  const [user4, setuser4] = useState("");
  const [user5, setuser5] = useState("");



  const [torneo, setTorneo] = useState("")
  const { idtorneo } = useParams();
  
  const [showAlert, setShowAlert] = useState(false);
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

    
    console.log(name)

    let team = {
      name: name,
      user1: user1,
      user2: user2,
      user3: user3,
      user4: user4,
      user5: user5,
    }

    const docRef = await addDoc(collection(db, "torneos", idtorneo, "equipos"), {
      team: team
    });

    console.log(docRef);

    await window.contract.nft_mint(
      {
        token_id: "Prueba para el dir",
        metadata: {
          title: "Ticket de prueba para el dir",
          description: "Prueba para el dir",
          media:
            "https://img.freepik.com/foto-gratis/dos-entradas-vista-frontal-azul-aislado-blanco_1101-3055.jpg?w=2000",
        },
        receiver_id: window.accountId,
      },
      '300000000000000',
      '465000000000000000000000'
    )

    await window.contract.join_tournament({
      name: name,
      user1: user1,
      user2: user2,
      user3: user3,
      user4: user4,
      user5: user5,
      index: torneo.index

    },'300000000000000',
    '465000000000000000000000')
    setShowAlert(true);

    

    
  }

  



  return (
    <>
      <div
        className="contactus-1 mt-5"
      >
        {showAlert? 
        <Alert color="success" className="alert__message animated__fadeInRight animated__fadeOut">
          <strong>Equipo {name} Inscrito correctamente</strong> 
        </Alert>:<></>}
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
                          <InputGroupText >
                            <i className="ni ni-trophy"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input value={name} onChange={(e) => setName(e.target.value)}
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
                              <InputGroupText >
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input value={user1} onChange={(e) => setuser1(e.target.value)}
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
                              <InputGroupText >
                                <i className="ni ni-collection"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input value={user2} onChange={(e) => setuser2(e.target.value)}
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
                              <InputGroupText >
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input value={user3} onChange={(e) => setuser3(e.target.value)}
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
                              <InputGroupText >
                                <i className="ni ni-collection"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input value={user4} onChange={(e) => setuser4(e.target.value)}
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
                              <InputGroupText>
                                <i className="ni ni-circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input value={user5} onChange={(e) => setuser5(e.target.value)}
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