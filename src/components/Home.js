import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import control_image from '../assets/control_image.png';
import Footer from "./Footer";

export default function Home() {
    return (
        <div>
            <Container  className="text-blanco">
                <Row md={12} lg={12} xl={12} className="home__container">
                    <Col md={5} lg={5} xl={5}>
                        <h1 style={{marginBottom: '2vh'}}>La primera plataforma blockchain</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                        </p>
                    </Col>

                    <Col md={5} lg={5} xl={5} className="text-center home__img__container">
                        <img src={control_image} alt="control_image"/>
                        <Button variant="danger" className="btn_read_more">Leer más</Button>
                    </Col>

                </Row>
                <Row md={12} lg={12} xl={12}>
                    <Footer/>
                </Row>                    
            </Container>
        </div>
    );
}