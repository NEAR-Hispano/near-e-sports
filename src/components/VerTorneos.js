import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CrearEquipo from "./CrearEquipo";

class VerTorneos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      torneos: null,
      torneos2: null,
      route:"/crearEquipos/"
    }
    this.getTorneos = this.getTorneos.bind(this);
    this.getTorneos2 = this.getTorneos2.bind(this);
  }

  componentDidMount() {
    this.getTorneos()
    this.getTorneos2()
  }

  componentWillUnmount() {
  }

  async getTorneos() {
    let arrayTorneos = []
    this.state.torneos = await getDocs(collection(db, "torneos")).then(data => {
      data.forEach(element => {
        /*arrayTorneos.push(element.data())*/
        const idTorneo = {
          id: element.id
        }
        let torneo = Object.assign(element.data(), idTorneo)
        arrayTorneos.push(torneo)
      })
      this.setState({
        torneos: arrayTorneos  
      })
    })
  }

  async getTorneos2() {

    const torneos =  await window.contract.get_tournaments()
    console.log("Torneos blockchain",torneos)
    

  }

  render() {

    return (
      
      

      <div className="text-blanco mt-5 mb-5 m-5">
      <Row md={12} lg={12} xl={12} className="home__container mt-5 mb-5">  

      <Row xs={5} md={1} lg={1} xl={1} className='mt-4' >
              <h2 style={{textAlign: 'center'}}>Torneos disponibles</h2>
            </Row>
              {this.state.torneos != null
          ?
          this.state.torneos.map(torneo => (


            <Col md={4} lg={4} xl={4} className="home__container mb-5">  
            
               

            <Card className="bg-dark text-white" style={{ width: '25rem' }}>

              <Card.Body>
                
                <Card.Body className="container__img">
                      <img width={"200"} height={"200"} src={torneo.imgUrl}/>
                </Card.Body>
                <Card.Title className="mt-4" >{torneo.nombre}</Card.Title>
                <b>Plataforma: </b><a>{torneo.plataforma}</a>
                <br />
                <b>Costo: </b><a>{torneo.participantes} Nears</a>
                <br />
                <b>Descripción: </b><a>{torneo.descripcion}</a>
                <br />
                <b>Fecha: </b><a>{torneo.fechaInicio}</a>
                <br />
                <Row className="justify-content-md-center  mt-3 mb-3">
                <Link to={this.state.route+torneo.id}> 
                <Button variant="danger">Ver / Inscribirse</Button> 
                </Link>
                </Row>
              </Card.Body>

            </Card>
            </Col>
        
          ))
          :
          <div>No renderice nada</div>
        }
      </Row>  
      </div>
       
     
    );

  }
}
export default VerTorneos;