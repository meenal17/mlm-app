import React from "react";
import {Link} from "react-router-dom";
import MUIRichTextEditor from "mui-rte";
import {useTranslation} from "react-i18next";
const save = (data) => {
  console.log(data);
};
const Compose = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className=" mr-4 ml-4 mt-3 pb-5 " style={{marginBottom: "10px"}}>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>{t("SingleUser.406")}</option>
          <option>{t("AllUser.407")}</option>
        </select>
        <label className="mt-3" style={{color: "grey"}}>
          {t("SingleUser.406")}
          <span className="ml-1" style={{color: "red"}}>
            *
          </span>
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
        <label className="mt-3" style={{color: "grey"}}>
          {t("MainContent.408")}
          <span className="ml-1" style={{color: "red"}}>
            *
          </span>
        </label>
        <input class="form-control" type="text" placeholder="Default input" />
        <div className="">
          <MUIRichTextEditor
            label="Type something here..."
            onSave={save}
            inlineToolbar={true}
          />
        </div>
        <div>
          <div className="btn btn-purple" style={{marginTop: "15%"}}>
            {t("SendMessages.409")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;
