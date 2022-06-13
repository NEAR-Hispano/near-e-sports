import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle, Badge } from "reactstrap";


// Core Components

function ProfileCard3(props) {
    let { torneo } = props
    console.log(torneo)
    return (
        <>
            <Card className="card-profile" data-image="img-raised">
                <div className="card-header-image" style={{}}>
                        <img
                            alt="..."
                          
                            src={torneo.imgUrl}
                            className="img" style={{ 
                                objectFit: "fill",
                                width: "100%" ,
                                height: "100%",
                                maxHeight:"231px" }} 
                            
                        ></img >

                </div>
                <CardBody>
                    <h6 className="card-category text-info text-center pt-4">
                        {torneo.nombre}
                    </h6>
                    <div className="table-responsive">
                        <ul className="list-unstyled">
                            <li className="py-1">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge className="badge-circle mr-3" color="info">
                                            <i className="ni ni-atom"></i>
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Costo: {torneo.cost}</h6>
                                    </div>
                                </div>
                            </li>
                            <li className="py-1">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge className="badge-circle mr-3" color="success">
                                            <i className="ni ni-user-run"></i>
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Fecha inicio: {torneo.fechaInicio}</h6>
                                    </div>
                                </div>
                            </li>
                            <li className="py-1">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge className="badge-circle mr-3" color="danger">
                                            <i className="ni ni-chart-bar-32"></i>
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-1">Plataforma: {torneo.plataforma}</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </CardBody>
                <CardFooter className="text-center">

                    <Link to={"/crearEquipos/" + torneo.id}>

                        <Button color="warning" type="button" style={{marginRight:"3vw"}}>
                            Inscribir
                        </Button>

                    </Link>

                     <Link to={"/Example"}>

                        <Button color="warning" type="button">
                            ver
                        </Button>

                    </Link>



                </CardFooter>
            </Card>
        </>
    );
}

export default ProfileCard3;
