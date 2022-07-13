import React from "react";
import { useEffect, useState } from "react";
import ProfileCardEquipo from "./cards/ProfileCardEquipo";
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
    Modal, ModalHeader, ModalFooter, ModalBody,
    Form, FormGroup, Input, Label
} from "reactstrap";

// Core Components

function AdministrarEmparejamiento(props) {

    //-------------------------- Metodos para Testing -----------------------------

    const imprimirEmparejamientos = () => {
        console.log(rondaSeleccionada)
    }

    const imprimirMapEmparejamientosTotal = () => {
        console.log(mapEmparejamientos)
    }

    //------------------------- Manejo de COMBOBOX Opciones ---------------------------
    const [comboEmparejamientoActivo, setComboEmparejamientoActivo] = useState(false)
    const usarComboboxEmparejamiento = () => {
        setComboEmparejamientoActivo(!comboEmparejamientoActivo)
    }

    const [comboRondaActivo, setComboRondaActivo] = useState(false)
    const usarComboboxRonda = () => {
        setComboRondaActivo(!comboRondaActivo)
    }

    const seleccionarEmparejamiento = (event) => {

        let frase = String(event.currentTarget.textContent)

        let idEmparejamiento = ""
        for(var i = 0; i<4; i++){
            if(frase.charAt(i) == ':'){
                //console.log("encontre una coincidencia: " + i)
                //console.log(clave.substring(0, i))
                idEmparejamiento = frase.substring(0, i)
                setEmparejamientoSeleccionado(idEmparejamiento)
                break;
            }
        }
        //Una vez encontrado el id del emparejamiento, se puede actualizar el estado con lo encontrado
        actualizarEmparejamientoVista(idEmparejamiento)
    }

    const actualizarEmparejamientoVista = (idEmparejamiento) => {

        arrayEmparejamientosCombobox.forEach((emparejamientoData, index) => {
            console.log(emparejamientoData, index)
            if(String(emparejamientoData.id) == String(idEmparejamiento)){
                setEquipoA(emparejamientoData.equipoA)
                setEquipoB(emparejamientoData.equipoB)
                setPuntajeA(emparejamientoData.puntajeA)
                setPuntajeB(emparejamientoData.puntajeB)
            }
        })        

    }

    const cambiarRondaSeleccionada = (event) => {

        let clave = String(event.currentTarget.textContent)
        llenarEmparejamientosRondaSeleccionada(clave)

    }

    const llenarEmparejamientosRondaSeleccionada = (clave) => {

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
                'puntajeA': informacionEmparejamiento.puntajeEquipoA,
                'puntajeB': informacionEmparejamiento.puntajeEquipoB,
                'resultadoA': "",
                'resultadoB': ""
            })

            if(informacionEmparejamiento.id == 1){
                setEquipoA(equipoA)
                setEquipoB(equipoB)
                setPuntajeA(informacionEmparejamiento.puntajeEquipoA)
                setPuntajeB(informacionEmparejamiento.puntajeEquipoB)
                setResultadoA(informacionEmparejamiento.resultadoEquipoA)
                setResultadoB(informacionEmparejamiento.resultadoEquipoB)
            }

            //console.log(informacionEmparejamiento)

        })

        setArrayEmparejamientosCombobox(arrayInformacionEmparejamientosRonda)
        console.log(arrayInformacionEmparejamientosRonda)
    }

    //-------------------- Arreglos y Map COMBOBOX ------------------------
    const [arrayRondasCombobox, setArrayRondasCombobox] = useState([])//Rondas SELECCIONADAS
    const [arrayEmparejamientosCombobox, setArrayEmparejamientosCombobox] = useState([])//Emparejamientos SELECCIONADOS
    const [mapEmparejamientos, setMapEmparejamientos] = useState(new Map())//Todos los emparejamientos, por ronda

    //----------------- Manejo de Selecciones en el frontend ---------------------
    const [rondaSeleccionada, setRondaSeleccionada] = useState("")
    const [emparejamientoSeleccionado, setEmparejamientoSeleccionado] = useState("")
    const [equipoA, setEquipoA] = useState("Equipo A")
    const [puntajeA, setPuntajeA] = useState(0)
    const [resultadoA, setResultadoA] = useState("")
    const [equipoB, setEquipoB] = useState("EquipoB")
    const [puntajeB, setPuntajeB] = useState(0)
    const [resultadoB, setResultadoB] = useState("")

    //---------------------------- MENU EDICION -----------------------------
    //---------------- Cambiar Puntajes en el menu edicion ------------------
    const cambiarPuntajeA = (event) => {
        setPuntajeA(parseInt(event.target.value))
    }
    const cambiarPuntajeB = (event) => {
        setPuntajeB(parseInt(event.target.value))
    }

    const [show, setShow] = useState(false);//Manejo del Modal
    const vistaModal = () => {
        setShow(!show)
        imprimirMapEmparejamientosTotal()
    };

    useEffect(() => {//La primera vez que se inicialice la aplicacion la ronda seleccionada sera la primera
        //de todos los brackets. Si son 16 participantes sera 8vos, si son 8 sera 4tos y asi sucesivamente...

        const cantidadRondas = props.rounds.length
        let arrayInformacionRondas = [...props.rounds]
        //setArrayEmparejamientosCombobox(array)
        arrayInformacionRondas.map((informacionRonda) => {//Map con toda la informacion de las rondas
            mapEmparejamientos.set(informacionRonda.title, informacionRonda.seeds)
        })

        switch (cantidadRondas) {
            case 1:

                arrayRondasCombobox.push("Final")
                setRondaSeleccionada("Final")
                llenarEmparejamientosRondaSeleccionada("Final")

            case 2:

                arrayRondasCombobox.push("Semi-Final")
                arrayRondasCombobox.push("Final")
                setRondaSeleccionada("Semi-Final")
                llenarEmparejamientosRondaSeleccionada("Semi-Final")

            case 3:

                arrayRondasCombobox.push("4tos")
                arrayRondasCombobox.push("Semi-Final")
                arrayRondasCombobox.push("Final")
                setRondaSeleccionada("4tos")
                llenarEmparejamientosRondaSeleccionada("4tos")

            case 4:

                arrayRondasCombobox.push("8vos")
                arrayRondasCombobox.push("4tos")
                arrayRondasCombobox.push("Semi-Final")
                arrayRondasCombobox.push("Final")
                setRondaSeleccionada("8vos")
                llenarEmparejamientosRondaSeleccionada("8vos")

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
                        {arrayRondasCombobox.map((rondaNombre) => (
                            <DropdownItem
                                key={rondaNombre}
                                onClick={cambiarRondaSeleccionada}>{rondaNombre}</DropdownItem>
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
                        {arrayEmparejamientosCombobox.map((data) => (

                            <DropdownItem 
                                key={data.id}
                                onClick={seleccionarEmparejamiento}>{data.id + ": " + data.equipoA + " - " + data.equipoB}
                            </DropdownItem>
                        
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
                            onClick={vistaModal}>
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

            <Modal isOpen={show} toggle={vistaModal} className={''}>
                <ModalHeader toggle={vistaModal}>Editar Puntajes</ModalHeader>
                <ModalBody>
                    <Form className="container-fluid">
                        <FormGroup className="row">
                            <div className="col-6">
                                <Label>Victorias Equipo A:</Label>
                                <Input value={puntajeA} onChange={cambiarPuntajeA}></Input>
                            </div>
                            <div className="col-6">
                                <Label>Victorias Equipo B:</Label>
                                <Input value={puntajeB} onChange={cambiarPuntajeB}></Input>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={vistaModal}>Guardar</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default AdministrarEmparejamiento;
