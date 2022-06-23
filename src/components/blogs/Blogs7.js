import React from "react";

// reactstrap components
import { Button, ButtonGroup, Media, Container, Row, Col } from "reactstrap";

function Blogs7(props) {
    console.log("propiedades", props)
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
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="shadow"
                          object
                          src={require("/assets/img/faces/team-2.jpg")}
                        ></Media>
                      </div>
                      <div className="text">
                        <span className="name">Nombre creador del torneo</span>
                        <div className="meta">fecha de creacion del torneo</div>
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
                  <p className="hashtag">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      politicas
                    </a>{" "}
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      must read
                    </a>{" "}
                  </p>
                  <div className="actions mb-5">
                    <Button color="info" outline size="sm">
                      <i className="ni ni-like-2 pr-1"></i>
                      Like
                    </Button>
                  </div>
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
