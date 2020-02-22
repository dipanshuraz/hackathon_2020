import React from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound404";
import About from "../components/common/About";
import BookingPage from "../components/common/BookingPage";
import Contact from "../components/common/Contact";
import Login from "../components/common/Login";
import Singup from "../components/common/Singup";
import Orders from "../components/common/Orders";
import Home from "../components/common/Home";
import LandingPage from "../components/common/LandingPage";
import ProtectedRouter from "./ProtectedRoute";
import MobileNav from "../components/common/MobileNav.jsx";
import AddItem from "../components/common/AddItem";

const Routes = props => {
  // console.log(props.isAdmin, "<==-----");
  return (
    <div>
      <div className="d-sm-block d-md-none pb-5">
        <MobileNav />
      </div>
      <div
        className="container-fluid d-none d-md-block shadow-lg sticky-top"
        style={{ zIndex: "3", background: "#fff" }}
      >
        <div className="row">
          <div className="col-md-3 pt-md-3 pb-md-2">
            <ul className="d-sm-block d-md-flex justify-content-center" style={{ listStyle: "none" }}>
              <li>
                <Link
                  className="d-sm-block d-md-inline-block text-dark font-weigth-normal "
                  to="/"
                >
                  <img src="https://image.flaticon.com/icons/png/512/129/129255.png" height='27px' alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 pt-3 pb-2  text-center">
            <ul
              className="d-sm-block d-md-flex justify-content-between text-center"
              style={{ listStyle: "none" }}
            >
              <li>
                <Link
                  className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2 "
                  to="/home"
                >
                  Home
                </Link>
              </li>
              {props.isAdmin ? (
                <li>
                  <Link
                    className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2 "
                    to="/addItem"
                  >
                    Add Item
                  </Link>
                </li>
              ) : (
                  <></>
                )}
              <li>
                <Link
                  className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="d-sm-block d-md-inline-block text-dark font-weigth-normal px-2"
                  to="/orders"
                >
                  Your Orders
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-2 pt-3 pb-2">
            <ul
              className="d-sm-block d-md-flex text-right"
              style={{ listStyle: "none" }}
            >
              <li className="text-right">
                {props.isAuth ? (
                  <Link
                    className=" d-md-inline-block text-dark font-weigth-normal pl-2 text-right"
                    to="/logout"
                  >
                    Logout
                </Link>
                ) : (
                    <Link
                      className=" d-md-inline-block text-dark font-weigth-normal pl-2 text-right"
                      to="/login"
                    >
                      Login
                </Link>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Switch>

        <Route path="/logout" component={Login} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
        <ProtectedRouter exact path="/home" component={Home} />
        <ProtectedRouter exact path="/addItem" component={AddItem} />
        <ProtectedRouter exact path="/about" component={About} />
        <ProtectedRouter exact path="/contact" component={Contact} />
        <ProtectedRouter path="/orders" component={Orders} />
        <ProtectedRouter path="/booking-page/:id" component={BookingPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isAdmin: state.isAdmin,
  isAuth: state.isAuth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
