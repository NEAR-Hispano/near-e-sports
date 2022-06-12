import React from "react";


// reactstrap components
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

import Upload from "./upload/Upload.js";

// Core Components


function CrearTorneo() {
    const [firstNameFocus, setFirstNameFocus] = React.useState("");
    const [emailFocus, setEmailFocus] = React.useState("");
    /*
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [plataform,setPlataform] = useState("");
    const [dateinicio,setDateinicio] = useState("");
    const [cost,setCost] = useState("");
    const [file,setFile] = useState();
    const [storageRef,setStorageRef] = useState();
    const [id,setId] = useState("");
    const [image, setImage] = useState(LOL_Logo);
    const Array = [];
    */

    return (
        <>
            <div className="contactus-4">

                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className="text-white text-center mb-3" style={{ marginTop: "5vh" }}>Titulo 1</h1>
                           
                        </Col>
                        <Col className="m-auto" md="12">
                            <Card className="card-contact card-raised">
                                <Row>
                                    <Col className="pr-md-0" lg="8" md="7">
                                        <Form
                                            className="p-3"
                                            id="contact-form-3"
                                            method="post"
                                            role="form"
                                        >
                                            <CardHeader>
                                                <CardTitle tag="h4">Crear torneo</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup className={firstNameFocus}>
                                                            <label>Nombre torneo</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-circle-08"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Nombre torneo."
                                                                    placeholder="Nombre torneo"
                                                                    type="text"
                                                                    onFocus={() => setFirstNameFocus("focused")}
                                                                    onBlur={() => setFirstNameFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup className={emailFocus}>
                                                            <label>Costo por equipo</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-collection"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Costo"
                                                                    placeholder="Costo"
                                                                    type="text"
                                                                    onFocus={() => setEmailFocus("focused")}
                                                                    onBlur={() => setEmailFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup className={firstNameFocus}>
                                                            <label>Plataforma</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-circle-08"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Plataforma"
                                                                    placeholder="Plataforma"
                                                                    type="text"
                                                                    onFocus={() => setFirstNameFocus("focused")}
                                                                    onBlur={() => setFirstNameFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup className={emailFocus}>
                                                            <label>Fecha inicio</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend">
                                                                    <InputGroupText>
                                                                        <i className="ni ni-collection"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="FechaInicio"
                                                                    placeholder="Last Name..."
                                                                    type="date"
                                                                    onFocus={() => setEmailFocus("focused")}
                                                                    onBlur={() => setEmailFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup>
                                                    <label>Descripcion</label>
                                                    <Input
                                                        id="contact-us-message-4"
                                                        name="message"
                                                        rows="6"
                                                        type="textarea"
                                                    ></Input>
                                                </FormGroup>
                                                <Row>
                                                    <Col md="6">
                                                        <div className="custom-control custom-checkbox mb-3">
                                                            <input
                                                                className="custom-control-input"
                                                                id="customCheck2"
                                                                type="checkbox"
                                                            ></input>

                                                        </div>
                                                    </Col>
                                                    <Col md="12">
                                                        <Button
                                                            className="pull-right"
                                                            color="warning"
                                                            type="submit"
                                                        >
                                                            Crear
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Form>
                                    </Col>
                                    <Col className="pl-md-0" lg="4" md="5">
                                        <div className="info text-left bg-default">
                                            <CardTitle className="text-white text-center" tag="h5" >
                                                Title 2
                                            </CardTitle>
                                            <Upload addBtnColor='default'></Upload>
                                            <div className="table-responsive">
                                                <ul className="list-unstyled">
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="danger">
                                                                    <i className="ni ni-fat-delete"></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-danger">Nombre </h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="success">
                                                                    <i className="ni ni-check-bold"></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-success ">Costo</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="success">
                                                                    <i className="ni ni-check-bold "></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-success ">Fecha </h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="success">
                                                                    <i className="ni ni-check-bold "></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-success ">Plataforma </h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="success">
                                                                    <i className="ni ni-check-bold "></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-success ">Imagen </h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="py-1">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <Badge className="badge-circle mr-3" color="success">
                                                                    <i className="ni ni-check-bold "></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-success ">Descripcion </h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default CrearTorneo;
