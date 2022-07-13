import { Bracket, RoundProps } from 'react-brackets';
import React from "react";
import { useEffect, useState } from "react";
import {
    Button
} from "reactstrap";
import AdministrarEmparejamiento from './AdministrarEmparejamiento';

function RenderBracket(props){

    //Arreglos con la informacion de cada ronda del torneo
    //Estado
    const [edicion, setEdicion] = useState(false)
    const changeEdicion = () => {
        setEdicion(!edicion)
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

    return (
        <div>
            <div className="">
                {!edicion ? 
                        <div>
                            <Button 
                            color="primary" 
                            type="button"
                            onClick={changeEdicion}>
                                Administrar Resultados
                            </Button>
                            <br />
                            <br />
                        </div>
                    :
                        <Button 
                        color="primary" 
                        type="button"
                        onClick={changeEdicion}>
                            Volver
                        </Button>
                }
            </div>
            {!edicion ?
                <Bracket rounds={rounds} />
            :
                <AdministrarEmparejamiento rounds={rounds}/>
            }
        </div>
    )
};

export default RenderBracket;