import React from "react";
import "../Networks/style.css";
const MainTree = () => {
  return (
    <>
      <div className="container">
        <div className="tree-body ">
          <div className="tree">
            <ul>
              <li>
                <a href="">
                  <img
                    className=""
                    src={"/assets/img/dashboard/binaryuser.png"}
                    alt="image not found"
                  />
                  <span className="content"> Main parent</span>
                </a>
                <ul>
                  <li>
                    <a href="">
                      <img
                        className=""
                        src={"/assets/img/dashboard/binaryuser.png"}
                        alt="image not found"
                      />
                      <span className="content">Grandchild</span>
                    </a>
                    <ul>
                      <li>
                        <a href="">
                          <img
                            className=""
                            src={"/assets/img/dashboard/binaryuser.png"}
                            alt="image not found"
                          />
                          <span className="content">Great Grandchild</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className=""
                            src={"/assets/img/dashboard/binaryuser.png"}
                            alt="image not found"
                          />
                          <span className="content">Great Grandchild</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className=""
                        src={"/assets/img/dashboard/binaryuser.png"}
                        alt="image not found"
                      />
                      <span className="content">Grandchild</span>
                    </a>
                    <ul>
                      <li>
                        <a href="">
                          <img
                            className=""
                            src={"/assets/img/dashboard/binaryuser.png"}
                            alt="image not found"
                          />
                          <span className="content">Great Grandchild</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img
                            className=""
                            src={"/assets/img/dashboard/binaryuser.png"}
                            alt="image not found"
                          />
                          <span className="content">Great Grandchild</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className=""
                        src={"/assets/img/dashboard/binaryuser.png"}
                        alt="image not found"
                      />
                      <span className="content">Grandchild</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTree;
