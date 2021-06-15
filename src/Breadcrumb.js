import React from "react";
import AmountinfoCard from "./Component/Dashboard/AmountinfoCard";
// import Rabc as  Row   from "./Component/Header/Row";
function Breadcrumb() {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
        Dashboard
      </div>
      {/* <Rabc /> */}
      {/* breadcrumb   */}
      <AmountinfoCard />
    </>
  );
}
export default Breadcrumb;
