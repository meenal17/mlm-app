import React from "react";
import {Link} from "react-router-dom";
import AmountinfoCard from "./Component/Dashboard/AmountinfoCard";
function Breadcrumb() {
  return (
    <Link to="/">
      <>
        {/* <!-- breadcrumb --> */}
        <div
          class="alert alert-light m "
          style={{fontSize: 22 + "px", height: "50px", width: "auto"}}
        >
          Dashboard
        </div>

        {/* breadcrumb   */}
        <AmountinfoCard />
      </>
    </Link>
  );
}
export default Breadcrumb;
