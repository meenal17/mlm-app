import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const card = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <div className="img-wrapper d-flex justify-content-between">
                  <div className="img-parent">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/E-Wallet-w.png"
                      }
                      alt="image not found"
                    />
                  </div>
                  <div className="text-wrapper ">
                    <div
                      className=" text-dark"
                      style={{float: "left", fontSize: "18px"}}
                    >
                      Active E-pin
                      <br />
                      <h7>0</h7>
                    </div>
                  </div>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <div className="img-wrapper d-flex justify-content-between">
                  <div className="img-parent" style={{background: "#4db8ff"}}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/income-w.png"
                      }
                      alt="image not found"
                    />
                  </div>
                  <div className="text-wrapper ">
                    <div
                      className=" text-dark"
                      style={{float: "left", fontSize: "18px"}}
                    >
                      E-pin&nbsp;Balance
                      <br />
                      <h7>$0.00</h7>
                    </div>
                  </div>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <div className="img-wrapper d-flex justify-content-between">
                  <div className="img-parent" style={{background: "#b366ff"}}>
                    <img
                      className="mr-2"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/dashboard/Bonus-w.png"
                      }
                      alt="image not found"
                    />
                  </div>
                  <div className="text-wrapper ">
                    <div
                      className=" text-dark"
                      style={{float: "left", fontSize: "18px"}}
                    >
                      Pending&nbsp;Request
                      <br />
                      <h7>1</h7>
                    </div>
                  </div>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default card;
