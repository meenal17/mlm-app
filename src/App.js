import React from "react";
import Lefside from "./Component/LFTsideBAR/Lefside";
import Header from "./Component/Header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Description from "./Component/Dashboard/Description";
import DownloadMember from "./Component/Networks/DownloadMember";
function App() {
  return (
    <>
      <Router>
        {/* <!-- Loader --> */}
        <div id="global-loader" class="light-loader">
          <img
            src="../../assets/img/loaders/loader.svg"
            class="loader-img"
            alt="Loader"
          />
        </div>
        {/* <!-- /Loader --> */}

        <div class="page">
          <section>
            {/* <Header /> */}
            <div className="col-lg-12 pl-0 pr-0">
              <Lefside />
            </div>

            <Switch>
              {/* <Route exact path="/downlinemember" componen={DownloadMember} /> */}
              {/* <Route path="/" exact component={Header} />  */}
              {/* <Route path="/widgets" exact component={Widgets} /> */}
            </Switch>
            {/* <div className="col-sm-12 col-lg-12 ">
              <Description />
            </div> */}
          </section>
        </div>
        {/* <Test /> */}
      </Router>
    </>
  );
}
export default App;
