import React, {useState} from "react";

const Currency = () => {
  const [currency, setcurrency] = useState("$");
  return (
    <div>
      <li class="dropdown open">
        <a
          href="#"
          data-toggle="dropdown"
          class="dropdown-toggle text-dark"
          aria-expanded="true"
        >
          {currency} <span class="visible-xs-inline"></span>
          <b class="caret"></b>
        </a>
        {/* <!-- dropdown --> */}
        <ul class="dropdown-menu animated fadeInRight p-2 ">
          <li>
            <a
              href="javascript:switchCurrency('22');"
              className="text-dark"
              onClick={() => {
                setcurrency("฿");
              }}
            >
              ฿Bitcoin
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('33');"
              className="text-dark"
              onClick={() => {
                setcurrency("¥");
              }}
            >
              ¥Chinese Yuan
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('47');"
              className="text-dark"
              onClick={() => {
                setcurrency("€");
              }}
            >
              €Euro
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('50');"
              className="text-dark"
              onClick={() => {
                setcurrency("£");
              }}
            >
              £British Pound Sterling
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('67');"
              className="text-dark"
              onClick={() => {
                setcurrency("₹");
              }}
            >
              ₹Indian Rupee
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('116');"
              className="text-dark"
              onClick={() => {
                setcurrency("₱");
              }}
            >
              ₱Philippine Peso
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('123');"
              className="text-dark"
              onClick={() => {
                setcurrency("₽");
              }}
            >
              ₽Russian Ruble
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('125');"
              className="text-dark"
              onClick={() => {
                setcurrency("﷼");
              }}
            >
              ﷼Saudi Riyal
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('150');"
              className="text-dark"
              onClick={() => {
                setcurrency("$");
              }}
            >
              $United States Dollar
            </a>
          </li>
          <li>
            <a
              href="javascript:switchCurrency('165');"
              className="text-dark"
              onClick={() => {
                setcurrency("R");
              }}
            >
              RSouth African Rand
            </a>
          </li>
        </ul>
        {/* <!-- / dropdown --> */}
      </li>
    </div>
  );
};

export default Currency;
