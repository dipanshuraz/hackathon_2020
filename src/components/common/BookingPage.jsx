import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

class BookingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-5">
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint
            provident blanditiis odit voluptatibus id.
          </p>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <div class="card mb-3">
                  <img
                    src="https://pd1hk.bumbcdn.com/ssc/static-eu.bumble.com/s1/files/e/2.1.mgfBZES6-elQXZ2rKcYFyaElMD2fSnElqrSXFyp1elQ4PcI2i2Lc8t013vrB-ez1/"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <p className="card-text">
                      <Link
                        className="text-primary"
                        to="/orders"
                        
                      >
                        Confirm
                      </Link>
                    </p>
                    <p className="card-link">
                      <Link to="/home">Cancle Order</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingPage;
