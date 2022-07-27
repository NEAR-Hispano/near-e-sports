import { Bracket, RoundProps } from 'react-brackets';
import React from "react";
import { useEffect, useState } from "react";
import {
    Button
} from "reactstrap";
import AdministrarEmparejamiento from './AdministrarEmparejamiento';
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import TorneosDetalles from './TournamentDetails';

function RenderBracket(props) {

    //Arreglos con la informacion de cada ronda del torneo
    //Estado
    const linkImg = "https://firebasestorage.googleapis.com/v0/b/near-e-sports-tournament.appspot.com/o/Imagenes-Portada-Torneo%2FEsports%20img.png?alt=media&token=8666a05c-e13b-466c-b2ed-baef4c9d819e"
    const [edicion, setEdicion] = useState(false)
    const changeEdicion = () => {
        setEdicion(!edicion)
    }

    const [booleanBrackets, setBooleanBrackets] = useState(false)
    const changeBooleanBracket = () => {
        setBooleanBrackets(true)
    }

    //Descripcion de cada estatus (significado):
    //0 -> Editable
    //1 -> Ya se ha declarado un ganador, por ende, no se puede editar
    const roundDieciseisAvos = [
        {
            title: 'Ronda Inicial',
            seeds: [
                {
                    id: 1,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                },
                {
                    id: 2,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 3,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 4,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 5,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 6,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 7,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 8,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 9,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                },
                {
                    id: 10,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 11,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 12,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 13,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 14,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 15,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
                {
                    id: 16,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team C' }, { name: 'Team D' }],
                },
            ],
        }
    ]

    const rounds = [
        {
            title: '8vos',
            seeds: [
                {
                    id: 1,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo A' }, { name: 'Equipo 7' }],
                    imgEquipoA: "https://pm1.narvii.com/6637/8610c455a09a98f950df116322de26207e98a8b6_hq.jpg",
                    imgEquipoB: "https://esports.eldesmarque.com/wp-content/uploads/2017/05/SKT-Untara.jpg",
                    puntajeEquipoA: 3,
                    puntajeEquipoB: 2,
                    resultadoEquipoA: 'Ganador',
                    resultadoEquipoB: 'Perdedor',
                    estatus: 0
                },
                {
                    id: 2,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 3,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 4,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 5,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 6,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 7,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 8,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
            ]
        },
        {
            title: '4tos',
            seeds: [
                {
                    id: 9,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 10,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 11,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 12,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Team A' }, { name: 'Team B' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
            ]
        },
        {
            title: 'Semi-Final',
            seeds: [
                {
                    id: 13,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Kevin' }, { name: 'Carlos' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 14,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Luis' }, { name: 'Jose' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
            ]
        },
        {
            title: 'Final',
            seeds: [
                {
                    id: 15,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Kevin' }, { name: 'Luis' }],
                    imgEquipoA: "https://e.rpp-noticias.io/normal/2022/02/20/084208_1220264.jpg",
                    imgEquipoB: "https://quenoticias.com/wp-content/uploads/2021/04/Goku-Super-Saiyajin-P.jpg",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
            ]
        },

    ];

    const roundsVacio = [
        {
            title: '8vos',
            seeds: [
                {
                    id: 1,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 1' }, { name: 'Equipo 2' }],
                    imgEquipoA: "https://pm1.narvii.com/6637/8610c455a09a98f950df116322de26207e98a8b6_hq.jpg",
                    imgEquipoB: "https://esports.eldesmarque.com/wp-content/uploads/2017/05/SKT-Untara.jpg",
                    puntajeEquipoA: 3,
                    puntajeEquipoB: 2,
                    resultadoEquipoA: 'Ganador',
                    resultadoEquipoB: 'Perdedor',
                    estatus: 0
                },
                {
                    id: 2,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 3' }, { name: 'Equipo 4' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 3,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 5' }, { name: 'Equipo 6' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 4,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 7' }, { name: 'Equipo 8' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 5,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 9' }, { name: 'Equipo 10' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 6,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 11' }, { name: 'Equipo 12' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 7,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 13' }, { name: 'Equipo 14' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
                {
                    id: 8,
                    date: new Date().toDateString(),
                    teams: [{ name: 'Equipo 15' }, { name: 'Equipo 16' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: 'N/A',
                    resultadoEquipoB: 'N/A',
                    estatus: 0
                },
            ]
        },
        {
            title: '4tos',
            seeds: [
                {
                    id: 9,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
                {
                    id: 10,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
                {
                    id: 11,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
                {
                    id: 12,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
            ]
        },
        {
            title: 'Semi-Final',
            seeds: [
                {
                    id: 13,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
                {
                    id: 14,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "",
                    imgEquipoB: "",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
            ]
        },
        {
            title: 'Final',
            seeds: [
                {
                    id: 15,
                    date: new Date().toDateString(),
                    teams: [{ name: '' }, { name: '' }],
                    imgEquipoA: "https://e.rpp-noticias.io/normal/2022/02/20/084208_1220264.jpg",
                    imgEquipoB: "https://quenoticias.com/wp-content/uploads/2021/04/Goku-Super-Saiyajin-P.jpg",
                    puntajeEquipoA: 0,
                    puntajeEquipoB: 0,
                    resultadoEquipoA: '',
                    resultadoEquipoB: '',
                    estatus: 0
                },
            ]
        },

    ];

    const construirEmparejamientos = () => {

        const finalizar= doc(db, "torneos", props.idTorneo);
        setDoc(finalizar, { estado: "Proceso" }, { merge: true });

        let teams = props.equipos
        let lenghtFloat = teams.length
        console.log("Lenght: " + lenghtFloat)
        const cantEmparejamientos = parseFloat(parseFloat(lenghtFloat) / parseFloat(2))
        console.log("Cant decimal: " + cantEmparejamientos)
        const cantEmparejamientosEntero = Math.ceil(cantEmparejamientos)
        console.log("Cant entera: " + cantEmparejamientosEntero)

        let cantFaltantes = 0
        let roundsBracketConstruido = []

        let seeds = []
        let objetoRound = {}

        let equipoSig = 0

        //--------------------------- Logica general ----------------------------
        //Llenado de emparejamientos registrados
        for (let i = 1; i <= cantEmparejamientosEntero; i++) {

            //Objeto Round
            objetoRound = {
                id: i,
                date: new Date().toDateString(),
                teams: [],
                imgEquipoA: 0,
                imgEquipoB: 0,
                puntajeEquipoA: 0,
                puntajeEquipoB: 0,
                resultadoEquipoA: 'N/A',
                resultadoEquipoB: 'N/A',
                ownerA: "",
                ownerB: "",
                estatus: 0
            }

            //Validar si se ha inscrito el equipo A o B del emparejamiento
            let validador = 0
            let limiteAgregarEquipos = equipoSig + 2
            //Verificar que equipo se ha inscrito hasta ahora
            for (let j = equipoSig; j < limiteAgregarEquipos; j++) {

                if (teams[j] != null) {

                    if (validador == 0) {// 1er team

                        objetoRound.ownerA = teams[j].owner
                        objetoRound.teams.push({ name: teams[j].name })
                        if (teams[j].img != null) {//Tiene el campo
                            objetoRound.imgEquipoA = teams[j].img
                        } else {//No tiene el campo
                            objetoRound.imgEquipoA = linkImg
                        }

                    } else {// 2do team

                        objetoRound.ownerB = teams[j].owner
                        objetoRound.teams.push({ name: teams[j].name })
                        if (teams[j].img != null) {//Tiene el campo
                            objetoRound.imgEquipoB = teams[j].img
                        } else {//No tiene el campo
                            objetoRound.imgEquipoB = linkImg
                        }

                    }

                    equipoSig = equipoSig + 1
                }

                validador = validador + 1

            }

            seeds.push(objetoRound)

        }
        //--------------------------- FIN Logica general ----------------------------

        //--------------------------- Rellenar el impar que falto ---------------------
        if (parseFloat(lenghtFloat % 2) > 0) {

            const indexAntesRelleno = seeds.length
            seeds[indexAntesRelleno - 1].teams.push({ name: "N/A" })

        }
        //---------------------------- FIN Rellenar Impar -----------------------------

        //32 equipos y 16 emparejamientos
        if (cantEmparejamientos == parseFloat(16)) {

            const obj = {
                title: "16vos",
                seeds: seeds
            }
            roundsBracketConstruido.push(obj)

            const octavos = generarBracketVacio("8vos", 17, 24)
            roundsBracketConstruido.push(octavos)
            const cuartos = generarBracketVacio("4tos", 25, 28)
            roundsBracketConstruido.push(cuartos)
            const semis = generarBracketVacio("Semi-Final", 29, 30)
            roundsBracketConstruido.push(semis)
            const final = generarBracketVacio("Final", 31, 31)
            roundsBracketConstruido.push(final)
        }

        //+16 equipos (max 32) y 16 emparejamientos
        if (cantEmparejamientos > parseFloat(8)
            && cantEmparejamientos < parseFloat(16)) {

            let objSeed = completarEmparejamientoInconcluso([...seeds], "16vos", (seeds.length + 1), 16)
            roundsBracketConstruido.push(objSeed)

            const octavos = generarBracketVacio("8vos", 17, 24)
            roundsBracketConstruido.push(octavos)
            const cuartos = generarBracketVacio("4tos", 25, 28)
            roundsBracketConstruido.push(cuartos)
            const semis = generarBracketVacio("Semi-Final", 29, 30)
            roundsBracketConstruido.push(semis)
            const final = generarBracketVacio("Final", 31, 31)
            roundsBracketConstruido.push(final)

        }

        //+8 equipos (max 16) y 8 emparejamientos
        if (cantEmparejamientos > parseFloat(4)
            && cantEmparejamientos <= parseFloat(8)) {

            let objSeed = completarEmparejamientoInconcluso([...seeds], "8vos", (seeds.length + 1), 8)
            roundsBracketConstruido.push(objSeed)

            const cuartos = generarBracketVacio("4tos", 9, 12)
            roundsBracketConstruido.push(cuartos)
            const semis = generarBracketVacio("Semi-Final", 13, 14)
            roundsBracketConstruido.push(semis)
            const final = generarBracketVacio("Final", 15, 15)
            roundsBracketConstruido.push(final)

        }

        //+4 Equipos (max 8) y 4 emparejamientos
        if (cantEmparejamientos > parseFloat(2)
            && cantEmparejamientos <= parseFloat(4)) {

            let objSeed = completarEmparejamientoInconcluso([...seeds], "4tos", (seeds.length + 1), 4)
            roundsBracketConstruido.push(objSeed)

            const semis = generarBracketVacio("Semi-Final", 5, 6)
            roundsBracketConstruido.push(semis)
            const final = generarBracketVacio("Final", 7, 7)
            roundsBracketConstruido.push(final)

        }

        //+2 Equipos (max 4) y 2 emparejamientos
        if (cantEmparejamientos > parseFloat(1)
            && cantEmparejamientos <= parseFloat(2)) {
            let objSeed = completarEmparejamientoInconcluso([...seeds], "Semi-Final", (seeds.length + 1), 2)
            roundsBracketConstruido.push(objSeed)

            const final = generarBracketVacio("Final", 3, 3)
            roundsBracketConstruido.push(final)
        }

        //+1 Equipos (max 2) y 1 emparejamientos
        if (cantEmparejamientos >= parseFloat(0)
            && cantEmparejamientos <= parseFloat(1)) {
            let objSeed = {
                title: "Final",
                seeds: seeds
            }
            roundsBracketConstruido.push(objSeed)
        }

        console.log("Brackets: ")
        console.log(roundsBracketConstruido)

        const objetoBD = {
            data: roundsBracketConstruido
        }

        guardarBracketsBD(objetoBD)
    }

    const guardarBracketsBD = async (objetoBD) => {
        const docRef = doc(db, 'brackets', props.idTorneo);
        await setDoc(docRef, objetoBD).then(() => {
            changeBooleanBracket()

        });

        window.location.reload();


    }

    const generarBracketVacio = (nombre, indexInicio, indexFin) => {

        let bracketVacio = {
            title: nombre,
            seeds: []
        }


        for (let i = indexInicio; i <= indexFin; i++) {

            let obj = {
                id: i,
                date: new Date().toDateString(),
                teams: [{ name: "N/A" }, { name: "N/A" }],
                imgEquipoA: linkImg,
                imgEquipoB: linkImg,
                puntajeEquipoA: 0,
                puntajeEquipoB: 0,
                resultadoEquipoA: 'N/A',
                resultadoEquipoB: 'N/A',
                ownerA: "",
                ownerB: "",
                estatus: 0
            }
            bracketVacio.seeds.push(obj)

        }

        return bracketVacio

    }

    const completarEmparejamientoInconcluso = (objSeed, nombre, indexInicio, indexFin) => {

        let bracketVacio = {
            title: nombre,
            seeds: objSeed
        }


        for (let i = indexInicio; i <= indexFin; i++) {

            let obj = {
                id: i,
                date: new Date().toDateString(),
                teams: [{ name: "N/A" }, { name: "N/A" }],
                imgEquipoA: linkImg,
                imgEquipoB: linkImg,
                puntajeEquipoA: 0,
                puntajeEquipoB: 0,
                resultadoEquipoA: 'N/A',
                resultadoEquipoB: 'N/A',
                ownerA: "",
                ownerB: "",
                estatus: 0
            }
            bracketVacio.seeds.push(obj)

        }

        return bracketVacio
    }

    useEffect(() => {

        if (props.roundsBracket.length > 0) {
            changeBooleanBracket()
        }

    }, []);

    return (
        <div>
            <div className="">
                {!booleanBrackets ?
                    <div>
                        {props.torneo.creador == window.accountId ?
                            <div>
                                <Button
                                    color="primary"
                                    type="button"
                                    onClick={construirEmparejamientos}>
                                    Comenzar
                                </Button>
                            </div>
                            :
                            <div>
                            </div>
                        }

                    </div>

                    :
                    <div>

                        {!edicion ?
                            <div>
                                <div>
                                    {props.torneo.creador == window.accountId ?
                                        <div>
                                            <Button
                                                color="primary"
                                                type="button"
                                                onClick={changeEdicion}>
                                                Administrar Resultados
                                            </Button>
                                            {props.ganador != null && props.ganador != "" ?
                                                <Button
                                                    color="primary"
                                                    type="button"
                                                    onClick={props.entregarPremios}>
                                                    Entregar Premios
                                                </Button>
                                                :
                                                <div></div>
                                            }
                                        </div>
                                        :
                                        <div>
                                        </div>
                                    }

                                </div>


                            </div>
                            :
                            <div>
                                <Button
                                    color="primary"
                                    type="button"
                                    onClick={changeEdicion}>
                                    Volver
                                </Button>
                            </div>
                        }

                        {!edicion ?
                            <Bracket rounds={props.roundsBracket} />
                            :
                            <AdministrarEmparejamiento
                                rounds={props.roundsBracket}
                                estatusRounds={props.estatusRounds}
                                idTorneo={props.idTorneo}
                                changeEdicion={changeEdicion} />
                        }

                    </div>
                }
            </div>
        </div>
    )
};

export default RenderBracket;