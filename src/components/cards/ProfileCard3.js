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
                <div className="card-header-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            className="img"
                            src={torneo.imgUrl}
                            
                        ></img >
                    </a>

                </div>
                <CardBody>
                    <h6 className="card-category text-info text-center">
                        {torneo.nombre}
                    </h6>
                    <p className="card-description">
                        {torneo.descripcion}
                    </p>

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

                        <Button color="warning" type="button">
                            Inscribir
                        </Button>

                    </Link>



                </CardFooter>
            </Card>
        </>
    );
}

export default ProfileCard3;
