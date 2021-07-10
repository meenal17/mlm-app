import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {useTranslation} from "react-i18next";
const Card2 = () => {
  const {t, i18n} = useTranslation();
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
                      {t("ActiveEpin.152")}
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
                      style={{
                        float: "left",
                        fontSize: "18px",
                        display: "inline-flex",
                      }}
                    >
                      {t("Epin.153")}
                      {t("Balance.115")}
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
                      {t("pending.5")}&nbsp;{t("Request.144")}
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

export default Card2;
