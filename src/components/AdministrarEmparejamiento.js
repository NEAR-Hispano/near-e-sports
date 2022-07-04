import React from "react";
import { useEffect, useState } from "react";
import ProfileCardEquipo from "./cards/ProfileCardEquipo";
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
    Modal
} from "reactstrap";

// Core Components

function AdministrarEmparejamiento(props) {

    //---------------------------- Manejo de COMBOBOX -----------------------------
    const [comboEmparejamientoActivo, setComboEmparejamientoActivo] = useState(false)
    const usarComboboxEmparejamiento = () => {
        setComboEmparejamientoActivo(!comboEmparejamientoActivo)
    }

    const [comboRondaActivo, setComboRondaActivo] = useState(false)
    const usarComboboxRonda = () => {
        setComboRondaActivo(!comboRondaActivo)
    }


    const imprimirEmparejamientos = () => {
        console.log(rondaSeleccionada)
    }

    //-------------------- Arreglos y Map COMBOBOX ------------------------
    const [arrayRondas, setArrayRondas] = useState([])
    const [arrayEmparejamientos, setArrayEmparejamientos] = useState([])
    const [mapEmparejamientos, setMapEmparejamientos] = useState(new Map())

    //-------------------- Manejo de Selecciones -------------------------
    const [rondaSeleccionada, setRondaSeleccionada] = useState("")
    const [equipoA, setEquipoA] = useState("Equipo A")
    const [puntajeA, setPuntajeA] = useState(0)
    const [resultadoA, setResultadoA] = useState("")
    const [equipoB, setEquipoB] = useState("EquipoB")
    const [puntajeB, setPuntajeB] = useState(0)
    const [resultadoB, setResultadoB] = useState("")

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cambiarRonda = (event) => {

        let clave = String(event.currentTarget.textContent)

        llenarEmparejamientosRonda(clave)

    }

    const llenarEmparejamientosRonda = (clave) => {

        let arrayInformacionEmparejamientosRonda = []

        setRondaSeleccionada(clave)

        let arrayEmparejamientoRonda = mapEmparejamientos.get(clave)
        arrayEmparejamientoRonda.map(informacionEmparejamiento => {

            let i = 0
            let equipoA, equipoB = ""
            informacionEmparejamiento.teams.map(equipo => {
                if (i == 0) {
                    equipoA = equipo.name
                } else {
                    equipoB = equipo.name
                }
                i = i + 1
            })

            arrayInformacionEmparejamientosRonda.push({
                'id': informacionEmparejamiento.id,
                'fecha': informacionEmparejamiento.date,
                'equipoA': equipoA,
                'equipoB': equipoB,
                'puntajeA': 0,
                'puntajeB': 0,
                'resultadoA': "",
                'resultadoB': ""
            })

        })

        setArrayEmparejamientos(arrayInformacionEmparejamientosRonda)
        console.log(arrayInformacionEmparejamientosRonda)
    }

    useEffect(() => {

        const cantidadRondas = props.rounds.length
        let arrayInformacionRondas = [...props.rounds]
        //setArrayEmparejamientos(array)
        arrayInformacionRondas.map((informacionRonda) => {
            mapEmparejamientos.set(informacionRonda.title, informacionRonda.seeds)
        })

        switch (cantidadRondas) {
            case 1:

                arrayRondas.push("Final")
                setRondaSeleccionada("Final")
                llenarEmparejamientosRonda("Final")

            case 2:

                arrayRondas.push("Semi-Final")
                arrayRondas.push("Final")
                setRondaSeleccionada("Semi-Final")
                llenarEmparejamientosRonda("Semi-Final")

            case 3:

                arrayRondas.push("4tos")
                arrayRondas.push("Semi-Final")
                arrayRondas.push("Final")
                setRondaSeleccionada("4tos")
                llenarEmparejamientosRonda("4tos")

            case 4:

                arrayRondas.push("8vos")
                arrayRondas.push("4tos")
                arrayRondas.push("Semi-Final")
                arrayRondas.push("Final")
                setRondaSeleccionada("8vos")
                llenarEmparejamientosRonda("8vos")

        }

    }, []);

    return (
        <div className="container-fluid">
            <br />
            <div className="row">
                <Dropdown className=""
                    isOpen={comboRondaActivo}
                    toggle={usarComboboxRonda}
                    color="light">
                    <DropdownToggle caret>
                        Ronda
                    </DropdownToggle>
                    <DropdownMenu left>
                        {arrayRondas.map((rondaNombre) => (
                            <DropdownItem
                                key={rondaNombre}
                                onClick={cambiarRonda}>{rondaNombre}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <br />
                <br />
                <Dropdown className=""
                    isOpen={comboEmparejamientoActivo}
                    toggle={usarComboboxEmparejamiento}
                    color="light">
                    <DropdownToggle caret>
                        Emparejamientos
                    </DropdownToggle>
                    <DropdownMenu left>
                        {arrayEmparejamientos.map((data) => (
                            <DropdownItem>{data.equipoA + " - " + data.equipoB}</DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <br />
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-3">
                    <ProfileCardEquipo
                        nombre={equipoA}
                        img="https://pm1.narvii.com/6637/8610c455a09a98f950df116322de26207e98a8b6_hq.jpg"
                        resultado={resultadoA} />
                </div>
                <div className="col-2 row-container-3">

                    <div className="row row-item-2">
                        <div className="text-center">
                            <h1>{puntajeA + " - " + puntajeB}</h1>
                        </div>
                    </div>
                    <div className="row-item-3 text-center text-blanco">
                        <Button
                            variant="danger"
                            className="bg-danger text-blanco"
                            onClick={imprimirEmparejamientos}>
                            Editar
                        </Button>
                    </div>

                </div>
                <div className="col-3">
                    <ProfileCardEquipo
                        nombre={equipoB}
                        img="https://esports.eldesmarque.com/wp-content/uploads/2017/05/SKT-Untara.jpg"
                        resultado={resultadoB} />
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>
    );
}

export default AdministrarEmparejamiento;
