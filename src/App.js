import React from "react";
import Lefside from "./Component/LFTsideBAR/Lefside";
function App() {
  return (
    <>
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
          <Lefside />
        </section>
      </div>
      {/* <Test /> */}
    </>
  );
}
export default App;
