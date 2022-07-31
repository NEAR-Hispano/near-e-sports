import React, {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion'

const question__answer = [
    {
        question: "¿Donde puedo crearme una wallet de testnet?",
        answer: "Puedes crearte una wallet de near en la testnet en el siguiente url: https://wallet.testnet.near.org"
    },
    {
        question: "¿Que es Near Tournaments Esports?",
        answer: "Near Tournaments Esports es una Dapp que te permite participar y crear torneos de videojuegos esports a traves de los contratos inteligentes y la blockchain de Near Protocol"
    },
    {
        question: "¿Sigue en desarollo Near tournaments Esports?",
        answer: "Si actualmente lo que estas viendo es el MVP, proximamente sacaremos versiones mas mejoradas "
    },
]
function Soporte() {
    const [qa, setQA] = useState(question__answer);
    return ( 
        <>
            <h1 className="text-blanco text-center mt-3">Preguntas mas comunes</h1>
            <Accordion className="soporte__container">
                {qa.map((object,index) => {
                    return(
                        <>
                        {index !== qa.length ? 
                        <Accordion.Item eventKey={index} className="accordion__item">
                            <Accordion.Header>{object.question}</Accordion.Header>
                            <Accordion.Body>
                                {object.answer}
                            </Accordion.Body>
                        </Accordion.Item>:
                        <Accordion.Item eventKey={index} className="accordion__last__item">
                            <Accordion.Header>{object.question}</Accordion.Header>
                            <Accordion.Body>
                                {object.answer}
                            </Accordion.Body>
                        </Accordion.Item>
                        }
                        </>
                        
                    )
                })}
            </Accordion>
        </>
     );
}

export default Soporte;


