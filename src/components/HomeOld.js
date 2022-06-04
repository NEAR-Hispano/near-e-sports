import React from "react";
import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {
    render() {

        return (
            <div>
                <NavbarComponent />
                <Container className="text-blanco">
                    <Row md={2} lg={2} xl={2}>
                        <p>
                            Row 1
                        </p>
                    </Row>
                    <Row md={8} lg={8} xl={8}>
                        <Col md={8} lg={8} xl={8}>
                            <h2 className="text-blanco">La primera plataforma blockchain</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                            </p>
                        </Col>

                        <Col md={4} lg={4} xl={4} className="text-center">
                            <h2>Prueba de texto</h2>
                            <Button variant="danger">Leer más</Button>
                        </Col>

                    </Row>
                    <Row md={2} lg={2} xl={2}>
                        <p>
                            Row 3
                        </p>
                    </Row>                    
                </Container>
            </div>
        );

    }
}
export default Home;