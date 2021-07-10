import React from "react";
import {useTranslation} from "react-i18next";
const Transaction = () => {
  function TableComponent(props = {}) {
    const {t, i18n} = useTranslation();

    return (
      <table className="table">
        <thead className="d-none d-md-table-header-group">
          <tr>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {t("Memeber Name.74")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {t("Category.94")}
            </th>
            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {t("Amount.95")}{" "}
            </th>

            <th
              className="d-sm-none d-md-table-cell"
              style={{
                fontSize: 15 + "px",
                color: "black",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {t("Transaction Date.96")}{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
          <RowComponent
            image=""
            MemberName="John"
            Catogory="Registration Fee"
            Amount="€ 41.83"
            date="15 Feb 2021 - 06:49:31 PM"
          />
        </tbody>
      </table>
    );
  }

  function RowComponent(props = {}) {
    return (
      <tr>
        <td className="d-md-none d-table-cell">
          <div className="card">
            <div className="card-body">
              <strong class="card-title">
                <img
                  className="mr-3"
                  src={
                    process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"
                  }
                  alt="image not found"
                  style={{height: 45 + "px", width: 45 + "px"}}
                />
                {props.MemberName}
              </strong>
              <p className="card-text">
                {t("Category.94")}:{props.Catogory}
                <br />
                {t("Amount.95")}:{props.Amount}
                <br />
                {t("Joining Date.76")}: {props.date}
              </p>
              <i
                className="fa fa-sitemap icon mt-3 ml-4 p-2"
                style={{fontSize: 15 + "px"}}
              ></i>
            </div>
          </div>
        </td>

        <td className="d-none d-md-table-cell">
          {" "}
          <img
            className=" mr-3"
            src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
            alt="image not found"
            style={{height: 45 + "px", width: 45 + "px"}}
          />
          {props.MemberName}
        </td>
        <td className="d-none d-md-table-cell">{props.Catogory}</td>
        <td className="d-none d-md-table-cell">{props.Amount}</td>
        <td className="d-none d-md-table-cell">{props.date}</td>
      </tr>
    );
  }
  const {t, i18n} = useTranslation();
  return (
    <div class="card mr-2 ml-2">
      <div className="card-body">
        <div className="container">
          <TableComponent />
          <div className="row">
            <div className="col-lg-4 col-sm-3 mt-3">
              <h6 style={{color: "grey"}}>
                {t("Showing 1 to 10 of 1,881 entries.97")}
              </h6>
            </div>
            <div className="col-lg-2 col-sm-3">
              <div class="form-group">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>{t("Row Pages.98")}</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      {t("Previous.99")}
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      {t("Next.100")}{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
