import React from "react";
import "../Header/style.css";
const Countrylang = () => {
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
              />
              English
            </a>
          </li>
          <li>
            <a
              href="javascript:changeDefaultLanguage('2');"
              className="text-dark"
            >
              <img
                src="https://backoffice.infinitemlmsoftware.com/backoffice/public_html/images/flags/es.png"
                className="imagestyle"
              />{" "}
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
              />{" "}
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
              />{" "}
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
              />{" "}
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
