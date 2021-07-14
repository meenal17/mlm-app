import React, {useState} from "react";
import "../Header/style.css";
import {useTranslation} from "react-i18next";
const Countrylang = () => {
  const {t, i18n} = useTranslation();
  const [flag, setflag] = useState(
    "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/en.png"
  );
  function handleClick(Languages) {
    i18n.changeLanguage(Languages);
  }
  return (
    <>
      <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle width_flag">
          <img src={flag} />

          <span class="" style={{display: "none"}}>
            Change your language
          </span>
          <b class="caret" style={{color: "black !important"}}></b>
        </a>

        <ul class="dropdown-menu animated fadeInRight p-2">
          <li>
            <a
              href="javascript:changeDefaultLanguage('1'); "
              className="text-dark"
              onClick={() => {
                handleClick("en");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/en.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/en.png"
                className="imagestyle"
              />
              English
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('2');"
              className="text-dark"
              onClick={() => {
                handleClick("sp");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/es.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/es.png"
                className="imagestyle"
              />
              Español
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('3');"
              className="text-dark"
              onClick={() => {
                handleClick("jp");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ch.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ch.png"
                className="imagestyle"
              />{" "}
              中文
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('4');"
              className="text-dark"
              onClick={() => {
                handleClick("gm");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/de.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/de.png"
                className="imagestyle"
              />{" "}
              Deutsch
            </a>
          </li>

          <li>
            <a
              href="javascript:changeDefaultLanguage('6');"
              className="text-dark"
              onClick={() => {
                handleClick("fr");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/fr.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/fr.png"
                className="imagestyle"
              />
              français
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('7');"
              className="text-dark"
              onClick={() => {
                handleClick("il");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/it.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/it.png"
                className="imagestyle"
              />{" "}
              italiano
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('8');"
              className="text-dark"
              onClick={() => {
                handleClick("tu");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/tr.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/tr.png"
                className="imagestyle"
              />
              Türk
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('9');"
              className="text-dark"
              onClick={() => {
                handleClick("po");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/po.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/po.png"
                className="imagestyle"
              />{" "}
              polski
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('10');"
              className="text-dark"
              onClick={() => {
                handleClick("ab");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ar.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ar.png"
                className="imagestyle"
              />{" "}
              العربية
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('11');"
              className="text-dark"
              onClick={() => {
                handleClick("ru");
                setflag(
                  "https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ru.png"
                );
              }}
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ru.png"
                className="imagestyle"
              />{" "}
              русский
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Countrylang;
