import React, {useState} from "react";
import "../Header/style.css";
import {useTranslation} from "react-i18next";
const Countrylang = () => {
  const {t, i18n} = useTranslation();
  function handleClick(Languages) {
    i18n.changeLanguage(Languages);
  }
  return (
    <>
      <li class="dropdown">
        <a href="#" data-toggle="dropdown" class="dropdown-toggle width_flag">
          <img src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/en.png" />

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
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/en.png"
                className="imagestyle"
                onClick={() => handleClick("en")}
              />
              English
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('2');"
              className="text-dark"
              onClick={() => handleClick("sp")}
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
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ch.png"
                className="imagestyle"
                onClick={() => handleClick("jp")}
              />{" "}
              中文
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('4');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/de.png"
                className="imagestyle"
                onClick={() => handleClick("gm")}
              />{" "}
              Deutsch
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('5');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/pt.png"
                className="imagestyle"
                onClick={() => handleClick("pg")}
              />
              Português
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('6');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/fr.png"
                className="imagestyle"
                onClick={() => handleClick("fr")}
              />
              français
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('7');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/it.png"
                className="imagestyle"
                onClick={() => handleClick("il")}
              />{" "}
              italiano
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('8');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/tr.png"
                className="imagestyle"
                onClick={() => handleClick("tu")}
              />
              Türk
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('9');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/po.png"
                className="imagestyle"
                onClick={() => handleClick("po")}
              />{" "}
              polski
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('10');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ar.png"
                className="imagestyle"
                onClick={() => handleClick("ab")}
              />{" "}
              العربية
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('11');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/ru.png"
                className="imagestyle"
                onClick={() => handleClick("ru")}
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
