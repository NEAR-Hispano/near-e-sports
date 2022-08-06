import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

//import img from "../../assets/img/faces/"

// Core Components
// --------------------------- PROFILE CARD 1 ---------------------------
function ProfileCardEquipo(props) {
  return (

    <div className="" md={6} lg={6} xl={6}>
      <br />
        <Card className="card-profile">
          <CardHeader>
            <div className="card-image">
              <img
                className="img rounded reajustar-img"
                src={props.img}
              ></img>
            </div>
          </CardHeader>
          <CardBody className="pt-0">
            <h4 className="display-4 mb-0">{props.nombre}</h4>
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
                      <h6 className="mb-1">{props.resultado}</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
    </div>

  );
}

export default ProfileCardEquipo;
