import React from "react";
import "../Shopping Cart/style.css";
import {Link} from "react-router-dom";
const ShoppingCart = () => {
  return (
    <Link to="/shoppingcart">
      <>
        <div className="">
          <div class="alert alert-light " style={{fontSize: 22 + "px"}}>
            Shopping Cart
          </div>
          <h5 className="ml-4 mt-2" style={{color: "grey"}}>
            <i
              class="fa fa-exclamation-circle bell "
              style={{color: "#ffad31", fontSize: 25 + "px"}}
            />
            <span style={{color: "black"}}>Note</span> : This is an add-on
            module
          </h5>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-sm-6">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            color: " rgb(66, 65, 65)",
                            fontSize: "16px",
                          }}
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          style={{
                            color: " rgb(66, 65, 65)",
                            fontSize: "16px",
                          }}
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          style={{
                            color: " rgb(66, 65, 65)",
                            fontSize: "16px",
                          }}
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          style={{
                            color: " rgb(66, 65, 65)",
                            fontSize: "16px",
                          }}
                        >
                          Quantity
                        </th>
                        <th
                          style={{
                            color: " rgb(66, 65, 65)",
                            fontSize: "16px",
                          }}
                        >
                          Sub Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Purchase Pack 1</td>
                        <td>$ 100.00 </td>
                        <td>2</td>
                        <td>$ 200.00 </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Purchase Pack 1</td>
                        <td>$ 100.00 </td>
                        <td>2</td>
                        <td>$ 200.00 </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td colspan="2"></td>
                        <td>Total</td>
                        <td>$ 400.00 </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* button */}
                  <Link to="/checkout">
                    <div className="btn btn-purple">
                      <i
                        className="fa fa-shopping-cart mr-2"
                        style={{fontSize: "20px"}}
                      />
                      Checkout
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* second cards */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div class="card">
                  <img
                    src={"/assets/img/dashboard/shopping.jpg"}
                    class="card-img-top card-img"
                    alt="not found"
                  />
                  <div class="card-body">
                    <h3 class="card-title">Purchase Pack 1</h3>
                    <p class="card-text">category1</p>
                    <p class="card-text2">$ 100.00 </p>
                    <div>
                      <Link to="/shoppingcart">
                        <div className="btn btn-info ">
                          <i className="fa fa-shopping-cart" /> Add to Cart
                        </div>
                      </Link>
                      <span>
                        <Link to="/moredetails">
                          <div className="btn btn-success ml-1">
                            <i
                              className="fa fa-shopping-eye "
                              style={{fontSize: "20px"}}
                            />
                            More Details
                          </div>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <img
                    src={"/assets/img/dashboard/shopping.jpg"}
                    class="card-img-top card-img"
                    alt="not found"
                  />
                  <div class="card-body">
                    <h3 class="card-title">Purchase Pack 1</h3>
                    <p class="card-text">category1</p>
                    <p class="card-text2">$ 100.00 </p>
                    <div>
                      <Link to="/shoppingcart">
                        <div className="btn btn-info ">
                          <i className="fa fa-shopping-cart" /> Add to Cart
                        </div>
                      </Link>
                      <span>
                        <Link to="/moredetails">
                          <div className="btn btn-success ml-1">
                            <i
                              className="fa fa-shopping-eye "
                              style={{fontSize: "20px"}}
                            />
                            More Details
                          </div>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div class="card">
                  <img
                    src={"/assets/img/dashboard/shopping.jpg"}
                    class="card-img-top card-img"
                    alt="not found"
                  />
                  <div class="card-body">
                    <h3 class="card-title">Purchase Pack 1</h3>
                    <p class="card-text">category1</p>
                    <p class="card-text2">$ 100.00 </p>
                    <div>
                      <Link to="/shoppingcart">
                        <div className="btn btn-info ">
                          <i className="fa fa-shopping-cart" /> Add to Cart
                        </div>
                      </Link>
                      <span>
                        <Link to="/moredetails">
                          <div className="btn btn-success ml-1">
                            <i
                              className="fa fa-shopping-eye "
                              style={{fontSize: "20px"}}
                            />
                            More Details
                          </div>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Link>
  );
};

export default ShoppingCart;
