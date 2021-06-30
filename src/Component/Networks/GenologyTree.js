import React from "react";
import {Link} from "react-router-dom";
import MainTree from "./MainTree";

const GenologyTree = () => {
  return (
    <Link to="/genologytree">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          GenologyTree
        </div>
        <MainTree />
      </>
    </Link>
  );
};

export default GenologyTree;
