import React from "react";
// JavaScript library for creating fancy carousels like components
import Glide from "@glidejs/glide";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import lolimage from '../assets/lol.jpg'
import rocket from '../assets/rocketleague.jpg'
import csgo from '../assets/csgo.jpg'
import fortnite from '../assets/fortnite.jfif'
import mario from '../assets/mario.jfif'

function Home(){
    React.useEffect(() => {
      new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        focusAt: 2,
        perTouch: 1,
        perView: 4,
      }).mount();
    }, []);
    return (
      <>    
      <header className="header-3 bg-dark">
          <div className="page-header header-filter">
            <div className="content-center">
              <Row>
                <Col className="mx-auto positioned" lg="5" md="8" xs="12">
                  <h4 className="title text-white text-uppercase ml-0">
                    La primera plataforma de torneos en la blockchain
                  </h4>
                  <div className="info info-horizontal ml-0">
                    <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                      <i className="ni ni-active-40"></i>
                    </div>
                    <div className="description">
                      <h6 className="info-title text-uppercase text-white pl-0">
                        Crea Torneos
                      </h6>
                      <p className="text-white opacity-8" >
                        Crea tu propios torneos en cualquier videojuegos y solo encargate de la administracion! El resto se encargara el contrato inteligente
                      </p>
                    </div>
                    
                  </div>
                  <div className="info info-horizontal ml-0">
                    <div className="icon icon-shape bg-white shadow rounded-circle text-default">
                      <i className="ni ni-trophy"></i>
                    </div>
                    <div className="description">
                      <h6 className="info-title text-uppercase text-white pl-0">
                        Participa y gana!
                      </h6>
                      <p className="text-white opacity-8" >
                        Registrate y participa en torneos donde los premios seran otorgados en forma de nft y cryptomonedas de una manera muy segura!
                      </p>
                    </div>
                  </div>
                
                </Col>
                <Col md="12">
                  <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        <li className="glide__slide">
                          <img
                            alt="..."
                            height="500"
                            src={(lolimage)}
                            width="450"
                          ></img>
                        </li>
                        <li className="glide__slide">
                          <img
                            alt="..."
                            height="500"
                            src={(rocket)}
                            width="450"
                          ></img>
                        </li>
                        <li className="glide__slide">
                          <img
                            alt="..."
                            height="500"
                            src={(csgo)}
                            width="450"
                          ></img>
                        </li>
                        <li className="glide__slide">
                          <img
                            alt="..."
                            height="500"
                            src={(fortnite)}
                            width="450"
                          ></img>
                        </li>
                        <li className="glide__slide">
                          <img
                            alt="..."
                            height="500"
                            src={(mario)}
                            width="450"
                          ></img>
                        </li>
                      </ul>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                      <button
                        className="glide__arrow glide__arrow--left"
                        data-glide-dir="<"
                      >
                        <i className="ni ni-bold-left"></i>
                      </button>
                      <button
                        className="glide__arrow glide__arrow--right"
                        data-glide-dir=">"
                      >
                        <i className="ni ni-bold-right"></i>
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          </header>
      
      </>
    );
    }
  
  export default Home;
  