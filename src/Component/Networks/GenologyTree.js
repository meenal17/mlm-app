import React from "react";
import {Link} from "react-router-dom";
import MainTree from "./MainTree";
import {useTranslation} from "react-i18next";
const GenologyTree = () => {
  const {t, i18n} = useTranslation();
  return (
    <Link to="/genologytree">
      <>
        <div
          class="alert alert-light p-1"
          style={{fontSize: 22 + "px", height: "50px"}}
        >
          {t(`GenologyTree.54`)}
        </div>
        <MainTree />
      </>
    </Link>
  );
};

export default GenologyTree;
