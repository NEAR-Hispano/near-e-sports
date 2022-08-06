import React from "react";

// reactstrap components
import {Card, CardBody, CardTitle } from "reactstrap";

// Core Components

function PricingCard3(props) {
    let { equipo } = props
  return (
    <>
      <Card
        className="card-pricing card-background"  md={12} lg={12} xl={12}
        style={{
          backgroundImage:
            "url(" + require("/assets/img/ill/pattern_pricing6.svg") + ")",
        }}
      >
        <CardBody className="pb-4">
          <h6 className="card-category text-danger text-uppercase"></h6>
          <CardTitle className="text-default" tag="h1">
            {equipo.name}
          </CardTitle>
          <ul>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm">{equipo.user1}</span>

                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">{equipo.user2}</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">{equipo.user3}</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">{equipo.user4}</span>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <div>
                  <div className="icon icon-xs icon-shape icon-shape-info shadow rounded-circle">
                    <i className="ni ni-single-02"></i>
                  </div>
                </div>
                <div>
                  <span className="pl-2 text-sm text-whit">{equipo.user5}</span>
                </div>
              </div>
            </li>
          </ul>
        </CardBody>
      </Card>
    </>
  );
}

export default PricingCard3;
