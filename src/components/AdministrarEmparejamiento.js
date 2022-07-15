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

    const imprimirRondaEmparejamientoActuales = () => {
        console.log(rondaSeleccionada)
        console.log(emparejamientoSeleccionado)
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
        for (var i = 0; i < 4; i++) {
            if (frase.charAt(i) == ':') {
                //console.log("encontre una coincidencia: " + i)
                //console.log(clave.substring(0, i))
                idEmparejamiento = frase.substring(0, i)
                setEmparejamientoSeleccionado(idEmparejamiento)
                break;
            }
        }
        //Una vez encontrado el id del emparejamiento, se puede actualizar el estado con lo encontrado
        actualizarEmparejamientoVista(idEmparejamiento)
        //console.log("idEmparejamiento: " + idEmparejamiento)
    }

    const actualizarEmparejamientoVista = (idEmparejamiento) => {

        arrayEmparejamientosCombobox.forEach((emparejamientoData, index) => {
            //console.log(emparejamientoData, index)
            if (String(emparejamientoData.id) == String(idEmparejamiento)) {
                setEquipoA(emparejamientoData.equipoA)
                setEquipoB(emparejamientoData.equipoB)
                setImgA(emparejamientoData.imgA)
                setImgB(emparejamientoData.imgB)
                setPuntajeA(emparejamientoData.puntajeA)
                setPuntajeB(emparejamientoData.puntajeB)
                setResultadoA(emparejamientoData.resultadoA)
                setResultadoB(emparejamientoData.resultadoB)
            }
        })

    }

    const cambiarRondaSeleccionada = (event) => {

        let clave = String(event.currentTarget.textContent)
        if (clave != rondaSeleccionada) {
            setRondaSeleccionada(clave)
            llenarEmparejamientosRondaSeleccionada(clave)
        }
    }

    const llenarEmparejamientosRondaSeleccionada = (clave) => {

        //Este Array contendra la informacion de todos los emparejamientos de una forma mas legible
        //puesto que los equipos estan ubicados en diferentes niveles, por ende, dificulta su lectura
        let arrayInformacionEmparejamientosRonda = []

        let indice = 0
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
                'imgA': informacionEmparejamiento.imgEquipoA,
                'imgB': informacionEmparejamiento.imgEquipoB,
                'puntajeA': informacionEmparejamiento.puntajeEquipoA,
                'puntajeB': informacionEmparejamiento.puntajeEquipoB,
                'resultadoA': informacionEmparejamiento.resultadoEquipoA,
                'resultadoB': informacionEmparejamiento.resultadoEquipoB
            })

            if (indice == 0) {
                setEquipoA(equipoA)
                setEquipoB(equipoB)
                setImgA(informacionEmparejamiento.imgEquipoA)
                setImgB(informacionEmparejamiento.imgEquipoB)
                setPuntajeA(informacionEmparejamiento.puntajeEquipoA)
                setPuntajeB(informacionEmparejamiento.puntajeEquipoB)
                setResultadoA(informacionEmparejamiento.resultadoEquipoA)
                setResultadoB(informacionEmparejamiento.resultadoEquipoB)

                setEmparejamientoSeleccionado(informacionEmparejamiento.id)
            }

            indice = indice + 1

            //console.log(informacionEmparejamiento)

        })

        setArrayEmparejamientosCombobox(arrayInformacionEmparejamientosRonda)
        //console.log(arrayInformacionEmparejamientosRonda)
    }

    //-------------------- Arreglos y Map COMBOBOX ------------------------
    const [arrayRondasCombobox, setArrayRondasCombobox] = useState([])//Rondas SELECCIONADAS
    const [arrayEmparejamientosCombobox, setArrayEmparejamientosCombobox] = useState([])//Emparejamientos SELECCIONADOS
    const [mapEmparejamientos, setMapEmparejamientos] = useState(new Map())//Todos los emparejamientos, por ronda

    //----------------- Manejo de Selecciones en el frontend ---------------------
    const [rondaSeleccionada, setRondaSeleccionada] = useState("")
    const [emparejamientoSeleccionado, setEmparejamientoSeleccionado] = useState(1)
    const [equipoA, setEquipoA] = useState("Equipo A")
    const [imgA, setImgA] = useState("")
    const [puntajeA, setPuntajeA] = useState(0)
    const [resultadoA, setResultadoA] = useState("")
    const [puntajeAEdicion, setPuntajeAEdicion] = useState("")
    const [equipoB, setEquipoB] = useState("EquipoB")
    const [imgB, setImgB] = useState("")
    const [puntajeB, setPuntajeB] = useState(0)
    const [puntajeBEdicion, setPuntajeBEdicion] = useState("")
    const [resultadoB, setResultadoB] = useState("")

    //---------------------------- MENU EDICION -----------------------------
    //---------------- Cambiar Puntajes en el menu edicion ------------------
    const cambiarPuntajeA = (event) => {
        const valor = parseInt(event.target.value)
        if (!isNaN(valor)) {
            setPuntajeAEdicion(valor)
        } else {
            setPuntajeAEdicion("")
        }
    }
    const cambiarPuntajeB = (event) => {
        const valor = parseInt(event.target.value)
        if (!isNaN(valor)) {
            setPuntajeBEdicion(valor)
        } else {
            setPuntajeBEdicion("")
        }
    }

    const [show, setShow] = useState(false);//Manejo del Modal
    const vistaModal = () => {
        setPuntajeAEdicion(puntajeA)
        setPuntajeBEdicion(puntajeB)
        setShow(!show)
        //imprimirMapEmparejamientosTotal()
    };

    //Actualizacion de Objeto/JSON con toda la informacion de las rondas y resultados

    const actualizarMap = () => {

        let arrayRondas = [...mapEmparejamientos.get(rondaSeleccionada)]
        //console.log(arrayRondas)
        let emparejamientoModificado = {}
        let indiceModificado = 0
        arrayRondas.forEach((dataEmparejamiento, index) => {

            if (dataEmparejamiento.id == emparejamientoSeleccionado) {

                let respuesta = calcularResultadoEquipos(puntajeAEdicion, puntajeBEdicion)
                indiceModificado = index

                emparejamientoModificado.id = dataEmparejamiento.id
                emparejamientoModificado.date = dataEmparejamiento.date
                emparejamientoModificado.estatus = 1
                emparejamientoModificado.imgEquipoA = dataEmparejamiento.imgEquipoA
                emparejamientoModificado.imgEquipoB = dataEmparejamiento.imgEquipoB
                emparejamientoModificado.puntajeEquipoA = puntajeAEdicion
                emparejamientoModificado.puntajeEquipoB = puntajeBEdicion
                emparejamientoModificado.resultadoEquipoA = respuesta[0]
                emparejamientoModificado.resultadoEquipoB = respuesta[1]
                emparejamientoModificado.teams = [{ name: equipoA }, { name: equipoB }]

            }

        })

        //Se actualiza el Map con la informacion modificada, de forma que siempre tenga info reciente

        //console.log(emparejamientoModificado)
        arrayRondas[indiceModificado] = emparejamientoModificado
        mapEmparejamientos.set(rondaSeleccionada, arrayRondas)

        //Ahora debe actualizarce el array usado por el comboBox que tiene toda la informacion legible de la web
        for (let i = 0; i < arrayEmparejamientosCombobox.length; i++) {

            if (arrayEmparejamientosCombobox[i].id == emparejamientoModificado.id) {

                arrayEmparejamientosCombobox[i].puntajeA = emparejamientoModificado.puntajeEquipoA
                arrayEmparejamientosCombobox[i].puntajeB = emparejamientoModificado.puntajeEquipoB
                arrayEmparejamientosCombobox[i].resultadoA = emparejamientoModificado.resultadoEquipoA
                arrayEmparejamientosCombobox[i].resultadoB = emparejamientoModificado.resultadoEquipoB
                break;

            }

        }

        contruirJSON()

    }

    const actualizarCambiosPuntajeGanador = () => {

        if (puntajeAEdicion != "" && puntajeBEdicion != ""
            && (!isNaN(puntajeAEdicion) && !isNaN(puntajeBEdicion))) {

            setPuntajeA(puntajeAEdicion)
            setPuntajeB(puntajeBEdicion)

            let respuesta = calcularResultadoEquipos(puntajeAEdicion, puntajeBEdicion)
            setResultadoA(respuesta[0])
            setResultadoB(respuesta[1])

            setShow(!show)

        } else {
            alert("No es valido, verifique que no haya campos vacios o datos mal rellenados.")
        }
        actualizarMap()
    }

    const calcularResultadoEquipos = (puntajeA, puntajeB) => {

        if (puntajeAEdicion > puntajeBEdicion) {

            return ["Ganador", "Perdedor"]

        } else if (puntajeBEdicion > puntajeAEdicion) {

            return ["Perdedor", "Ganador"]

        } else {

            return ["Empate", "Empate"]

        }
    }

    const contruirJSON = () => {

        let roundsConstruido = []

        let i = 0
        for (let rondaData of mapEmparejamientos.values()) {

            let rondaObjeto = {}
            rondaObjeto.title = arrayRondasCombobox[i]

            let seedsArray = []
            rondaData.map(emparejamientoData => {
                seedsArray.push(emparejamientoData)
            })

            rondaObjeto.seeds = seedsArray
            
            roundsConstruido.push(rondaObjeto)
            i = i + 1

        }

        console.log(roundsConstruido)
    }

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
                        img={imgA}
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
                        img={imgB}
                        resultado={resultadoB} />
                </div>
                <div className="col-2">
                </div>
            </div>

            <button onClick={imprimirRondaEmparejamientoActuales}>Boton Testear Ronda - Emparejamiento</button>

            <Modal isOpen={show} toggle={vistaModal} className={''}>
                <ModalHeader toggle={vistaModal}>Editar Puntajes</ModalHeader>
                <ModalBody>
                    <Form className="container-fluid">
                        <FormGroup className="row">
                            <div className="col-6">
                                <Label>Victorias Equipo A:</Label>
                                <Input type="number" value={puntajeAEdicion} onChange={cambiarPuntajeA}></Input>
                            </div>
                            <div className="col-6">
                                <Label>Victorias Equipo B:</Label>
                                <Input type="number" value={puntajeBEdicion} onChange={cambiarPuntajeB}></Input>
                            </div>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={actualizarCambiosPuntajeGanador}>Guardar</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}

export default AdministrarEmparejamiento;
