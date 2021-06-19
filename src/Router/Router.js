import React from "react";
import Sidebar from "../Component/RTL/SideBar";
import LefSide from "../Component/LFTsideBAR/Lefside";
export default function Router() {
  return (
    <div class="page">
      <section>
        <div className="col-lg-12 pl-0 pr-0">
          <div class="page">
            <LefSide />
          </div>
        </div>
      </section>
    </div>
  );
}
