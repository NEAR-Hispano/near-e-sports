import React from "react";
import { useEffect, useState } from "react";
import ProfileCardEquipo from "./cards/ProfileCardEquipo";
import {
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
    Modal, ModalHeader, ModalFooter, ModalBody,
    Form, FormGroup, Input, Label
} from "reactstrap";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { array } from "prop-types";
import { BrowserLocalStorageKeyStore } from "near-api-js/lib/key_stores";
import { isCompositeComponent } from "react-dom/test-utils";

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

        let arrayEmparejamientosRonda = [...mapEmparejamientos.get(rondaSeleccionada)]
        let indiceModificado = -1
        let siguienteRonda = ""

        for (let i = 0; i < arrayEmparejamientosRonda.length; i++) {

            if (arrayEmparejamientosRonda[i].id == emparejamientoSeleccionado) {

                let respuesta = calcularResultadoEquipos(puntajeAEdicion, puntajeBEdicion)
                indiceModificado = i

                arrayEmparejamientosRonda[i].estatus = 1
                arrayEmparejamientosRonda[i].puntajeEquipoA = puntajeAEdicion
                arrayEmparejamientosRonda[i].puntajeEquipoB = puntajeBEdicion
                arrayEmparejamientosRonda[i].resultadoEquipoA = respuesta[0]
                arrayEmparejamientosRonda[i].resultadoEquipoB = respuesta[1]
                arrayEmparejamientosRonda[i].teams = [{ name: equipoA }, { name: equipoB }]

                if (rondaSeleccionada != "Final") {//Se actualiza la siguiente ronda

                    //Los emparejamientos impares siempre deben ser el primer equipo en el nuevo bracket
                    //mientras que los emparejamientos pares siempre seran el segundo equipo en el bracket

                    const idEmparejamiento = arrayEmparejamientosRonda[i].id
                    const resultado = arrayEmparejamientosRonda[i].id % 2

                    if (!(resultado == 0)) {//impar

                        console.log("Es impar")
                        let rondaConIdEmparejamiento = obtenerRondaConEmparejamientoSiguiente(idEmparejamiento, false)
                        let siguienteRondaTexto = rondaConIdEmparejamiento[0]
                        let idSiguiente = rondaConIdEmparejamiento[1]
                        let posicionEnVectorSig = rondaConIdEmparejamiento[2]

                        let arrayEmparejamientosSigRonda = [...mapEmparejamientos.get(siguienteRondaTexto)]

                        let arrayCombo = []
                        let emparejamiento = ""

                        switch (respuesta[0]) {

                            case "Ganador":
                                //Se guardan datos del Equipo A porque fue el vencedor
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = imgA
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[0] = { name: equipoA }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                            case "Perdedor":
                                //Se guardan datos del Equipo B porque fue el vencedor
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = imgB
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[0] = { name: equipoB }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                            case "Empate":
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[0] = { name: "Empate" }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                        }

                        //console.log(mapEmparejamientos)

                    } else {//par

                        console.log("Es par")
                        let rondaConIdEmparejamiento = obtenerRondaConEmparejamientoSiguiente(idEmparejamiento, true)
                        let siguienteRondaTexto = rondaConIdEmparejamiento[0]
                        let idSiguiente = rondaConIdEmparejamiento[1]
                        let posicionEnVectorSig = rondaConIdEmparejamiento[2]

                        let arrayEmparejamientosSigRonda = [...mapEmparejamientos.get(siguienteRondaTexto)]

                        let arrayCombo = []
                        let emparejamiento = ""

                        switch (respuesta[0]) {

                            case "Ganador":
                                //Se guardan datos del Equipo A porque fue el vencedor
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = imgA
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[1] = { name: equipoA }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                            case "Perdedor":
                                //Se guardan datos del Equipo B porque fue el vencedor
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = imgB
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[1] = { name: equipoB }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                            case "Empate":
                                //Datos en el MAP
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].imgEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].puntajeA = 0
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].resultadoEquipoA = ""
                                arrayEmparejamientosSigRonda[posicionEnVectorSig].teams[1] = { name: "Empate" }
                                mapEmparejamientos.set(siguienteRondaTexto, arrayEmparejamientosSigRonda)
                                break;
                        }

                    }

                }

                break;
            }

        }

        //Se actualiza el Map con la informacion modificada, de forma que siempre tenga info reciente
        mapEmparejamientos.set(rondaSeleccionada, arrayEmparejamientosRonda)

        //Ahora debe actualizarce el array usado por el comboBox que tiene toda la informacion legible de la web
        arrayEmparejamientosCombobox[indiceModificado].puntajeA = arrayEmparejamientosRonda[indiceModificado].puntajeEquipoA
        arrayEmparejamientosCombobox[indiceModificado].puntajeB = arrayEmparejamientosRonda[indiceModificado].puntajeEquipoB
        arrayEmparejamientosCombobox[indiceModificado].resultadoA = arrayEmparejamientosRonda[indiceModificado].resultadoEquipoA
        arrayEmparejamientosCombobox[indiceModificado].resultadoB = arrayEmparejamientosRonda[indiceModificado].resultadoEquipoB


    }

    const actualizarCambiosPuntajeGanador = () => {

        if (puntajeAEdicion >= 0 && puntajeBEdicion >= 0
            && (!isNaN(parseInt(puntajeAEdicion))
                && !isNaN(parseInt(puntajeBEdicion)))
        ) {

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

    const obtenerRondaConEmparejamientoSiguiente = (idEmparejamiento, esPar) => {

        let nuevoId = 1
        let posicionEnVectorSig = 0
        let arrayN = identificarValorN()

        if (!esPar) {//Si es impar

            switch (rondaSeleccionada) {

                case "16vos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarImpar("16vos", "8vos", idEmparejamiento, 16)
                    //posicionEnVectorSig = nuevoId - arrayN[0]
                    posicionEnVectorSig = determinarPosicionEnVector("8vos", nuevoId)
                    return ["8vos", nuevoId, posicionEnVectorSig]
                    break;

                case "8vos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarImpar("8vos", "4tos", idEmparejamiento, 8)
                    //posicionEnVectorSig = nuevoId - arrayN[1]
                    posicionEnVectorSig = determinarPosicionEnVector("4tos", nuevoId)
                    return ["4tos", nuevoId, posicionEnVectorSig]
                    break;

                case "4tos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarImpar("4tos", "Semi-Final", idEmparejamiento, 4)
                    //posicionEnVectorSig = nuevoId - arrayN[2]
                    posicionEnVectorSig = determinarPosicionEnVector("Semi-Final", nuevoId)
                    return ["Semi-Final", nuevoId, posicionEnVectorSig]
                    break;

                case "Semi-Final":
                    nuevoId = idEmparejamiento + determinarCantidadASumarImpar("Semi-Final", "Final", idEmparejamiento, 2)
                    //posicionEnVectorSig = nuevoId - arrayN[3]
                    posicionEnVectorSig = determinarPosicionEnVector("Final", nuevoId)
                    return ["Final", nuevoId, posicionEnVectorSig]
                    break;

            }

        } else {//Si es par

            switch (rondaSeleccionada) {

                case "16vos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarPar("16vos", "8vos", idEmparejamiento, 15)
                    posicionEnVectorSig = determinarPosicionEnVector("8vos", nuevoId)
                    return ["8vos", nuevoId, posicionEnVectorSig]
                    break;

                case "8vos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarPar("8vos", "4tos", idEmparejamiento, 7)
                    posicionEnVectorSig = determinarPosicionEnVector("4tos", nuevoId)
                    return ["4tos", nuevoId, posicionEnVectorSig]
                    break;

                case "4tos":
                    nuevoId = idEmparejamiento + determinarCantidadASumarPar("4tos", "Semi-Final", idEmparejamiento, 3)
                    posicionEnVectorSig = determinarPosicionEnVector("Semi-Final", nuevoId)
                    return ["Semi-Final", nuevoId, posicionEnVectorSig]
                    break;

                case "Semi-Final":
                    nuevoId = idEmparejamiento + determinarCantidadASumarPar("Semi-Final", "Final", idEmparejamiento, 1)
                    posicionEnVectorSig = determinarPosicionEnVector("Final", nuevoId)
                    return ["Final", nuevoId, posicionEnVectorSig]
                    break;

            }

        }

    }

    const identificarValorN = () => {

        //16, 8, 4, 2, 1
        let sumatoria = [0, 0, 0, 0, 0]
        switch (arrayRondasCombobox.length) {
            case (5):
                sumatoria = [17, 25, 29, 31, 32]
                return sumatoria
                break;
            case (4):
                sumatoria = [0, 9, 13, 15, 16]
                return sumatoria
                break;
            case (3):
                sumatoria = [0, 0, 5, 7, 8]
                return sumatoria
                break;
            case (2):
                sumatoria = [0, 0, 0, 3, 4]
                return sumatoria
                break;
            case (1):
                sumatoria = [0, 0, 0, 1, 2]
                return sumatoria
                break;
        }

    }

    const determinarCantidadASumarImpar = (claveOriginal, claveSig, idNumero, sumaInicio) => {
        
        let arrayEmparejamientosActual = mapEmparejamientos.get(claveOriginal)
        let numInicial = arrayEmparejamientosActual[0].id;

        let arrayEmparejamientosSig = mapEmparejamientos.get(claveSig)
        let numFinal = arrayEmparejamientosSig[arrayEmparejamientosSig.length - 1].id

        //console.log("seria: " + arrayEmparejamientos[0].id)
        for (let i = numInicial; i <3*(arrayEmparejamientosSig.length + idNumero); i = i + 2) {
            console.log("Suma: " + sumaInicio + " i: " + i)
            if (idNumero == i) {
                console.log("Def. Suma: " + sumaInicio + " i: " + i)
                return sumaInicio
            }
            sumaInicio = sumaInicio - 1
            if (sumaInicio == -1){
                console.log("no encontre nada...")
                break;
            }
        }
    }

    const determinarCantidadASumarPar = (claveOriginal, claveSig, idNumero, sumaInicio) => {
        let arrayEmparejamientosActual = mapEmparejamientos.get(claveOriginal)
        let numInicial = arrayEmparejamientosActual[1].id;

        let arrayEmparejamientosSig = mapEmparejamientos.get(claveSig)
        let numFinal = arrayEmparejamientosSig[arrayEmparejamientosSig.length - 1].id

        for (let i = numInicial; i <3*(arrayEmparejamientosSig.length + idNumero); i = i + 2) {
            console.log("Suma: " + sumaInicio + " i: " + i)
            if (idNumero == i) {
                console.log("Def. Suma: " + sumaInicio + " i: " + i)
                return sumaInicio
            }
            sumaInicio = sumaInicio - 1
            if (sumaInicio == -1){
                console.log("no encontre nada...")
                break;
            }
        }
    }

    const determinarPosicionEnVector = (clave, idEmparejamiento) => {
        console.log("Estoy buscando la posicion en la que estara el vector")
        let arrayEmparejamientos = mapEmparejamientos.get(clave)
        console.log("Ronda sig: " + clave)
        console.log(arrayEmparejamientos)
        for (let i = 0; i < arrayEmparejamientos.length; i++) {
            //console.log(arrayEmparejamientos[i])
            if (arrayEmparejamientos[i].id == idEmparejamiento) {
                console.log(i)
                return i
            }
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

        const objetoBD = {
            data: roundsConstruido
        }

        guardarBracketsBD(objetoBD)
    }

    const guardarBracketsBD = (objetoBD) => {
        const docRef = doc(db, 'brackets', props.idTorneo);
        setDoc(docRef, objetoBD).then(() => {
            props.changeEdicion()
        });
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

        console.log(props)
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

            {/* <button onClick={imprimirRondaEmparejamientoActuales}>Boton Testear Ronda - Emparejamiento</button>
 */}
            <div className="text-center">
                <Button
                    color="primary"
                    type="button"
                    onClick={contruirJSON}>
                    Guardar Cambios
                </Button>
            </div>

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
