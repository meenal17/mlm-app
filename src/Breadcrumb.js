import React from "react";
import AmountinfoCard from "./Component/Dashboard/AmountinfoCard";
function Breadcrumb() {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
        Dashboard
      </div>

      {/* breadcrumb   */}
      <AmountinfoCard />
    </>
  );
}
export default Breadcrumb;
