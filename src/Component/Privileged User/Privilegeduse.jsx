import React from "react";
import {Link} from "react-router-dom";
import PrivilegedTable from "./PrivilegedTable";
import UserActivity from "./UserActivity";
import {useTranslation} from "react-i18next";
const Privilegeduser = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/privilegeduser">
      <>
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          {t("PrivilegedUser.412")}
          <button
            type="button"
            class="btn btn-purple"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{float: "right"}}
          >
            {t("AddNew.413")}{" "}
            <i className="fa fa-plus" style={{color: "#fff"}} />
          </button>
        </div>
        <h5 className="ml-4 mt-2" style={{color: "grey"}}>
          <i
            class="fa fa-exclamation-circle bell mr-2 "
            style={{color: "#ffad31", fontSize: 25 + "px"}}
          />
          {t("onmodule.113")}
        </h5>
        <div className=" container-fluid">
          <div className="card">
            <div className="card-title">
              <ul class="nav nav-tabs p-2" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link linked active"
                    href="#profile"
                    role="tab"
                    data-toggle="tab"
                    style={{textTransform: "capitalize"}}
                  >
                    {t("UserList.414")}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link linked "
                    href="#buzz"
                    role="tab"
                    data-toggle="tab"
                    style={{textTransform: "capitalize"}}
                  >
                    {t("UserActivity.415")}
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="profile">
                <PrivilegedTable />
              </div>
              <div role="tabpanel" class="tab-pane fade" id="buzz">
                <UserActivity />
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default Privilegeduser;
