import React from "react";
import { useEffect, useState } from "react";

import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'


// reactstrap components
import {
    Button,
    Card,
    Alert,
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
    const [NombreFocus, setNombreFocus] = useState("");
    const [PlataformaFocus, setPlataformaFocus] = useState("");
    const [CostoFocus, setCostoFocus] = useState("");
    const [FechaFocus, setFechaFocus] = useState("");
    const [descripcionFocus, setDescripcionFocus] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showErorr, setShowError] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [errorText, setErrorText] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [plataform, setPlataform] = useState("");
    const [dateinicio, setDateinicio] = useState("");
    const [cost, setCost] = useState("");
    const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
    const [id, setId] = useState("");
    const [image, setImage] = useState();
    const Array = [];

    

    const uploadPhoto = (uploadUrl) => {
        setImage(uploadUrl);
        setIsPhotoUploaded(true);
    }
    const removePhoto = () => {
        setIsPhotoUploaded(false)
    }
    const Crear_Torneo = async () => {

        if (!isPhotoUploaded) {
            setErrorText("Falta foto")
            setShowError(true)
        } else {
            
            setAlertText("Creando torneo")
            setShowAlert(true)
            try {

                const result = await contract.create_tournament({
                    name: name,
                    description: description,
                    date: dateinicio,
                    winner: plataform,
                    cost: cost,
                    teams: Array,
                })

                const docRef = await addDoc(collection(db, "torneos"), {
                    nombre: name,
                    descripcion: description,
                    plataforma: plataform,
                    imgUrl: image,
                    fechaInicio: dateinicio,
                    cost: cost,
                    winner: "Sin ganador aun",
                    index: result.index,
                    creador: window.accountId,
                    estado:"Inscribir",

                });
                setId(docRef.id)
                setShowAlert(true);

            } catch (e) {
                setErrorText("Hubo un error inesperado")
                setShowError(true)
            }
        }
       

    }
    return (
        <>
            <div className="contactus-4">

                {showAlert ?
                    <Alert color="success" className="alert__message animated__fadeInRight animated__fadeOut">
                        <strong>El torneo fue creado satisfactoriamente </strong>
                    </Alert> : <></>}

                {showErorr ?
                    <Alert color="danger" className="alert__message animated__fadeInRight animated__fadeOut">
                        <strong>Hubo un error: el torneo no pudo haber sido creado </strong>
                    </Alert> : <></>}
                
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className="text-white text-center mb-3" style={{ marginTop: "5vh" }}></h1>

                        </Col>
                        <Col className="m-auto" md="12">
                            <Card className="card-contact card-raised">
                                <Row>
                                    <Col className="pr-md-0" lg="8" md="7">
                                        <Form
                                            className="p-3"
                                            id="contact-form-3"
                                            role="form"
                                        >
                                            <CardHeader>
                                                <CardTitle tag="h4">Crear torneo</CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup className={NombreFocus}>
                                                            <label>Nombre torneo</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" >
                                                                    <InputGroupText>
                                                                        <i className="ni ni-circle-08"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Nombre torneo."
                                                                    placeholder="Nombre torneo"
                                                                    type="text"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    onFocus={() => setNombreFocus("focused")}
                                                                    onBlur={() => setNombreFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup className={CostoFocus}>
                                                            <label>Costo por equipo</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" >
                                                                    <InputGroupText>
                                                                        <i className="ni ni-collection"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Costo"
                                                                    placeholder="Costo"
                                                                    value={cost}
                                                                    onChange={(e) => setCost(e.target.value)}
                                                                    type="number"
                                                                    onFocus={() => setCostoFocus("focused")}
                                                                    onBlur={() => setCostoFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup className={PlataformaFocus}>
                                                            <label>Plataforma</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" >
                                                                    <InputGroupText>
                                                                        <i className="ni ni-circle-08"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="Plataforma"
                                                                    placeholder="Plataforma"
                                                                    type="text"
                                                                    value={plataform}
                                                                    onChange={(e) => setPlataform(e.target.value)}
                                                                    onFocus={() => setPlataformaFocus("focused")}
                                                                    onBlur={() => setPlataformaFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup className={FechaFocus}>
                                                            <label>Fecha inicio</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" >
                                                                    <InputGroupText>
                                                                        <i className="ni ni-collection"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    aria-label="FechaInicio"
                                                                    placeholder="Last Name..."
                                                                    type="date"
                                                                    value={dateinicio}
                                                                    onChange={(e) => setDateinicio(e.target.value)}
                                                                    onFocus={() => setFechaFocus("focused")}
                                                                    onBlur={() => setFechaFocus("")}
                                                                ></Input>
                                                            </InputGroup>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup className={descripcionFocus}>
                                                    <label>Descripcion</label>
                                                    <Input
                                                        id="contact-us-message-4"
                                                        name="message"
                                                        rows="6"
                                                        type="textarea"
                                                        value={description} onChange={(e) => setDescription(e.target.value)}
                                                        onFocus={() => setDescripcionFocus("focused")}
                                                        onBlur={() => setDescripcionFocus("")}
                                                    ></Input>
                                                </FormGroup>
                                                <Row>
                                                    <Col md="12">
                                                        <Button
                                                            className="pull-right"
                                                            color="warning"

                                                            onClick={() => Crear_Torneo()}
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
                                            
                                            <Upload addBtnColor='default' uploadPhoto={uploadPhoto} removePhoto={removePhoto}></Upload>
                                            <div className="table-responsive">
                                                <ul className="list-unstyled">
                                                    {name.length > 0 ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Nombre</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
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
                                                        </li>}
                                                    {cost.length > 0 ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Costo</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="danger">
                                                                        <i className="ni ni-fat-delete"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-danger">Costo </h6>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    {dateinicio.length > 0 ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Fecha</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="danger">
                                                                        <i className="ni ni-fat-delete"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-danger">Fecha </h6>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    {plataform.length > 0 ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Plataforma</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="danger">
                                                                        <i className="ni ni-fat-delete"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-danger">Plataforma </h6>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    {isPhotoUploaded ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Imagen</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="danger">
                                                                        <i className="ni ni-fat-delete"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-danger">Imagen </h6>
                                                                </div>
                                                            </div>
                                                        </li>}
                                                    {description.length > 0 ?
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="success">
                                                                        <i className="ni ni-check-bold"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-success">Descripcion</h6>
                                                                </div>
                                                            </div>
                                                        </li> :
                                                        <li className="py-1">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <Badge className="badge-circle mr-3" color="danger">
                                                                        <i className="ni ni-fat-delete"></i>
                                                                    </Badge>
                                                                </div>
                                                                <div>
                                                                    <h6 className="mb-1 text-danger">Descripcion </h6>
                                                                </div>
                                                            </div>
                                                        </li>}
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
