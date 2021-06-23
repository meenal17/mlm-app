import React from "react";

function Cards() {
  return (
    <div>
      <div className="new-dashboard-tile-business-all justify-content-center">
        <div class="new-dashboard-tile-business-all justify-content-center">
          <div class="new-dashboard-tile-ewallet">
            <div class="tile-new-dashboard-w-wallet d-flex">
              <div class="e-wallet-image-left green-bg-new">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/dashboard/E-Wallet-w.png"
                  }
                  alt="image not found"
                />
              </div>
              <div class="e-wallet-content-right" title="€ 50,903.27 ">
                <h4>Income</h4>
                <span id="summary_income"> € 50.90K </span>
              </div>
            </div>
          </div>
          <div class="new-dashboard-tile-ewallet">
            <div class="tile-new-dashboard-w-wallet d-flex">
              <div class="e-wallet-image-left pink-bg-new">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/dashboard/E-Wallet-w.png"
                  }
                  alt="image not found"
                />
              </div>
              <div class="e-wallet-content-right" title="€ 16,802.63 ">
                <h4>Bonus</h4>
                <span id="summary_bonus"> €16.80K </span>
              </div>
            </div>
          </div>
          <div cl0ass="new-dashboard-tile-ewallet">
            <div class="tile-new-dashboard-w-wallet d-flex">
              <div class="e-wallet-image-left red-bg-new">
                <img src="https://backoffice.infinitemlmsoftware.com/uploads/images/logos/Paid-w.png" />
              </div>
              <div class="e-wallet-content-right" title="€ 708.99 ">
                <h4>Paid</h4>
                <span id="summary_paid">€708.99</span>
              </div>
            </div>
          </div>
          <div class="new-dashboard-tile-ewallet">
            <div class="tile-new-dashboard-w-wallet d-flex">
              <div class="e-wallet-image-left yellow-bg-new">
                <img src="https://backoffice.infinitemlmsoftware.com/uploads/images/logos/Pending-w.png" />
              </div>
              <div class="e-wallet-content-right " title="€ 160.53 ">
                <h4>Pending</h4>
                <span id="summary_pending">€160.53</span>
              </div>
            </div>
          </div>
          <div class="new-dashboard-tile-ewallet">
            <div class="tile-new-dashboard-w-wallet d-flex">
              <div class="e-wallet-image-left blue-bg-new">
                <img src="https://backoffice.infinitemlmsoftware.com/uploads/images/logos/income-w.png" />
              </div>
              <div class="e-wallet-content-right" title="€ 50,194.28 ">
                <h4>Profit</h4>
                <span id="summary_profit">€50.19K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
