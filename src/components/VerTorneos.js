import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { Container, Row, Col, Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CrearEquipo from "./CrearEquipo";
import ProfileCard3 from "./cards/ProfileCard3";


class VerTorneos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      torneos: null,
      torneos2: null,
      route: "/crearEquipos/"
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

    const torneos = await window.contract.get_tournaments()
    console.log("Torneos blockchain", torneos)


  }

  render() {

    return (
      <div>

        <Row xs={5} md={1} lg={1} xl={1} className='mt-4' >
          <h2 className="mb-4" style={{ textAlign: 'center', color:"white" }}>Torneos disponibles</h2>
        </Row>
        
          <Row style={{marginRight:"200px", marginLeft:"200px"}}>
            {this.state.torneos != null
              ?
              this.state.torneos.map(torneo => (


                <Col md="4" xs="12" sm="12">

            
                  <ProfileCard3 torneo={torneo}/>

                </Col>


              ))
              :
              <Spinner>
        <span className=" sr-only">Loading...</span>
               </Spinner>
            }
            </Row>
        
      
      </div >


    );

  }
}
export default VerTorneos;



