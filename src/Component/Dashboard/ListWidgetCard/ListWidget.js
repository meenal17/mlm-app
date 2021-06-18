import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
function ListWidget() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Body>
              <div
                className="img-wrapper d-flex mr-0"
                style={{justifyContent: "space-between"}}
              >
                <div className="img-parent-new ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                    }
                    alt="image not found"
                  />
                </div>
                <div className="text-wrapper ml-5">
                  <p className="">YourFirstName</p>
                  <small>DEMOR7P</small>
                </div>
                <div className="text-wrapper ml-4 ">
                  <p className="">€87.70</p>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div
                className="img-wrapper d-flex mr-0"
                style={{justifyContent: "space-between"}}
              >
                <div className="img-parent-new ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                    }
                    alt="image not found"
                  />
                </div>
                <div className="text-wrapper ml-5">
                  <p className="">YourFirstName</p>
                  <small>DEMOR7P</small>
                </div>
                <div className="text-wrapper ml-4">
                  <p className="">€87.70</p>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div
                className="img-wrapper d-flex mr-0"
                style={{justifyContent: "space-between"}}
              >
                <div className="img-parent-new ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                    }
                    alt="image not found"
                  />
                </div>
                <div className="text-wrapper ml-5">
                  <p className="d-flex ">YourFirstName</p>
                  <small>DEMOR7P</small>
                </div>

                <div className="text-wrapper text-wrapper ml-4">
                  <p className="d-flex">€87.70</p>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div
                className="img-wrapper d-flex mr-0"
                style={{justifyContent: "space-between"}}
              >
                <div className="img-parent-new ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                    }
                    alt="image not found"
                  />
                </div>
                <div className="text-wrapper ml-5">
                  <p className="d-flex ">YourFirstName</p>
                  <small>DEMOR7P</small>
                </div>

                <div className="text-wrapper text-wrapper ml-4">
                  <p className="d-flex">€87.70</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default ListWidget;
