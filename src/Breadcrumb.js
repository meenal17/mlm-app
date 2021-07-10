import React from "react";
import {Link} from "react-router-dom";
import AmountinfoCard from "./Component/Dashboard/AmountinfoCard";
import {useTranslation} from "react-i18next";
function Breadcrumb() {
  const {t, i18n} = useTranslation();
  // function handleClick(Languages) {
  //   i18n.changeLanguage(Languages);
  // }
  return (
    <Link to="/">
      <>
        {/* <!-- breadcrumb --> */}
        <div
          class="alert alert-light m "
          style={{fontSize: 22 + "px", height: "50px", width: "auto"}}
        >
          {t(`dashboard.1`)}
        </div>

        {/* breadcrumb   */}
        <AmountinfoCard />
      </>
    </Link>
  );
}
export default Breadcrumb;
