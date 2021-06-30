import React from "react";

const InboxTable = () => {
  return (
    <>
      <div className="">
        <h5 className="ml-2" style={{color: "rgb(168, 165, 165)"}}>
          <i
            className="fas fa-refresh p-2 mb-2"
            style={{border: "1px solid rgb(224, 218, 218);"}}
          ></i>
        </h5>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            {/* <h5 className="ml-2" style={{color: "grey"}}>
              <i
                className="fas fa-refresh p-2"
                style={{border: "1px solid grey"}}
              ></i>
            </h5> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                className="mr-3"
                src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
                alt="image not found"
                style={{height: 45 + "px", width: 45 + "px"}}
              />
              xxxxxx ttttt (DEMOR3M)
            </td>
            <td>
              2021-03-05 23:30:29
              <i className="fa fa-trash-o ml-2" style={{color: "red"}}></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="mr-3"
                src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
                alt="image not found"
                style={{height: 45 + "px", width: 45 + "px"}}
              />
              xxxxxx ttttt (DEMOR3M)
            </td>
            <td>
              2021-03-05 23:30:29
              <i className="fa fa-trash-o ml-2" style={{color: "red"}}></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="mr-3"
                src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
                alt="image not found"
                style={{height: 45 + "px", width: 45 + "px"}}
              />
              xxxxxx ttttt (DEMOR3M)
            </td>
            <td>
              2021-03-05 23:30:29
              <i className="fa fa-trash-o ml-2" style={{color: "red"}}></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="mr-3"
                src={process.env.PUBLIC_URL + "/assets/img/dashboard/user.jpg"}
                alt="image not found"
                style={{height: 45 + "px", width: 45 + "px"}}
              />
              xxxxxx ttttt (DEMOR3M)
            </td>
            <td>
              2021-03-05 23:30:29
              <i className="fa fa-trash-o ml-2" style={{color: "red"}}></i>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default InboxTable;
