import React from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import { Container, Row, Col, Button,Form,Card } from 'react-bootstrap';
import LOL_Logo from '../assets/LOL_Logo.webp';

export default function Explorar() {
    return (
      <div>

        <Container  className="text-blanco mt-5">
          <Row md={12} lg={12} xl={12} className="home__container">
            <Card bg="dark" border="dark" > 
            <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
              <h2 style={{textAlign: 'center'}}>Crear torneo</h2>
            </Row>
            <Row md={12} lg={12} xl={12} > 
              <Col md={6} lg={6} xl={6}> 
                <Form>
                  <Form.Group className="mb-5 mt-1" controlId="formBasicEmail">
                  <Row className='mb-5 mt-5' >
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label> Nombre del torneo</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control type="text" placeholder="Ingresa El nombre del torneo" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Descripcion</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control type="text" placeholder="Descripcion" />
                  </Col > 
                  </Row> 
                  </Form.Group> 

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Plataforma</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control type="text" placeholder="Plataforma" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Fecha inicio</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control type="date" placeholder="FechaInicio" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Fecha Fin</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control type="date" placeholder="FechaFin" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                </Form> 
              </Col>

              <Col md={6} lg={6} xl={6}>
                <Row style={{textAlign: 'center'}}>
                  <h3>Logo del torneo</h3>
                </Row>
                <Row >
                <Col md={3} lg={3} xl={3}> </Col>
                <Col md={6} lg={6} xl={6}>
                <Card className="mb-5 mt-5" >
                    <Card.Body>
                    <img src={LOL_Logo} alt="LOL_Logo"/>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={2} lg={2} xl={2}> </Col>
                </Row>
                <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
                  <Col md={4} lg={4} xl={4}></Col> 
                  <Col md={4} lg={4} xl={4}> 
                      <div className="d-grid gap-2">
                        <Button variant="danger" size="md">
                          Subir imagen
                        </Button>
                      </div>
                    </Col>
                  <Col md={4} lg={4} xl={4}></Col>    
              </Row> 

              </Col>

            </Row>
            <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
             <Col md={4} lg={4} xl={4}></Col> 
             <Col md={4} lg={4} xl={4}> 
                <div className="d-grid gap-2">
                  <Button variant="danger" size="md">
                    Crear Torneo
                  </Button>
                </div>
              </Col>
             <Col md={4} lg={4} xl={4}></Col>    
            </Row>  

            </Card>
          </Row> 
        </Container>
      </div>
    );
}