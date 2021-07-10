import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MemberlistTabs from "../Profile Mangement/Member-list-Tabs";
import Profilememebertable2 from "./Profile-memeber-table2";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function MemberList() {
  const {t, i18n} = useTranslation();

  return (
    <>
      <Link to="/MemberList">
        <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
          {t("memberlist.31")}
        </div>
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
                    <div className="text-wrapper p-1 mr-4">
                      <h3 className="">{t("TotalJoinings.315")}</h3>
                      <span>540</span>
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
                    <div className="text-wrapper p-1  mr-4">
                      <h3 className="">{t("newJoinigs.316")}</h3>
                      <span>125</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* tabs */}
        <div className="card p-2 mr-3 ml-3">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link  linked active"
                href="#profile"
                role="tab"
                data-toggle="tab"
              >
                {t("memberlist.31")}
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link linked"
                linked
                href="#buzz"
                role="tab"
                data-toggle="tab"
              >
                {t("PendingUpgrades.317")}
              </a>
            </li>
          </ul>

          {/* <!-- Tab panes --> */}
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="profile">
              <MemberlistTabs />
            </div>
            <div role="tabpanel" class="tab-pane fade" id="buzz">
              <Profilememebertable2 />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MemberList;
