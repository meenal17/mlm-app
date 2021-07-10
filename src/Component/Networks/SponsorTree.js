import React from "react";
import MainTree from "./MainTree";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const SponsorTree = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/sponsortree">
      <>
        <div class="alert alert-light" style={{fontSize: 22 + "px"}}>
          {t(`sponsortree.55`)}
        </div>
        <MainTree />
      </>
    </Link>
  );
};

export default SponsorTree;
