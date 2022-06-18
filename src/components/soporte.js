import React, {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion'

const question__answer = [
    {
        question: "First Question",
        answer: "First Answer"
    },
    {
        question: "Second Question",
        answer: "Second Answer"
    },
    {
        question: "Third Question",
        answer: "Third Answer"
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


