import React from "react";
import {Link} from "react-router-dom";
import "./Networkstyle.css";
import {Table, Thead, Tbody, Tr, Th, Td} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {useTranslation} from "react-i18next";
function DownloadMember() {
  const {t, i18n} = useTranslation();
  return (
    <>
      <Link to="/DownloadMember">
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          {t("DownloadMember.62")}
        </div>

        <div className="card ml-2 p-0 mr-2">
          <div className="card-body">
            <div class="row">
              <div className=" col-lg-3 ">
                <div className="card-text download-Content ">
                  <div class="textpurple">{t("Total DownLine Members.63")}</div>
                  <div class="textpurple mt-2">258</div>
                </div>
              </div>
              <div className=" col-lg-2">
                <div className="card-text download-Content2">
                  <div class="textgreen">{t("Total Levels.64")}</div>
                  <div class="textgreen">76</div>
                </div>
              </div>
              <div className=" col-lg-2 col-sm-4">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">
                      {t("username.65")}
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </form>
              </div>
              <div className=" col-lg-2 col-sm-3">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      {t("levels.66")}
                    </label>
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>All</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="col-lg-1 mt-4 ml-0">
                <button className="btn btn-outline-primary">
                  {t("search.13")}
                </button>
              </div>
              <div className="col-lg-1 mt-4 ">
                <button className="btn btn-outline-info">
                  {t("reset.67")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card ml-2 p-0 mr-2">
          <div className="card-body">
            <div class="row">
              <div className=" col-lg-12 col-sm-4">
                <Table>
                  <Thead>
                    <Tr style={{borderBottom: "1px solid grey"}}>
                      <Th
                        style={{
                          fontSize: 15 + "px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {t("member name.68")}
                      </Th>
                      <Th
                        style={{
                          fontSize: 15 + "px",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {t("placement.69")}
                      </Th>
                      <Th
                        style={{
                          fontSize: 15 + "px",
                          color: "black",
                          fontWeight: "bold",
                          fontWeight: "bold",
                        }}
                      >
                        {t("sponsor.70")}
                      </Th>
                      <Th
                        style={{
                          fontSize: 15 + "px",
                          color: "black",
                          fontWeight: "bold",
                          fontWeight: "bold",
                        }}
                      >
                        {t("level.71")}
                      </Th>
                      <Th
                        style={{
                          fontSize: 15 + "px",
                          color: "black",
                          fontWeight: "bold",
                          fontWeight: "bold",
                        }}
                      >
                        {t("icon.72")}
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                    <Tr>
                      <td>
                        <img
                          className="mr-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/dashboard/user.jpg"
                          }
                          alt="image not found"
                        />
                        John
                      </td>
                      <td>binaryaddon</td>
                      <td>binaryaddon</td>
                      <td>1</td>

                      <i
                        className="fa fa-sitemap icon mt-3 ml-4 p-2"
                        style={{fontSize: 15 + "px"}}
                      ></i>
                    </Tr>
                  </Tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default DownloadMember;
