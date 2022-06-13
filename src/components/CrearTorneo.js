import React from "react";
import{ useEffect, useState } from "react";


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
    const [NombreFocus, setNombreFocus] = React.useState("");
    const [PlataformaFocus, setPlataformaFocus] = React.useState("");
    const [CostoFocus, setCostoFocus] = React.useState("");
    const [FechaFocus, setFehaFocus] = React.useState("");
    
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [plataform,setPlataform] = useState("");
    const [dateinicio,setDateinicio] = useState("");
    const [cost,setCost] = useState("");
    const [file,setFile] = useState();
    const [storageRef,setStorageRef] = useState();
    const [id,setId] = useState("");
    const [image, setImage] = useState();
    const Array = [];

    const Crear_Torneo = async()=> {
        /*
        await window.contract.new({
          owner_id : window.accountId,
          vault_id: window.accountId
    
        })
    
        console.log(window.accountId)
        */
       if(storageRef === undefined){
         return alert("photo is missing");
       }
        try {
    
          const result =  await window.contract.create_tournament({ 
            name:name,
            description:description,
            date:dateinicio,
            winner:plataform,
            cost:cost,
            teams: Array,
          })
    
          console.log("resultado",result);
    
          const docRef = await addDoc(collection(db, "torneos"), {
            nombre: name,
            descripcion: description,
            plataforma: plataform,
            imgUrl: image,
            fechaInicio: dateinicio,
            cost: cost,
            winner: "Sin ganador aun",
            index: result.index
    
          });
    
          console.log("Document written with ID: ", docRef.id);
          setId(docRef.id)
    
        } catch (e) {
          //console.error("Error adding document: ", e);
    
          alert(e)
    
        }
    }
    

    return (
        <>
            <div className="contactus-4">

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
                                            method="post"
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
                                                                <InputGroupAddon addonType="prepend" value={name} onChange={(e)=>setName(e.target.value)}>
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
                                                        <FormGroup className={CostoFocus}>
                                                            <label>Costo por equipo</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" value={cost} onChange={(e)=>setCost(e.target.value)} type="number" placeholder="Cost">
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
                                                        <FormGroup className={PlataformaFocus}>
                                                            <label>Plataforma</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" value={plataform} onChange={(e)=>setPlataform(e.target.value)}>
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
                                                        <FormGroup className={FechaFocus}>
                                                            <label>Fecha inicio</label>
                                                            <InputGroup>
                                                                <InputGroupAddon addonType="prepend" value={dateinicio} onChange={(e)=>setDateinicio(e.target.value)}>
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
                                                        value={description} onChange={(e)=>setDescription(e.target.value)}
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
                                                            onClick={Crear_Torneo}
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
                                                                <Badge className="badge-circle mr-3" color="danger">
                                                                    <i className="ni ni-fat-delete "></i>
                                                                </Badge>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-1 text-danger ">Imagen </h6>
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
