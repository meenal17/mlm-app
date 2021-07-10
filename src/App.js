import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CustomRouter from "./Router/Router";
function App() {
  return (
    <>
      <Router>
        {/* <!-- Loader --> */}
        {/* <div id="global-loader" class="light-loader">
          <img
            src="../../assets/img/loaders/loader.svg"
            class="loader-img"
            alt="Loader"
          />
        </div> */}

        <CustomRouter />
      </Router>
    </>
  );
}
export default App;
