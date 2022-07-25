import React from "react";

// reactstrap components
import { Button, ButtonGroup, Media, Container, Row, Col } from "reactstrap";

function Blogs7(props) {
    const {torneo} = props;
  return (
    <>
      <section className="blogs-7">
        <Container>
          <Row>
            <Col className="mx-auto" lg="10">
            <h3 className="display-3 mb-5 text-center">{torneo.nombre}</h3>
              <div className="media-area">
                <div className="media-header">
                  <Row>
                    <Col className="d-flex justify-content-start" md="6">
                      
                      <div className="text">
                        <span className="name">Creador: {torneo.creador}</span>
                        <div className="meta">{torneo.fechaInicio}</div>
                      </div>
                    </Col>
                  </Row>
                  <div className="image">
                    <img
                      alt="..."
                      src={torneo.imgUrl}
                    ></img>
                  </div>
                  <p className="description">
                    {torneo.descripcion}{" "}
                  </p>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs7;
