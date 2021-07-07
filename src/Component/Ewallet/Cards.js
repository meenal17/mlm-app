import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
function Cards() {
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
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
                  <h3 className="">€14.61K</h3>
                  <span>EwalletBalance</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}>
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
                  <h3 className="">€14.61K</h3>
                  <span>Income</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}>
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
                  <h3 className="">€14.61K</h3>
                  <span>Bonus</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Card>
          {/* <Card.Body>
          <div className="img-wrapper d-flex justify-content-between">
            <div className="img-parent" style={{background: "#df80ff"}}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/dashboard/Paid-w.png"
                }
                alt="image not found"
              />
            </div>
            <div className="text-wrapper ">
              <h3 className="">€14.61K</h3>
              <span>Paid</span>
            </div>
          </div>
        </Card.Body> */}
        </Card>
        <Col sm={3}>
          <Card>
            <Card.Body>
              <div className="img-wrapper d-flex justify-content-between">
                <div className="img-parent " style={{background: "#ff8080"}}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/dashboard/E-Wallet-w.png"
                    }
                    alt="image not found"
                  />
                </div>
                <div className="text-wrapper ">
                  <h3 className="">€14.61K</h3>
                  <span>Pending</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
