import React from "react";

const Currency = () => {
  return (
    <div>
      <li class="dropdown open">
        <a
          href="#"
          data-toggle="dropdown"
          class="dropdown-toggle text-dark"
          aria-expanded="true"
        >
          $<span class="visible-xs-inline"></span>
          <b class="caret"></b>
        </a>
        {/* <!-- dropdown --> */}
        <ul class="dropdown-menu animated fadeInRight p-2 ">
          <li>
            <a href="javascript:switchCurrency('22');" className="text-dark">
              ฿Bitcoin
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('33');" className="text-dark">
              ¥Chinese Yuan
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('47');" className="text-dark">
              €Euro
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('50');" className="text-dark">
              £British Pound Sterling
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('67');" className="text-dark">
              ₹Indian Rupee
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('116');" className="text-dark">
              ₱Philippine Peso
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('123');" className="text-dark">
              ₽Russian Ruble
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('125');" className="text-dark">
              ﷼Saudi Riyal
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('150');" className="text-dark">
              $United States Dollar
            </a>
          </li>
          <li>
            <a href="javascript:switchCurrency('165');" className="text-dark">
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
