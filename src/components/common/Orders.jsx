import React, { Component } from "react";
import Maps from "./Maps"

class Orders extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className='container m-5'>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint
                provident blanditiis odit voluptatibus id.
           </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row m-5">
            <div className="col-8">
              <Maps />
            </div>
            <div className="col-4 mt-5">
              <div class="card mb-3">
                <img
                  src="https://www.restaurantmagazine.com/wp-content/uploads/2014/07/6-Tips-to-Increase-Pickup-Orders-at-Your-Restaurant1.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Your order is confirmed.</h5>
                  <h6 className="card-title font-size-bold">
                    <strong>Oreder No: {Date.now()}</strong>
                  </h6>
                  <p className="card-text">Thanks for helping for ...?</p>
                  <p className="card-text">
                    <small className="text-muted">Booked 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Orders;
