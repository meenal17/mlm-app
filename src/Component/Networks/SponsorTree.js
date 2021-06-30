import React from "react";
import MainTree from "./MainTree";
import {Link} from "react-router-dom";
const SponsorTree = () => {
  return (
    <Link to="/sponsortree">
      <>
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          SponsrTree View
        </div>
        <MainTree />
      </>
    </Link>
  );
};

export default SponsorTree;
