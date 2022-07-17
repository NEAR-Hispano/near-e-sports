import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { Spinner } from 'react-bootstrap';
import {

  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";
import ProfileCard3 from "./cards/ProfileCard3";






class VerTorneos extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      torneos: null,
      torneos2: null,
      route: "/crearEquipos/",
      query:""
    }
    this.getTorneos = this.getTorneos.bind(this);
    this.buscador = this.buscador.bind(this);

  }

  async componentDidMount() {
    this.getTorneos()
  }

  componentWillUnmount() {

  }

  async getTorneos() {
    let arrayTorneos = []

    await getDocs(collection(db, "torneos")).then(data => {
      data.forEach(async element => {
        /*arrayTorneos.push(element.data())*/
        const idTorneo = {
          id: element.id
        }
        //
        let torneo = Object.assign(element.data(), idTorneo)
        // 

        arrayTorneos.push(torneo)
      })

      this.setState({
        torneos: arrayTorneos
      })
    })
  }


  async buscador(value) {
    console.log(value);
  }

  






  render() {

    return (
      <Container fluid>

        <Row xs={5} md={1} lg={1} xl={1} className='mt-4' >


          <h2 className="mb-4" style={{ textAlign: 'center', color: "white" }}>Torneos disponibles</h2>
        </Row>



        <Row className="justify-content-end">
          <Col md="2">

            <FormGroup>
              <InputGroup className=" input-group-alternative mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className=" ni ni-zoom-split-in"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className=" form-control-alternative"
                  placeholder="Search"
                  type="text"
                  onChange={event => this.setState({
                    query: event.target.value
                  })}
                  ></Input>
               </InputGroup>   
            </FormGroup>

          </Col>
        </Row>

        <Row>
          {this.state.torneos != null
            ?

            this.state.torneos.filter(torneo => {
              if (this.state.query === '') {
                return torneo;
              } else if (torneo.nombre.toLowerCase().includes(this.state.query.toLowerCase())) {
                return torneo;
              }
            }).map((torneo, index) => (
              
              <Col md="4" xs="12" sm="12">


                <ProfileCard3 torneo={torneo}  key={index}/>

              </Col>
            ))

            
            :
            <Spinner>
              <span className=" sr-only">Loading...</span>
            </Spinner>
          }
        </Row>


      </Container>


    );

  }
}
export default VerTorneos;



