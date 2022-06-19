import React from "react";
import { useEffect, useState } from "react";
import ProfileCardEquipo from "./cards/ProfileCardEquipo";
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button
} from "reactstrap";

// Core Components

function AdministrarEmparejamiento() {

    const [comboActivo, setComboActivo] = useState(false)
    const usarCombobox = () => {
        setComboActivo(!comboActivo)
    }

    return (
        <div className="container-fluid">
            <br />
            <div className="row">
                <div className="col-5"></div>
                <Dropdown className="col-2" 
                isOpen={comboActivo} 
                toggle={usarCombobox}
                color="light">
                    <DropdownToggle caret>
                        Emparejamientos
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>A Vs B</DropdownItem>
                        <DropdownItem>C Vs D</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className="col-5"></div>
            </div>
            <br />
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-3">
                    <ProfileCardEquipo
                        nombre="Team A"
                        img="https://pm1.narvii.com/6637/8610c455a09a98f950df116322de26207e98a8b6_hq.jpg"
                        resultado="Ganador" />
                </div>
                <div className="col-2 row-container-3">

                    <div className="row row-item-2">
                        <div className="col-3">
                        </div>
                        <div className="col-2">
                            <h1 className="text-blanco text-center">3</h1>
                        </div>
                        <div className="col-2">
                            <h1 className="text-blanco text-center">-</h1>
                        </div>
                        <div className="col-2">
                            <h1 className="text-blanco text-center">2</h1>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row-item-3 text-center">
                        <Button color="warning" type="button">
                            Administrar
                        </Button>
                    </div>

                </div>
                <div className="col-3">
                    <ProfileCardEquipo
                        nombre="Team B"
                        img="https://esports.eldesmarque.com/wp-content/uploads/2017/05/SKT-Untara.jpg"
                        resultado="Perdedor" />
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
}

export default AdministrarEmparejamiento;
